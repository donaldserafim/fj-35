//imports
const http = require("http");

const server = http.createServer(function lidaComResquests(request, response){
    
    const rotas = []
    rotas['/'] = 'voce esta na home'
    rotas['/produtos'] = 'voce esta em produtos'

    console.log(rotas,request.url)
    response.end(rotas[request.url])
})

server.listen(3000, function(){//função é um callback
    console.log("servidor subiu")

});
