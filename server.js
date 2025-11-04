import express from "express"; 
const express = require("express");

// use require() if not using ES modules
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Node.js API!" });
});

// Import other routes
import apiRoutes from "./routes/api.js";
app.use("/api", apiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
