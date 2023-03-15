const express = require("express");
const deviceController = require("../controllers/device");

const router = express.Router();

// Get all devices
router.get("/", deviceController.getDevices);

// Create a new device
router.post("/", deviceController.createDevice);

// Get a single device
router.get("/:deviceId", deviceController.getDevice);

// Update a device
router.patch("/:deviceId", deviceController.updateDevice);

// Delete a device
router.delete("/:deviceId", deviceController.deleteDevice);

module.exports = router;
