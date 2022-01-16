const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: String,
    user_name: String,
    photo_url: String,
    // access_token: String
})

module.exports = mongoose.model('User', userSchema);

