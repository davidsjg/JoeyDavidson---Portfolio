const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolioDB");

const projectSeed = [
  {
    title: "About Me",
    data: "Born in Colorado, I grew up with an affinity to the outdoors.  Fishing...",
    img: "../client/public/images/",
  },
  {
    title: "Contact Me",
    data: "Click here to contact me!",
    img: "https://imgur.com/0rx1Hwy",
  },
  {
    title: "Portolio Page",
    data: "Want to see my sick projects?",
    img: "https://imgur.com/0rx1Hwy",
  },
];

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
