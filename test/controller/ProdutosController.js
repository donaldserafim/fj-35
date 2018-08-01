const request = require('supertest')
const app = require('../../custom-express')

describe("#Teste de HTML", function(){

    it('ProdutosController',function(done){
        request(app)
        .get('/produtos')
        .expect('Content-Type', /html/)
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
            done()
        });
    })
})

describe("#Teste de JSON", function(){

    it('ProdutosController',function(done){
        request(app)
        .get('/produtos')
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
            done()
        });
    })

    it('Deve Cadastrar um Produto',function(done){
        request(app)
        .post('/produtos')
        .send({ 
                "titulo": "livro js",
                "descricao": "um livro show",
                "autor": "fulano",
                "preco": 10
             })
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .expect(201)
        .end(function(err, res) {
            if (err) throw err;
            done()
        });
    })
})