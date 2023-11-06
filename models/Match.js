const mongoose = require('mongoose');

// Match Schema
const matchSchema = new mongoose.Schema({
    metadata: {
        data_version: String,
        match_id: String,
        participant_ids: [String],
    },
    info: {
        game_datetime: Number,
        game_length: Number,
        game_version: String,
        queue_id: Number,
        participants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Participant'}],
        tft_game_type: String,
        tft_set_core_name: String,
        tft_set_number: Number,
    },
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
