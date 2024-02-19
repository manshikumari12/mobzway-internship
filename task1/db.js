const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://127.0.0.1:27017/data', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { db };



