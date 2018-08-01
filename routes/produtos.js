const ProdutosController = require('../controllers/ProdutosController')
const produtosController = ProdutosController()

module.exports = function(app){

    app.get('/produtos/form',produtosController.formNovoProduto)

    app.post('/produtos',produtosController.salvarProduto)

    app.get('/produtos/:id',produtosController.findById)

    app.get('/produtos', produtosController.listaTodos)
}