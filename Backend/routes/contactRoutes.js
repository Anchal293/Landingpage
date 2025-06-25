const router = require('express').Router();
const { postContact, getContacts } = require('../controllers/contactController');

router.post('/', postContact);   //  POST /api/contact
router.get('/',  getContacts);   //  GET  /api/contact

module.exports = router;
