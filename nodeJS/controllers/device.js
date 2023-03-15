const Device = require("../models/device");

// Get all devices
exports.getDevices = (req, res) => {
  Device.find({}, (error, devices) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(200).send(devices);
  });
};

// Create a new device
exports.createDevice = (req, res) => {
  const newDevice = new Device(req.body);
  newDevice.save((error, device) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(201).send(device);
  });
};

// Get a single device
exports.getDevice = (req, res) => {
  Device.findById(req.params.deviceId, (error, device) => {
    if (error) {
      return res.status(500).send(error);
    }
    if (!device) {
      return res.status(404).send({ message: "Device not found" });
    }
    return res.status(200).send(device);
  });
};

// Update a device
exports.updateDevice = (req, res) => {
  Device.findByIdAndUpdate(
    req.params.deviceId,
    req.body,
    { new: true },
    (error, device) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (!device) {
        return res.status(404).send({ message: "Device not found" });
      }
      return res.status(200).send(device);
    }
  );
};

// Delete a device
exports.deleteDevice = (req, res) => {
  Device.findByIdAndDelete(req.params.deviceId, (error, device) => {
    if (error) {
      return res.status(500).send(error);
    }
    if (!device) {
      return res.status(404).send({ message: "Device not found" });
    }
    return res.status(200).send({ message: "Device deleted successfully" });
  });
};
