const express = require('express');
const router = express.Router();
const employeesController = require('../../../controllers/employeesController');

router.route('/').get(employeesController.getAllEmployees).put(employeesController.updateEmployee);

router.route('/:id').get(employeesController.getEmployee);

module.exports = router;
