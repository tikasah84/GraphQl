const { gql } = require("apollo-server");

module.exports = gql`
  type Recipe {
    name: String
    description: String
    createdAt: String
    thubmUp: Int
    thubmDown: Int
  }

  input RecipeInput {
    name: String
    description: String
  }

  input EditRecipeInput {
    name: String
  }

  type Query {
    recipe(ID: ID!): Recipe!
    getRecipes(amount: Int): [Recipe]
  }

  type Mutation {
    createRecipe(input: RecipeInput): Recipe!
    deleteRecipe(ID: ID!): Boolean
    editRecipe(ID: ID!, input: RecipeInput): Boolean
  }
`;
