const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength: [3, "name must at least be 3 characters long"]
    },

}, { timestamps: true }
);

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
