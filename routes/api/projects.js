const router = require("express").Router();
const projectController = require("../../controller/projectController");

//Matches with '/api/projects/'
router.route("/").get(projectController.findAll);

module.exports = router;
