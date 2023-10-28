const prompt = require('prompt-sync')();


const nearley = require('nearley');
const grammar = require("./m-sharp.js");

let parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

console.log("welcome to M-Sharp Shell\nEnter '--quit' to exit")
let inp = prompt("> ")


while (inp != "--quit"){
try {
    parser.feed(inp.trim());
    console.log("Parse Successful: ", parser.results)
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
}catch (e) {
    console.log(`Error: Invalid literal passed \n ${e.message}`)
}
inp = prompt("> ")

}

