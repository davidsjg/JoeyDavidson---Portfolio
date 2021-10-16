const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String },
  data: { type: String },
  img: { type: String },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
