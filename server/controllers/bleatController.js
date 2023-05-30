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

    deleteBleat(req, res) {
        const validatedToken = auth.userFromToken(req.headers.token)
        if (!validatedToken.verified) {
            res.status(401).json({ message: 'Not logged in' })
            return
        }
        const username = validatedToken.username
        Bleat.findOneAndDelete({ _id: req.params.id, username: username })
            .then(dbBleatData => {
                console.log(dbBleatData)
                if (!dbBleatData) {
                    res.status(404).json({ message: 'Invalid bleat id and/or username'})
                    return;
                }
                res.json(dbBleatData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })

    }
};

module.exports = bleatController