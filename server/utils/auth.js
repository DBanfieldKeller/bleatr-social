// extract username from token
exports.userFromToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET, (error, response) => {
        if (error) {
            return {
                verfied: false,
                message: "Invalid token",
                error: error,
            };
        }
        return {
             username: response.username
        };
    });
};