const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const recipesRoutes = require('./routes/recipes');
const ingredientsRoutes =  require('./routes/ingredients');

mongoose.connect('mongodb://127.0.0.1:27017/recipes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors({origin: "*"}));

app.use(express.json());
app.use('/recipes', recipesRoutes);
app.use('/ingredients', ingredientsRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});