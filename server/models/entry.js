const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
	user_id: String,
	date_of_entry: {
		type: Date,
		default: Date.now
	},
	title: String,
	content: String,
	mood: String,

})

module.exports = mongoose.model('Entry', entrySchema);
