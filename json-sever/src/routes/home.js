const express = require('express');
const router = express.Router();

const homeController = require("../app/controllers/HomeController");


router.use('/', homeController.home);
                                     
module.exports = router;
