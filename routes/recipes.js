const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.post('/', async (req, res) => {
  const { title, description, ingredients, instructions, author } = req.body;

  try {
    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
      instructions,
      author
    });

    return res.status(201).json({ recipe });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

