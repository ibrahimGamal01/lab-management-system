const mongoose = require("mongoose");

class Department {
  constructor() {
    this.departmentSchema = new mongoose.Schema({
      DepartmentID: {
        type: Number,
        required: true,
      },
      DepartmentName: {
        type: String,
        required: true,
      },
    });
    this.model = mongoose.model("Department", this.departmentSchema);
  }

  getModel() {
    return this.model;
  }
}

module.exports = Department;
