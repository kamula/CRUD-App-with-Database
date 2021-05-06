const { all } = require('../app');
const Crud = require('../models/crudModel');
// create new data/payload function
exports.createPayload = async(req, res, next) => {
    try {
        const newData = await Crud.create(req.body);
        res.status(200).json({
            message: 'success',
            data: newData,
        });
    } catch (err) {
        res.status(400).json({
            message: 'fail',
            error: 'invalid data',
        });
    }
};
// get all data from database
exports.getAllData = async(req, res, next) => {
    try {
        const alldata = await Crud.find()
        res.status(200).json({
            message: 'success',
            count: alldata.length,
            data: {
                alldata
            }
        });
    } catch (err) {
        res.status(400).json({
            message: 'fail',
            error: "no data",
        });
    }
};
// update data
exports.updateData = (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: 'update data',
    });
};
// delete data
exports.deleteData = (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: 'delete data',
    });
};