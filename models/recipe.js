const mongoose = require('mongoose');

// Definindo o schema para o modelo de receita
const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  ingredients: {
    type: Map,
    of: Number
  },
  description: String,
  instructions: [String],
  author: String
}, {
  timestamps: true
});

// Criando o modelo de receita
const Recipe = mongoose.model('Recipe', recipeSchema);

// Exportando o modelo para uso em outras partes da aplicação
module.exports = Recipe;