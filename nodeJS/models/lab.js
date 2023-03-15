const mongoose = require("mongoose");

class Lab {
  constructor() {
    this.labSchema = new mongoose.Schema({
      LabID: {
        type: Number,
        required: true,
      },
      LabName: {
        type: String,
        required: true,
      },
      LabLocation: {
        type: String,
        required: true,
      },
      LabCategory: {
        type: String,
        required: true,
      },
      LabManagerID: {
        type: Number,
        required: true,
      },
      DepartmentID: {
        type: Number,
        required: true,
      },
    });
    this.model = mongoose.model("Lab", this.labSchema);
  }

  getModel() {
    return this.model;
  }
}

module.exports = Lab;
