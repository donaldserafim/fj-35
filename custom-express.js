const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const consign = require('consign')
const cors  = require('cors')
const app = express()

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(expressValidator())
app.use(cors())

app.set('view engine','ejs')

//require('./routes/produtos')(app)
//require('./routes/home')(app)
consign().include('routes').into(app)




app.use(function(err,req,res,next){
    console.log(err)
    res.status(500).send("Erro brutal do servidor")
})

module.exports = app