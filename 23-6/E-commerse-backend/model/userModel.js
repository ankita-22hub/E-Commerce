const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is Required"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Last Name is Required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        select: false,
        required: [true, "Password is Required"]
    },
});

module.exports = mongoose.model("User", userSchema);