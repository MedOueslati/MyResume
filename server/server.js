const express = require("express");
const app = express();
const cors = require("cors");
const mailRoutes = require("./routes/mailRoutes");

require("dotenv").config(); // Load environment variables from .env file

const connectDatabase = require("./config/connectDatabase");
connectDatabase();

// Allow React frontend to make API requests
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

const PORT = process.env.PORT || 8081;

// Root route
app.get("/", (req, res) => {
    res.send("Hello from the server!");
});

// Routes
app.use("/api/send-email", mailRoutes);

// 404 handler
app.use((req, res) => res.status(404).json({ error: "Route not found" }));

// Optional: centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server Error" });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
