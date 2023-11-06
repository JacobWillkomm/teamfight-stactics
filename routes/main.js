const express = require("express");
const router = express.Router();

/*
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const summonerController = require("../controllers/summoners");
const matchController = require("../controllers/matchs");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
*/

//Main Routes - simplified for now
router.get("/", (req, res) => {
    res.send('Hello, World!');
});

/*
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/search", summonerController.getSearch);
*/


module.exports = router;
