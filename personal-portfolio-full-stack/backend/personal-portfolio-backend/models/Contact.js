const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 120 },
  subject: { type: String, required: true, trim: true, minlength: 3, maxlength: 120 },
  message: { type: String, required: true, trim: true, minlength: 10, maxlength: 3000 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Contact", contactSchema);