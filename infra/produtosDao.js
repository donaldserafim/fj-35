class ProdutosDAO {
    constructor(connection){
        this._connection = connection
    }

    listarTodos (callback){
        this._connection.query('SELECT * FROM livros',callback)
    }

    findById(id, callback){
        return new Promise((resolve,reject) => {
            this._connection.query('SELECT * FROM livros where id = ?',id,function(erros,result){
                resolve(result)
                reject(erros)
            })
        })
    }

    save(produto){

        return new Promise((resolve,reject) => {
            this._connection.query('INSERT INTO livros set ?',produto,function(erros,result){
                console.log(result)
                resolve(result)
                reject(erros)
            })
        })

    }
}

module.exports = ProdutosDAO


/* module.exports = function(connection){
    return{
        listarTodos: function(callback){
            console.log(callback);
            connection.query('select * from livros',callback)
        }
    }
} */