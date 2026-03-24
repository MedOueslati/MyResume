import { useState } from "react";
import {
  FaComments,
  FaEnvelope,
  FaInternetExplorer,
  FaPhone,
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const icons = [
    { icon: <FaEnvelope />, title: "Email", info: "medoueslp@gmail.com" },
    { icon: <FaComments />, title: "Get Support", info: "Let's Chat with us" },
    { icon: <FaInternetExplorer />, title: "Website", info: "www.wavency.tn" },
    { icon: <FaPhone />, title: "Schedule a Meeting", info: "+216 58 870 446" },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // feedback

  const handleChange = (e) => {
    setFormData({
    ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/api/send-email", {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setStatus("Email sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
    } catch (error) {
      console.error(error);
      setStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <section className="py-40 px-6 md:px-16 space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
        Let's Bring Your Idea to Life!
      </h1>
      <p className="mt-3 text-gray-600">
        Have a project in mind or want to discuss a design idea? Let's talk.
      </p>

      <div className="mt-10 rounded-3xl border border-gray-300 p-6 md:p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Write Something"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0"
              required
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white font-semibold shadow-sm hover:opacity-90 cursor-pointer"
          >
            Send Message
          </button>
          {status && <p className="mt-2 text-sm text-green-500">{status}</p>}
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 rounded-3xl border border-gray-300 p-6 md:p-8 shadow-sm">
        {icons.map((item, i) => (
          <div key={i} className="p-6 bg-white rounded-xl">
            <div className="flex items-center gap-4">
              <div className="text-primary text-2xl">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600 mt-2">{item.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
