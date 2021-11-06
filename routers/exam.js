const express = require('express')
const router = express.Router()
const questionModel = require('../models/question')

// exam
router.get('/', async (req, res)=>{
    try {
        const questions = await questionModel.aggregate([
            { $sample: { size: 5 }}
        ])
        questions.map(question => {
            question.answers.sort(() => Math.random() - 0.5)
        })
        res.status(200).json(questions)
    }catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router