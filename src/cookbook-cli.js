const { Cookbook } = require('./cookbook');

class CookbookCli {
  constructor(cookbook) {
    this.cookbook = cookbook;
  }

  run(command, ...args) {
    switch (command) {
      case 'list': return this.list();
      case 'add': return this.add(...args);
      case 'get': return this.get();
      case 'remove': return this.remove();
      default: return `Whoops, the following command is unsupported: ${command}.`;
    }
  }

  list() {
    return `You have the following recipes: ${this.cookbook.listRecipes().join(',')}`;
  }

  add(name, ingredients) {
    this.cookbook.addRecipe(name, ingredients);
    return `Successfully added the following recipe: ${name}`;
  }

  get(name) {
    return `The ingredients for ${name} are: ${this.cookbook.getRecipe(name)}`;
  }

  remove(name) {
    this.cookbook.removeRecipe(name);
    return `Successfully removed the following recipe: ${name}`;
  }
}

module.exports = { CookbookCli };
