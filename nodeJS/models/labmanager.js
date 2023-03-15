const mongoose = require("mongoose");

class LabManager {
  constructor() {
    this.labManagerSchema = new mongoose.Schema({
      LabManagerID: {
        type: Number,
        required: true,
      },
      FirstName: {
        type: String,
        required: true,
      },
      LastName: {
        type: String,
        required: true,
      },
      Email: {
        type: String,
        required: true,
      },
      Password: {
        type: String,
        required: true,
      },
    });
    this.model = mongoose.model("LabManager", this.labManagerSchema);
  }

  async save() {
    const labManager = new this.model(this);
    return labManager.save();
  }

  static async findAll() {
    return this.model.find({});
  }
}

module.exports = LabManager;

// class Department {
//     constructor() {
//         this.DepartmentID = DepartmentID;
//         this.DepartmentID = DepartmentID;

//     }

//     async save() {

//     }
//     static findAll() {}
//   }

// const mongoose = require("mongoose");
// class LabManager {
//   constructor() {
//     this.labManagerSchema = new mongoose.Schema({
//       LabManagerID: {
//         type: Number,
//         required: true,
//       },
//       FirstName: {
//         type: String,
//         required: true,
//       },
//       LastName: {
//         type: String,
//         required: true,
//       },
//       Email: {
//         type: String,
//         required: true,
//       },
//       Password: {
//         type: String,
//         required: true,
//       },
//     });
//     this.model = mongoose.model("LabManager", this.labManagerSchema);
//   }
//   getModel() {
//     return this.model;
//   }
// }

// module.exports = LabManager;