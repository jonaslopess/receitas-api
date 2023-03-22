const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');

// Rota para criar um novo ingrediente
router.post('/', async (req, res) => {
  try {
    const ingredient = new Ingredient(req.body);
    await ingredient.save();

    return res.status(201).json({ ingredient });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Rota para buscar todas as receitas
router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredient.find({});
    res.send(ingredients);
  } catch (error) {
    res.status(500).send();
  }
});

// Rota para buscar uma receita específica pelo seu ID
router.get('/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const ingredient = await Ingredient.findById(_id);

    if (!ingredient) {
      return res.status(404).send();
    }

    res.send(ingredient);
  } catch (error) {
    res.status(500).send();
  }
});

// Rota para atualizar uma receita pelo seu ID
router.patch('/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const ingredient = await Ingredient.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });

    if (!ingredient) {
      return res.status(404).send();
    }

    res.send(ingredient);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para excluir uma receita pelo seu ID
router.delete('/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const ingredient = await Ingredient.findByIdAndDelete(_id);

    if (!ingredient) {
      return res.status(404).send();
    }

    res.send(ingredient);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;