const LabManager = require('../models/labmanager');

exports.getLabManagers = async (req, res, next) => {
  try {
    const labManagers = await LabManager.find({});
    res.send(labManagers);
  } catch (error) {
    next(error);
  }
};

exports.createLabManager = async (req, res, next) => {
  try {
    const newLabManager = new LabManager(req.body);
    const labManager = await newLabManager.save();
    res.status(201).send(labManager);
  } catch (error) {
    next(error);
  }
};

exports.getLabManager = async (req, res, next) => {
  try {
    const labManager = await LabManager.findById(req.params.labManagerId);
    if (!labManager) {
      res.status(404).send();
    } else {
      res.send(labManager);
    }
  } catch (error) {
    next(error);
  }
};
