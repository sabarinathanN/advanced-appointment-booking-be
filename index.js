const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();
const port = 8080;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api/doctors', doctorRoutes);

mongoose.connect('mongodb+srv://sabarinathan_stack:Sabari123@cluster0.whyrcgy.mongodb.net/doctor?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('Failed to connect to MongoDB', err);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
