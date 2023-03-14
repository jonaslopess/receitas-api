const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

// Rota para criar uma nova receita
router.post('/create', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).send(receita);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para buscar todas as receitas
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.send(recipes);
  } catch (error) {
    res.status(500).send();
  }
});

// Rota para buscar uma receita específica pelo seu ID
router.get('/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const recipe = await Recipe.findById(_id);

    if (!recipe) {
      return res.status(404).send();
    }

    res.send(recipe);
  } catch (error) {
    res.status(500).send();
  }
});

// Rota para atualizar uma receita pelo seu ID
router.patch('/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const recipe = await Recipe.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });

    if (!recipe) {
      return res.status(404).send();
    }

    res.send(recipe);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para excluir uma receita pelo seu ID
router.delete('/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const recipe = await Recipe.findByIdAndDelete(_id);

    if (!recipe) {
      return res.status(404).send();
    }

    res.send(recipe);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;