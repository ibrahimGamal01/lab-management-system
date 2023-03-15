const express = require("express");
const departmentController = require("../controllers/department");

const router = express.Router();

// Get all departments
router.get("/", departmentController.getDepartments);

// Create a new department
router.post("/", departmentController.createDepartment);

// Get a single department
router.get("/:departmentId", departmentController.getDepartment);

// Update a department
router.patch("/:departmentId", departmentController.updateDepartment);

// Delete a department
router.delete("/:departmentId", departmentController.deleteDepartment);

module.exports = router;
