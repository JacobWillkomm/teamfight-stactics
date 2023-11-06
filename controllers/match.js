const matchService = require('../services/matchService');

// Create a new match with associated participants
const createMatch = async (req, res) => {
  try {
    const savedMatch = await matchService.createMatchWithParticipants(req.body);
    res.status(201).json(savedMatch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all matches with participants
const getAllMatches = async (req, res) => {
  try {
    const matches = await matchService.getAllMatchesWithParticipants();
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific match by ID with participants
const getMatchById = async (req, res) => {
  try {
    const matchId = req.params.id;
    const match = await matchService.getMatchByIdWithParticipants(matchId);
    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }
    res.json(match);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a specific match by ID
const updateMatch = async (req, res) => {
  try {
    const matchId = req.params.id;
    const updatedMatch = await matchService.updateMatch(matchId, req.body);
    res.json(updatedMatch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a specific match by ID
const deleteMatch = async (req, res) => {
  try {
    const matchId = req.params.id;
    const result = await matchService.deleteMatch(matchId);
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMatch,
  getAllMatches,
  getMatchById,
  updateMatch,
  deleteMatch,
};
