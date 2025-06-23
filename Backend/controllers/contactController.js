const Contact = require('../models/contactModel');

exports.postContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json({ success: true, contact: newContact });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
