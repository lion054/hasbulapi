const express = require("express");
const router = express.Router();

// Load Project model
const Application = require("../../models/Apply");

// @route GET api/Applications
// @description Get all Applications
// @access Public
router.get("/", (req, res) => {
  Application.find()
    .then((Applications) => res.json(Applications))
    .catch((err) =>
      res.status(404).json({ noApplicationsfound: "No Applications found" })
    );
});

// @route GET api/Applications
// @description add/save Application
// @access Public
router.post("/", (req, res) => {
  Application.create(req.body)
    .then((Application) => res.json({ msg: "Application added successfully" }))
    .catch((err) =>
      res
        .status(400)
        .json({ error: "Unable to add this Application", request: req.body })
    );
});

router.get("/:id", (req, res) => {
  Application.findById(req.params.id)
    .then((Application) => res.json(Application))
    .catch((err) =>
      res
        .status(404)
        .json({ noProjectfound: "No Application With that ID found" })
    );
});

router.put("/:id", (req, res) => {
  console.log("Update");
  Application.findById(req.params.id)
    .then((application) => {
      let newStatus = application.status === 0 ? 1 : 0;
      console.log(newStatus)
      Application.findByIdAndUpdate(req.params.id, { status: newStatus })
        .then(() => res.json({ msg: "Updated successfully" }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to update the Database" })
        );
    })
    .catch((err) =>
      res.status(400).json({ error: "Unable to find the Application" })
    );
});


module.exports = router;
