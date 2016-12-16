var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

    question: {
        type: String,
        required: true,
        minlength: 10, 
        unique: true,
        trim: true,
    },

    description: {
        type: String,
        trim: true
    },

    answers: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

var Question = mongoose.model("Question", QuestionSchema);
