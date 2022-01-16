const express = require("express");
const router = express.Router();
const EntriesController = require("../controllers/entries.controller");
const passport = require("passport");
const auth = require("../middleware/auth/auth");

router.get("/", auth, getRecentEntries);

async function getRecentEntries(req, res, next) {
  let recentEntriesObj = new EntriesController(req, res, next);
  await recentEntriesObj
    .getRecentEntries()
    .then((entries) => {
      res.send(entries);
    })
    .catch((error) => {
      res.status(400).send("Error Occured");
    });
}

module.exports = router;
