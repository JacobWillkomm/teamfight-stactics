const Participant = require('../models/Participant'); // Import the Participant model
const externalApi = require(''); // Import the external API library

// Get a participant by ID
async function getParticipant(participantId) {
  try {
    const participant = await Participant.findById(participantId);
    return participant;
  } catch (error) {
    throw error;
  }
}

// Create a new participant
async function createParticipant(participantData) {
  try {
    const newParticipant = new Participant(participantData);
    const savedParticipant = await newParticipant.save();
    return savedParticipant;
  } catch (error) {
    throw error;
  }
}

// Get participant data from an external API
async function getParticipantFromAPI(username) {
  try {
    // Fetch participant data from the external API based on the username
    const participantData = await externalApi.fetchParticipant(username);
    return participantData;
  } catch (error) {
    throw error;
  }
}

async function getParticipantsForMatches(matches) {
    try {
      const participantIds = matches.map(match => match.participant_id);
      const participants = await Participant.find({ _id: { $in: participantIds } });
      return participants;
    } catch (error) {
      throw error;
    }
  }

module.exports = {
  getParticipant,
  createParticipant,
  getParticipantFromAPI,
};
