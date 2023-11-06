const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    augments: [{
        name: String // Assuming 'name' is the property of the 'augments' array
    }],
    companion: {
        content_ID: String,
        item_ID: Number,
        skin_ID: Number,
        species: String
    },
    gold_left: Number,
    last_round: Number,
    level: Number,
    placement: Number,
    players_eliminated: Number,
    puuid: String,
    summoner_Name: String,
    time_eliminated: Number,
    total_damage_to_players: Number,
    traits: [{
        name: String,          // Assuming 'name' is the property of the 'traits' array
        num_units: Number,
        style: Number,
        tier_current: Number,
        tier_total: Number
    }],
    units: [{
        character_id: String,  // Assuming 'character_id' is the property of the 'units' array
        itemNames: [String],   // Assuming 'itemNames' is an array of strings
        name: String,
        rarity: Number,
        tier: Number
    }]
});

module.exports = mongoose.model('Participant', participantSchema);
