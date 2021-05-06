exports.createPayload = (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: 'create item',
    });
};
exports.getAll = (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: 'get all items',
    });
};
exports.updateData = (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: 'update data',
    });
};
exports.deleteData = (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: 'delete data',
    });
};