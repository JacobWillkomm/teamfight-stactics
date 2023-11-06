const Participant = require('../models/Participant'); // Import the Participant model

// Create a new participant
const createParticipant = async (req, res) => {
  try {
    const newParticipant = new Participant(req.body);
    const savedParticipant = await newParticipant.save();
    res.status(201).json(savedParticipant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all participants
const getAllParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific participant by ID
const getParticipantById = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    if (!participant) {
      return res.status(404).json({ message: 'Participant not found' });
    }
    res.json(participant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a specific participant by ID
const updateParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!participant) {
      return res.status(404).json({ message: 'Participant not found' });
    }
    res.json(participant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a specific participant by ID
const deleteParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndRemove(req.params.id);
    if (!participant) {
      return res.status(404).json({ message: 'Participant not found' });
    }
    res.json({ message: 'Participant deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createParticipant,
  getAllParticipants,
  getParticipantById,
  updateParticipant,
  deleteParticipant,
};
