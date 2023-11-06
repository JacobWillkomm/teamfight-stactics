const express = require('express');
const router = express.Router();
const ParticipantController = require('../controllers/participant'); // Import the Participant controller

// Create a new participant
router.post('/participants', ParticipantController.createParticipant);

// Get all participants
router.get('/participants', ParticipantController.getAllParticipants);

// Get a specific participant by ID
router.get('/participants/:id', ParticipantController.getParticipantById);

// Update a specific participant by ID
router.patch('/participants/:id', ParticipantController.updateParticipant);

// Delete a specific participant by ID
router.delete('/participants/:id', ParticipantController.deleteParticipant);

module.exports = router;
