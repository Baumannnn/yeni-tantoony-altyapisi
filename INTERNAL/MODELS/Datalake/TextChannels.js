const mongoose = require('mongoose');
module.exports = mongoose.model('TextChannels', new mongoose.Schema({
    _id: String,
    name: String,
    nsfw: Boolean,
    parentID: String,
    position: Number,
    rateLimit: Number
}, { _id: false }));