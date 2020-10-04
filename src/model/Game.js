const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  theme: {
    type: String,
    Required: true,
  },
  word: {
    type: String,
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Game = mongoose.model('game', gameSchema);

module.exports = Game;