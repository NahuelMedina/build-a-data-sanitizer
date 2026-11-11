const { stripHtml } = require("./utils/stripHtml.js");

const inputCleaner = (req, res, next) => {
    if (req.body.username) {
        req.body.username = req.body.username.toLowerCase();
    }
    if(req.body.comment){
        req.body.comment = stripHtml(req.body.comment);
    }

    next();
}
const inputValidator = (req, res, next) => {
    if (req.body.username.length < 3) {
        return res.redirect("/form?error=Username must be at least 3 characters.");
    }

    next();
}

module.exports = {
    inputCleaner,
    inputValidator
};