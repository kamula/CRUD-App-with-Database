const express = require('express');
const crudController = require('../controllers/crudController');


const router = express.Router();

// controller routes
router.route('/').get(crudController.getAllData).post(crudController.createPayload);
router
    .route('/:id')
    .patch(crudController.updateData)
    .delete(crudController.deleteData);
module.exports = router;