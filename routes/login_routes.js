const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login_controller");
router.get('/userlogin', loginController.userlogin);

module.exports = router;