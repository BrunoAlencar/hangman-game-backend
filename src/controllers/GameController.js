const Game = require('../model/Game');

module.exports = {

  // show products
  async start (req, res) {
    const countGames = await Game.count()
    const rand = Math.floor(Math.random() * countGames);
    const startedGame = await Game.findOne({}).skip(rand)
      .select({
        theme: true,
        word: true,
        _id: true
      })
    return res.json({
      id: startedGame._id,
      theme: startedGame.theme,
      quantityLetters: startedGame.word.length
    });
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
       
        const indexesOfLetters = getIndexesOfLettersByWord(game.word, letter)
        console.log(indexesOfLetters)
        
        if(!indexesOfLetters){
            return res.json({message: 'Letter not founded'});
        }
        return res.json({indexesOfLetters});
    } catch (error) {
        // return res.status(404).json({message: 'Id not founded'});
        return res.status(404).json({message: error.message});
    }
  },

  

};


function getIndexesOfLettersByWord (word, letterToVerify) {
  const indexesOfLetters = []
  word.split('').forEach((letter, index) => {
    if(letter.toLowerCase() == letterToVerify.toLowerCase()) 
      indexesOfLetters.push(index)
  })

  return indexesOfLetters
}