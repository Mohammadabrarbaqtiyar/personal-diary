const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    user_id: String,
    
})

module.exports = mongoose.model('Entry', entrySchema);
