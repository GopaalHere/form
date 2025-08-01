const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Replace with your MongoDB URI from Compass
const MONGO_URI = 'mongodb://127.0.0.1:27017/userFormApp';

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api', userRoutes);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
