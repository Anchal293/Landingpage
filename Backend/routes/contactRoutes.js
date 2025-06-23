const express = require('express');
const router = express.Router();  // ✅ Pehle router define karo

const { postContact } = require('../controllers/contactController');

// ✅ Ab router ka use karo
router.post('/', postContact);

module.exports = router;