const express = require('express');
const app = express();

const publicRoutes = require('./routes/publicRoutes');
const privateRoutes = require('./routes/privateRoutes');


app.use(express.json());

// Routes
app.use('/public', publicRoutes);  // no auth needed
app.use('/private', authMiddleware, privateRoutes); 

module.exports = app;
