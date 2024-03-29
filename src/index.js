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
app.get('/revisao', (req,res)=>{
    res.sendFile(path.join(__dirname+'/pages/revisao.html'))
})
app.get('/resumo', (req,res)=>{
    res.sendFile(path.join(__dirname+'/pages/resume.html'))
})
app.get('/edicao', (req,res)=>{
    res.sendFile(path.join(__dirname+'/pages/edicao.html'))
})
app.listen(5000)


//socket.io start
const server = require('http').createServer(app);
const io = require('socket.io')(server);
server.listen(process.env.PORT || 5005);

io.on('connection', socket => {
    console.log(`socket conectado: ${socket.id}`)

    socket.on('atual', async id =>{
        let filtro = { _id :"5f0b4c0ee8cb56338c559a6a" }
        let atual = await Revisao.findOne(filtro)
        socket.emit('revAtual', atual);
    })
    
    socket.on('atualizar', async data =>{
        let filtro = { _id :"5f0b4c0ee8cb56338c559a6a" }
        let salvo = await Revisao.findOneAndUpdate(filtro, data,{
            new: true
        })
        socket.broadcast.emit('revAtual', salvo)
    })
    
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
})

//socket.io end

