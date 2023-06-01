const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/routes');

const app = express();

// Connect to MongoDB using MongoAtlas
mongoose.connect('mongodb+srv://fsd:fsd@fsd.cckgihj.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
