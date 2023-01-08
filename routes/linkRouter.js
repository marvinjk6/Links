const express = require('express');
const router = express.Router();
const linkControler = require('../controllers/linkController');

router.get('/:title', linkControler.redirect);

router.post('/', express.urlencoded({extended: true}), linkControler.addLink);

module.exports = router;