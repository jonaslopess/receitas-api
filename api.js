const express = require('express');
const mongoose = require('mongoose');
const app = express();
const recipesRoutes = require('./routes/recipes');

mongoose.connect('mongodb://localhost:27017/recipes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/recipes', recipesRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});