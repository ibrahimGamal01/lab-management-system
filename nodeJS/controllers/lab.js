const Lab = require("../models/lab");

// Get all labs
exports.getLabs = (req, res) => {
  Lab.find({}, (error, labs) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(200).send(labs);
  });
};

// Create a new lab
exports.createLab = (req, res) => {
  const newLab = new Lab(req.body);
  newLab.save((error, lab) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(201).send(lab);
  });
};

// Get a single lab
exports.getLab = (req, res) => {
  Lab.findById(req.params.labId, (error, lab) => {
    if (error) {
      return res.status(500).send(error);
    }
    if (!lab) {
      return res.status(404).send({ message: "Lab not found" });
    }
    return res.status(200).send(lab);
  });
};

// Update a lab
exports.updateLab = (req, res) => {
  Lab.findByIdAndUpdate(
    req.params.labId,
    req.body,
    { new: true },
    (error, lab) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (!lab) {
        return res.status(404).send({ message: "Lab not found" });
      }
      return res.status(200).send(lab);
    }
  );
};

// Delete a lab
exports.deleteLab = (req, res) => {
  Lab.findByIdAndDelete(req.params.labId, (error, lab) => {
    if (error) {
      return res.status(500).send(error);
    }
    if (!lab) {
      return res.status(404).send({ message: "Lab not found" });
    }
    return res.status(200).send({ message: "Lab deleted successfully" });
  });
};
