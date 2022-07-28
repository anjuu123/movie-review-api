const express = require('express');
const { check } = require('express-validator');
const { create } = require("../controllers/user");
const { userValidtor, validate } = require('../middlewares/validator');

const router = express.Router();

router.post("/create", userValidtor , validate,create);


module.exports = router;