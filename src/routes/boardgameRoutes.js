// src/routes/boardgameRoutes.js
const express = require('express');
const router = express.Router();
const Boardgame = require('../models/boardgameModel');

// CRUD Endpoints

// Create a boardgame
router.post('/', async (req, res) => {
  try {
    const boardgame = new Boardgame(req.body);
    await boardgame.save();
    res.status(201).send(boardgame);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all boardgames
router.get('/', async (req, res) => {
  try {
    const boardgames = await Boardgame.find();
    res.send(boardgames);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read a specific boardgame by ID
router.get('/:id', async (req, res) => {
  try {
    const boardgame = await Boardgame.findById(req.params.id);
    if (!boardgame) {
      return res.status(404).send({ error: 'Boardgame not found' });
    }
    res.send(boardgame);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a boardgame by ID
router.patch('/:id', async (req, res) => {
  try {
    const boardgame = await Boardgame.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!boardgame) {
      return res.status(404).send({ error: 'Boardgame not found' });
    }
    res.send(boardgame);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a boardgame by ID
router.delete('/:id', async (req, res) => {
  try {
    const boardgame = await Boardgame.findByIdAndDelete(req.params.id);
    if (!boardgame) {
      return res.status(404).send({ error: 'Boardgame not found' });
    }
    res.send(boardgame);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
