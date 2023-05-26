const {Bleat} = require('../models');
const auth = require('../utils/auth')

const bleatController = {
//    • Write Bleat, POST /api/bleat
    //     ◦ Header:
    //     ▪ auth token
    // ◦ Req Body: 
    //     ▪ BleatText
    // ◦ Operations:
    //     ▪ Validate token
    //     ▪ Write to MongoDB
    //     ▪ Returns new bleatID

    createBleat(req, res) {
        const validatedToken = auth.userFromToken(req.header.token)
        if (!validatedToken.verified) {
            res.status(401).json({message: 'Please login to make bleats'})
            return
        }
        const username = validatedToken.username
        Bleat.create([
            {bleatText: req.body.bleatText},
            {username: username}
        ])
            .then(dbBleatData => res.json(dbBleatData))
            .catch(err => res.status(500).json(err))
    }
};