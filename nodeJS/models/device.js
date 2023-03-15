const mongoose = require("mongoose");

class Device {
  constructor() {
    this.deviceSchema = new mongoose.Schema({
      DeviceID: {
        type: Number,
        required: true,
      },
      DeviceName: {
        type: String,
        required: true,
      },
      DeviceType: {
        type: String,
        required: true,
      },
      DeviceImage: {
        type: String,
      },
      DeviceDescription: {
        type: String,
      },
      LabID: {
        type: Number,
        required: true,
      },
    });
    this.model = mongoose.model("Device", this.deviceSchema);
  }

  getModel() {
    return this.model;
  }
}

module.exports = Device;
