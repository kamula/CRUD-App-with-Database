const { all } = require('../app');
const Crud = require('../models/crudModel');
// create new data/payload function
exports.createPayload = async(req, res) => {
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
exports.getAllData = async(req, res) => {
    try {
        const alldata = await Crud.find();
        res.status(200).json({
            message: 'success',
            count: alldata.length,
            data: {
                alldata,
            },
        });
    } catch (err) {
        res.status(400).json({
            message: 'fail',
            error: 'no data',
        });
    }
};
exports.getSingleItem = async(req, res) => {
    try {
        const data = await Crud.findById(req.params.id);
        res.status(204).json({
            message: 'success',
            data: {
                data,
            },
        });
    } catch (err) {}
};
// update data
exports.updateData = async(req, res) => {
    try {
        // update and return the updated data to client
        const updatedData = await Crud.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            message: 'success',
            data: {
                updatedData,
            },
        });
    } catch (err) {
        res.status(400).json({
            message: 'fail',
            error: 'not updated',
        });
    }
};
// delete data and return response
exports.deleteData = async(req, res) => {
    try {
        await Crud.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'success',
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            message: 'fail',
            error: 'delete failed',
        });
    }
};