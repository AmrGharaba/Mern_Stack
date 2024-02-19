const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: [true, ""],
        // minlength: [10, ""]
    },
    price: {
        type: Number,
        // required: [true, ""],
        // minlength: [3, ""]
    },
    description: {
        type: String,
        // required: [true, ""],
        // minlength: [10, ""]
    },

}, { timestamps: true }
);

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
