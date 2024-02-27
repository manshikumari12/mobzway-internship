// app.js (or your main Express file)

const express = require('express');
const data = require('./data');

const app = express();

app.get('/api/data', (req, res) => {
  res.json(data); // Send the data as JSON
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
