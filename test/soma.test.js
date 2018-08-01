const assert = require('assert')
const soma = require('./soma')

describe("#Teste de soma", function(){
    it('2 + 2 deve retornar 4', function(done){
        assert.equal(soma(2,2),4, 'Alguem fez merda')
        done()
    })
    
    it('3 + 2 deve retornar 4', function(done){
        assert.equal(soma(3,2),5, 'Alguem fez merda')
        done()
    })
})