const Player = require('../models/player.models');

module.exports.findAllPlayers = (req, res) => {
    Player.find().collation({ locale: 'en', strength: 2 }).sort({ name: 1 })
        .then((allPlayers) => {
            res.json({ Players: allPlayers })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneSinglePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(oneSinglePlayer => {
            res.json({ Player: oneSinglePlayer })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.createNewPlayer = (req, res) => {
    Player.create(req.body)
        .then(newlyCreatedPlayer => {
            res.json({ Player: newlyCreatedPlayer })
        })
        .catch(err => res.status(400).json(err))
}

module.exports.updateExistingPlayer = (req, res) => {
    Player.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPlayer => {
            res.json({ Player: updatedPlayer })
        })
        .catch(err => res.status(400).json(err))
}


module.exports.deleteAnExistingPlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}
