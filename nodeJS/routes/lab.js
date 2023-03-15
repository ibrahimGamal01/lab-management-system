const express = require("express");
const labController = require("../controllers/lab");

const router = express.Router();

// Get all labs
router.get("/", labController.getLabs);

// Create a new lab
router.post("/", labController.createLab);

// Get a single lab
router.get("/:labId", labController.getLab);

// Update a lab
router.patch("/:labId", labController.updateLab);

// Delete a lab
router.delete("/:labId", labController.deleteLab);

module.exports = router;
