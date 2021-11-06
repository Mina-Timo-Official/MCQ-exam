const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    body:{
        type: String,
        required: true,
    },
    answers:[{
        answer: String,
        correct: Boolean
    }]

})

module.exports = mongoose.model('question', questionSchema)