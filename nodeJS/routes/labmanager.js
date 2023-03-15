const express = require('express');
const labManagerController = require('../controllers/labManagerController');

const router = express.Router();

router
  .route('/')
  .get(labManagerController.getLabManagers)
  .post(labManagerController.createLabManager);

router.route('/:labManagerId').get(labManagerController.getLabManager);

module.exports = router;
