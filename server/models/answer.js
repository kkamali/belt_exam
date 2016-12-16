var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    _question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},

    answer: {
        type: String,
        required: true,
        minlength: 5, 
        trim: true,
    },

    details: {
        type: String,
        trim: true
    },

    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

var Answer = mongoose.model("Answer", AnswerSchema);
