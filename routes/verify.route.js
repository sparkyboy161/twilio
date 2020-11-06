const express = require('express');

const router = express.Router();

const controller = require('../controllers/verify.controller');

router.post('/start', controller.startVerifying);
router.post('/', controller.verify);

module.exports = router;