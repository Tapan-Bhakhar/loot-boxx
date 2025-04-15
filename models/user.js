const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },


}, { timestamps: true });

mongoose.models = {}; // Clear the models cache to avoid duplicate model error
export default mongoose.model('User', UserSchema);