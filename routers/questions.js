const express = require('express')
const router = express.Router()
const questionModel = require('../models/question')

// get all
router.get('/',async (req, res) =>{
    try {
        const questions = await questionModel.find()
        res.json(questions)
    }catch (err){
        res.status(500).json({message: err.message})
    }
})

// create
router.post('/', async (req, res) =>{
    // console.log("mina");
    // res.status(201).json(req.body);
    // return false;
    try {
        const question = new questionModel({
            body: req.body.body,
            answers: req.body.answers
        })
        const newQuestion = await question.save()
        res.status(201).json(newQuestion)
    }catch (err){
        res.status(400).json({message: err.message})
    }
})
// update
// router.post('/update-question/:id',async (req, res)=>{
//     try {
//         questionModel.updateOne()
//     }catch (err){
//         res.json(err)
//     }
// })
// delete
module.exports = router
