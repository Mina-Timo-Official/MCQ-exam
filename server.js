require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const Auth = require('./middleware/auth')
mongoose.connect(process.env.MongoDb_url, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (err) => {console.log(err)})
db.once('open', () => {console.log("database connected")})

app.use(cors())
app.use(express.json())
// app.use(bodyParser.json())
const questionsRouter = require('./routers/questions')
const examRouter = require('./routers/exam')
var student = {name:''}
app.get('/', (req, res)=>{
    console.log("home")
    res.send("home")
})
app.post('/', (req, res)=>{
    // console.log(req.body.name);
    // return res.json(req.body.name);
    student.name = ''
    if(req.body.name){
        student.name = req.body.name
        res.redirect('/exam')
    }else
        res.status(302).json("log ya abn ws5a")
})
app.use(Auth(student))
app.use('/questions', questionsRouter)
app.use('/exam', examRouter)

app.listen(3000, () => {
    console.log("server")
})