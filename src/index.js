const { CookBookCli } = require('./cookbook-cli');

const ARGS = process.argv.slice(2);
const [command, name, ingredients] = ARGS;

console.log(new CookBookCli().run(command, name, ingredients));
