const mongoose = require('mongoose');

const traitSchema = new mongoose.Schema({
    name: String,
    num_units: Number,
    style: Number,
    tier_current: Number,
    tier_total: Number
});

module.exports = mongoose.model('Trait', traitSchema);
