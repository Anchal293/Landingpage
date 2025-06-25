const Contact = require('../models/contactModel');

exports.postContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await new Contact({ name, email, message }).save();
    res.status(201).json({ success: true, message: 'Message saved' });
  } catch (err) {
    console.error('Contact save error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const all = await Contact.find().sort({ createdAt: -1 });
    res.json(all);
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed' });
  }
};
