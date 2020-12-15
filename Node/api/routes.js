const express = require('express');
const enregistrement = require('../controllers/enregistrement');
const router = express.Router();

router.post('/enregistrement', enregistrement.recherches);

module.exports = router;
