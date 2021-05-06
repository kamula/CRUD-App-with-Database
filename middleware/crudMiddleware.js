// middleware to validate the data in the request body
// for post request
exports.checkBodyData = (req, res, next) => {
    if (!req.body.name && !req.body.email && !req.body.country) {
        return res.status(400).json({
            message: 'missing name or email or country',
        });
    }
    next();
};