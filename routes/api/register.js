const express = require("express");
const router = express.Router();

const User = require("../../models/Users");

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(409).json({ message: "User already exists" });
    } else {
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.status(201).json({ message: "Success" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;