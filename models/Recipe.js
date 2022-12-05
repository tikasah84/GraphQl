const { model, Schema } = require("mongoose");

const recipeSchema = new Schema({
  name: String,
  description: String,
  createdAt: String,
  thubmUp: Number,
  thubmDown: Number,
});

module.exports = model("Recipe", recipeSchema);
