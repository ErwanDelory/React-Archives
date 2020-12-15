const express = require('express');
const enregistrement = require('../controllers/enregistrement');

const router = express.Router();

//Test
router.post('/test', enregistrement.recherches);

module.exports = router;
