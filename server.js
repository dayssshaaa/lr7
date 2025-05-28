require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const carRoutes = require('./src/routes/carRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/cars', carRoutes);

app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});