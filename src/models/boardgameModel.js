// src/models/boardgameModel.js
const mongoose = require('mongoose');

const boardgameSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  players: { type: Number },
  duration: { type: Number },
});

const Boardgame = mongoose.model('Boardgame', boardgameSchema);

module.exports = Boardgame;
