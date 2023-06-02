const jwt = require('jsonwebtoken')
require('dotenv').config()
// extract username from token
exports.userFromToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET, (error, response) => {
        if (error) {
            console.log(error)
            return {
                verfied: false,
                message: "Invalid token",
                error: error
            };
        }
        return {
            verified: true,
            username: response.username
        };
    });
};