const express = require("express");
const rotaLivro = require("./Router/livro");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" })) //está pronto para receber requisições de qualquer origem

app.use('/livros', rotaLivro);

const port = 8000;

app.listen(port, () => {
	console.log(`Escutando a porta ${port}`);
})