const { CookBookCli } = require('./cookbook-cli');
const { CookBook } = require('./cookbook');

const ARGS = process.argv.slice(2);
const [command, name, ingredients] = ARGS;

console.log(new CookBookCli(new CookBook()).run(command, name, ingredients));
