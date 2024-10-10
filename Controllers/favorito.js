const { getTodosFavoritos, insereFavorito, deletaFavoritoPorID } = require("../Service/favorito");

function getFavoritos(req, res) {
  try {
    const livros = getTodosFavoritos();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postFavorito(req, res) {
	try {
		const id = req.params.id
    insereFavorito(id)
    res.status(201)
    res.send("Favorito inserido com sucesso")
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteFavorito(req, res) {
  //obtemos os IDs dos parametros, enviamos para um função deletaLivroPorId e retornamos a mensagem de sucesso, caso contrario retorna um erro
  try {
    const id = req.params.id;
    
		if (id && Number(id)) {
			deletaFavoritoPorID(id)
			res.send("Favorito deletado com sucesso")
		} else {
			res.status(422)
			res.send("Id inválido")
		}
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
	getFavoritos,
	postFavorito,
	deleteFavorito,
}