const mongoose = require('mongoose');

const augmentSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Augment', augmentSchema);
