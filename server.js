require('dotenv').config()
const app = require('./custom-express')

const port = process.env.PORT;
app.listen(3000, function(){
    console.log(`Servidor subiu em http://localhost:${port}`)
})