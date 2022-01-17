const express = require("express");
const router = express.Router();
const EntriesController = require("../controllers/entries.controller");
const auth = require("../middleware/auth/auth");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/login/:token", createUserIfNotExist);

async function createUserIfNotExist(req, res, next) {
  let userObj = new EntriesController(req, res, next);
  userObj
    .createUserIfNotExist(req, res, next)
    .then(()=>{
      res.status(200);
    })
    .catch((err) => {
      res.status(400);
    });
}

router.get("/", auth, getRecentEntries); //last 10 - days

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

router.get("/entry", auth, ); 




module.exports = router;
