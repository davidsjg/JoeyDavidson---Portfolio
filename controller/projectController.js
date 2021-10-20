const db = require("../models");

// Defining methods for the lakeController
module.exports = {
  findAll: function (req, res) {
    db.Project.find(req.query)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
