const Department = require("../models/department");

// Get all departments
exports.getDepartments = (req, res) => {
  Department.find({}, (error, departments) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(200).send(departments);
  });
};

// Create a new department
exports.createDepartment = (req, res) => {
  const newDepartment = new Department(req.body);
  newDepartment.save((error, department) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(201).send(department);
  });
};

// Get a single department
exports.getDepartment = (req, res) => {
  Department.findById(req.params.departmentId, (error, department) => {
    if (error) {
      return res.status(500).send(error);
    }
    if (!department) {
      return res.status(404).send({ message: "Department not found" });
    }
    return res.status(200).send(department);
  });
};

// Update a department
exports.updateDepartment = (req, res) => {
  Department.findByIdAndUpdate(
    req.params.departmentId,
    req.body,
    { new: true },
    (error, department) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (!department) {
        return res.status(404).send({ message: "Department not found" });
      }
      return res.status(200).send(department);
    }
  );
};

// Delete a department
exports.deleteDepartment = (req, res) => {
  Department.findByIdAndDelete(req.params.departmentId, (error, department) => {
    if (error) {
      return res.status(500).send(error);
    }
    if (!department) {
      return res.status(404).send({ message: "Department not found" });
    }
    return res.status(200).send({ message: "Department deleted successfully" });
  });
};

exports.searchDepartments = (req, res) => {
  Department.find(
    { DepartmentName: { $regex: req.query.name, $options: "i" } },
    (error, departments) => {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(200).send(departments);
    }
  );
};
