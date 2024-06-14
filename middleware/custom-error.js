
const customApiError = require('../errors/errorclass');

const errorhandlemiddleware = (err, req, res, next) => {
    if (err instanceof customApiError) {
        return res.status(err.status).json({ msg: err.message });
    }
    res.status(500).send("Something went wrong, try again");
};

module.exports = errorhandlemiddleware;
