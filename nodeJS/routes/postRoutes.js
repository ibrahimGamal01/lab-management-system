const express = require("express");
const postcontrollers = require("../controllers/postControllers");

const router = express.Router();

//@route GET && POST - /posts/

router
  .route("/")
  .get(postcontrollers.getllDepartments)
  .post(postcontrollers.createNewDepartment);

router.route("/:id").get(postcontrollers.getDepartmentByID);

module.exports = router;
