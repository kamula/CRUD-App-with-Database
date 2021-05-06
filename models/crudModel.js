const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name required'],
    },
    email: {
        type: String,
        required: [true, 'email required'],
        unique: true,
        lowercase: true,
    },
    country: {
        type: String,
        required: [true, 'country required'],
    },
});

const Crud = mongoose.model('Crud', crudSchema);

module.exports = Crud