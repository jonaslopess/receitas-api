const mongoose = require('mongoose');

// Definindo o schema para o modelo de ingrediente
const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  convertRule: Number
}, {
  timestamps: true
});

// Criando o modelo de ingrediente
const Ingredient = mongoose.model('Ingredient', ingredientSchema);

// Exportando o modelo para uso em outras partes da aplicação
module.exports = Ingredient;