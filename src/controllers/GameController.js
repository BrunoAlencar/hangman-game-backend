const Game = require('../model/Game');

module.exports = {

  // show products
  async start (req, res) {
    const countGames = await Game.count()
    const rand = Math.floor(Math.random() * countGames);
    const startedGame = await Game.findOne({}).skip(rand).select({theme: true})

    return res.json(startedGame);
  },

  // add new values
  async create (req, res) {
    const game = await Game.create(req.body);

    return res.json(game);
  },


  async checkLetter (req, res) {
    const { id, letter } = req.body;
    try {
        const game = await Game.findById(id)
        console.log(game)
        const indexOfLetter = game.word.indexOf(letter);
        if( indexOfLetter == -1){
            return res.json({message: 'Letter not founded'});
        }
        return res.json({indexOfLetter});
    } catch (error) {
        return res.status(404).json({message: 'Id not founded'});
    }
  }

};
