const nodemailer = require("nodemailer");
const Message = require("../models/messageSchema");

exports.sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // 1️⃣ Save message to database
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    // 2️⃣ Send email
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
        servername: process.env.MAIL_HOST,
      },
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.MAIL_USER, // you receive the message
      subject: `New Contact: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message saved and email sent!" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to send email or save message" });
  }
};
