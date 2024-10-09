const fs = require("fs") 

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json")); //função que irá ler as informações
const novoDado = {id:'3', nome:'Livro 3'}

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado])); //função que irá escrever informações

console.log(JSON.parse(fs.readFileSync("livros.json")));
