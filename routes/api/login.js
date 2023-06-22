const express = require("express");
const router = express.Router();

const User = require("../../models/Users");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        res.status(200).json({ message: "Login success", user });
      } else {
        res.status(401).json({ message: "Wrong credentials" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;