const express = require('express');
const router = express.Router();
const MatchController = require('../controllers/match'); // Import the Match controller

// Create a new match
router.post('/matches', MatchController.createMatch);

// Get all matches
router.get('/matches', MatchController.getAllMatches);

// Get a specific match by ID
router.get('/matches/:id', MatchController.getMatchById);

// Update a specific match by ID
router.patch('/matches/:id', MatchController.updateMatch);

// Delete a specific match by ID
router.delete('/matches/:id', MatchController.deleteMatch);

module.exports = router;
