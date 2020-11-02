const express = require('express');

const router = express.Router();

const controller = require('../controllers/verify.controller');

router.get('/', controller.startVerifying);
router.post('/', controller.verify);

module.exports = router;