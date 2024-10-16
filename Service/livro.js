const fs = require("fs");

function getTodosLivros() {
	return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
	const livros = JSON.parse(fs.readFileSync("livros.json"));

	const livroFiltrado = livros.filter(livro => livro.id === id)[0];
	return livroFiltrado;
}

function insereLivro(livroNovo) {
	const livros = JSON.parse(fs.readFileSync("livros.json"));

	const novaListadeLivros = [...livros, livroNovo]

	fs.writeFileSync("livros.json", JSON.stringify(novaListadeLivros))
}

function modificaLivro(modificacoes, id) {
	let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
	const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
	
	const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes } //criará um objeto novo em um indice especifico de livrosAtuais com todos os campos que existem neste ultimo
	livrosAtuais[indiceModificado] = conteudoMudado
	fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivroPorId(id) {
	const livros = JSON.parse(fs.readFileSync("livros.json"))

	const livrosFiltrados = livros.filter(livro => livro.id !== id)
	fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
	getTodosLivros,
	getLivroPorId,
	insereLivro,
	modificaLivro,
	deletaLivroPorId
}