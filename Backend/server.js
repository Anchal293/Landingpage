// server.js
const express = require('express');
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Contact = require('./models/contactModel');
const orderRoutes = require('./routes/orderRoutes');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const { postContact } = require('./controllers/contactController');
const cors = require('cors');
require("dotenv").config();


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Error:', err));

const PORT = process.env.PORT;

// Static folder serve karo
app.use(express.static(path.join(__dirname, "../Frontend/public")));

//API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

// router.post('/', postContact);


// Root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Server start karo
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
