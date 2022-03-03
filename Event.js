const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    content: String,
    start: Date,
    end: Date
});

module.exports = mongoose.model('Event', schema);