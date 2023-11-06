const Match = require('./models/Match'); // Import the Match model
const externalApi = require('./externalApi'); // Import the external API library
const participantService = require('./participantService'); // Import the ParticipantService

// Initialize the service and set the participantService as a dependency
function initialize(participantService) {
    this.participantService = participantService;
  
    return {
      getMatchesAndParticipants,
      // Other functions
    };
  }

// Get a list of matches
async function getMatchList() {
  try {
    const matches = await Match.find();
    return matches;
  } catch (error) {
    throw error;
  }
}

// Function that requires interaction with the participantService
async function getMatchesAndParticipants(username) {
    try {
      const matches = await Match.find({ username });
      const participants = await this.participantService.getParticipantsForMatches(matches);
      
      // You can perform any additional processing here
      
      return { matches, participants };
    } catch (error) {
      throw error;
    }
  }

// Create a new match
async function createMatch(matchData) {
  try {
    const newMatch = new Match(matchData);
    const savedMatch = await newMatch.save();
    return savedMatch;
  } catch (error) {
    throw error;
  }
}

// Get a match by ID
async function getMatch(matchId) {
  try {
    const match = await Match.findById(matchId);
    return match;
  } catch (error) {
    throw error;
  }
}

// Get matches from an external API
async function getMatchListFromAPI(username) {
  try {
    // Fetch match data from the external API based on the username
    const matches = await externalApi.fetchMatches(username);
    return matches;
  } catch (error) {
    throw error;
  }
}

// Get a single match from an external API
async function getMatchFromAPI(matchId) {
  try {
    // Fetch match data from the external API based on the matchId
    const match = await externalApi.fetchMatch(matchId);
    return match;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  initialize,
  getMatchList,
  getMatchesAndParticipants,
  createMatch,
  getMatch,
  getMatchListFromAPI,
  getMatchFromAPI,
};
