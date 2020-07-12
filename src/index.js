const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const app = express()
const Revisao = require('./models/revisao')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
//app.use(cors())

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/pages/index.html'))
})

app.post('/atual',async (req,res)=>{
    let filtro = { _id :"5f0b4c0ee8cb56338c559a6a" }
    let atual = await Revisao.findOne(filtro)
    return res.send({atual})
})

app.post('/atualizar', async (req,res)=>{
    let {segR,segO,terR,terO,quaR,quaO,quiR,quiO,sexR,sexO,sabR,sabO,domR,domO} = req.body
    let filtro = { _id :"5f0b4c0ee8cb56338c559a6a" }
    let salvo = await Revisao.findOneAndUpdate(filtro, req.body,{
        new: true
      })
    res.send({salvo})
})
app.listen(8080)