const { Bleat } = require('../models');
const auth = require('../utils/auth')

const bleatController = {

    // create bleat
    createBleat(req, res) {
        const validatedToken = auth.userFromToken(req.headers.token)
        if (!validatedToken.verified) {
            res.status(401).json({ message: 'Not logged in' })
            return
        }
        const username = validatedToken.username
        Bleat.create([
            {
                bleatText: req.body.bleatText,
                username: username
            },
        ])
            .then(dbBleatData => res.json(dbBleatData))
            .catch(err => res.status(500).json(err))
    },

    // delete bleat
    deleteBleat(req, res) {
        const validatedToken = auth.userFromToken(req.headers.token)
        if (!validatedToken.verified) {
            res.status(401).json({ message: 'Not logged in' })
            return
        }
        const username = validatedToken.username
        Bleat.findOneAndDelete({ _id: req.params.id, username: username })
            .then(dbBleatData => {
                if (!dbBleatData) {
                    res.status(404).json({ message: 'Invalid bleat id and/or username' })
                    return;
                }
                res.json(dbBleatData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })

    },

    // get recent bleats
    getRecentBleats(req, res) {
        Bleat.find({})
            .populate({ path: 'replies', select: '-__v' })
            .select('-__v')
            .limit(req.query.bleatNumber)
            .sort({ createdAt: -1 })
            .then(dbBleatData => res.json(dbBleatData))
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            });
    },

    // get single bleat by ID
    getSingleBleat(req, res) {
        Bleat.findOne({ _id: req.params.id })
            .populate({ path: 'replies', select: '-__v' })
            .select('-__v')
            .then(dbBleatData => {
                console.log(dbBleatData)
                if (!dbBleatData) {
                    res.status(404).json({ message: 'Invalid bleat ID' })
                    return;
                }
                res.json(dbBleatData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    },

    // get all bleats by username, returns empty array if user doesn't exist/has no bleats
    getBleatsByUser(req, res) {
        Bleat.find({ username: req.params.username })
            .populate({ path: 'replies', select: '-__v' })
            .select('-__v')
            .limit(req.query.bleatNumber)
            .then(dbBleatData => {
                console.log(dbBleatData)
                res.json(dbBleatData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    },

    // reply to bleat
    replyToBleat(req, res) {
        const validatedToken = auth.userFromToken(req.headers.token)
        if (!validatedToken.verified) {
            res.status(401).json({ message: 'Not logged in' })
            return
        }
        const username = validatedToken.username
        Bleat.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { replies: { replyBody: req.body.replyText, username: username } } },
            { new: true })
            .populate({ path: 'replies', select: '-__v' })
            .select('-__v')
            .then(dbBleatData => {
                if (!dbBleatData) {
                    res.status(404).json({ message: 'No bleat with that ID' })
                    return;
                }
                res.json(dbBleatData)
            })
            .catch(err => res.status(500).json(err))

    },

    // delete reply
    // TODO: figure out how to send error message for failed delete
    deleteReply(req, res) {
        const validatedToken = auth.userFromToken(req.headers.token)
        if (!validatedToken.verified) {
            res.status(401).json({ message: 'Not logged in' })
            return;
        }
        const username = validatedToken.username
        Bleat.findOneAndUpdate(
            { _id: req.params.bleatID },
            { $pull: { replies: { _id: req.params.replyID, username: username } } },
            { runValidators: true, new: true }
        )
            .then(dbBleatData => {
                if (!dbBleatData) {
                    res.status(404).json({ message: 'No bleat with that ID' })
                    return;
                }
                res.json(dbBleatData)
            })
            .catch(err => res.status(400).json(err))
    }
};

module.exports = bleatController