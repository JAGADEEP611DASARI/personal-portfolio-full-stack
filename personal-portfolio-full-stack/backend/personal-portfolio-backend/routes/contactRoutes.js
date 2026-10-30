const router = require("express").Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (![name, email, subject, message].every(value => typeof value === "string" && value.trim())) {
      return res.status(400).json({ message: "Please provide name, email, subject and message." });
    }
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!validEmail) return res.status(400).json({ message: "Please enter a valid email address." });
    if (name.trim().length < 2 || subject.trim().length < 3 || message.trim().length < 10) {
      return res.status(400).json({ message: "Please check the minimum length of each field." });
    }
    const contact = await Contact.create({ name, email, subject, message });
    return res.status(201).json({ message: "Message saved successfully.", id: contact._id });
  } catch (error) {
    console.error("Contact form error:", error.message);
    return res.status(500).json({ message: "Server error while saving your message." });
  }
});

router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }).select("-__v");
    res.json({ count: messages.length, messages });
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve messages." });
  }
});

module.exports = router;