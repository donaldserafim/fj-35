const connection = require('../infra/connectionFactory')()
const ProdutoDAO = require('../infra/produtosDao')
const produtoDAO = new ProdutoDAO(connection)

module.exports = () => {
    return{
        formNovoProduto: (req,res) => {
            res.render('produtos/form')
        },
        salvarProduto: (req,res) => {
        
            req.assert('titulo','Titulo não pode ser vazio').notEmpty()
    
            req.assert('preco','Preço não pode ser vazio').notEmpty()
    
            req.assert('preco','Deve ser um Float').notEmpty()
    
            const erros = req.validationErrors()
    
            if(erros){
                res.format({
                    html: function(){
                        res.status(400).render('produtos/form',{erros:erros})
                    },
                    json: function(){
                        res.json(erros)
                    }
                })
            }else{
                produtoDAO.save(req.body)
                    .then(function(results){
                        res.format({
                            html: function(){
                                res.redirect('/produtos')
                            },
                            json: function(){
                                res.status(201).json({msg:'Produto Cadastrado com sucesso'})
                            }
                        })
                    })
            }
        },
        findById: (req,res) =>  {
        
            produtoDAO.findById(req.params.id)
                .then(function(results){
                    res.render('produtos/lista',{lista:results})
                })
    
        },
        listaTodos: (req, res) => {

            produtoDAO.listarTodos(function(err,results,fields){
                const produtos  = results
                res.format({
                    html: function(){
                        res.render('produtos/lista',{lista:produtos})
                    },
                    json: function(){
                        res.json(produtos)
                    }
                })
            })
        }
    }
}