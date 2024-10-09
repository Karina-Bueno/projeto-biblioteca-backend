const { Router } = require("express");
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../Controllers/livro");


const router = Router();

router.get('/', getLivros);
router.get('/:id', getLivro);

router.post('/', postLivro);
router.patch('/:id', patchLivro);

router.patch('/', (req, res) => {
	res.send("Você fez uma requisição do tipo PATCH")
})

router.delete('/', (req, res) => {
	res.send("Você fez uma requisição do tipo DELETE")
})
router.delete('/:id', deleteLivro);

module.exports = router;
