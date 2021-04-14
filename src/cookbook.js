class Cookbook {
  constructor() {
    this.recipes = {};
  }

  addRecipe(name, ingredients) {
    this.recipes[name] = ingredients;
  }

  listRecipes() {
    return Object.keys(this.recipes);
  };

  getRecipe(name) {
    return this.recipes[name];
  }

  removeRecipe(name) {
    delete this.recipes[name];
  }
}

module.exports = { Cookbook };
