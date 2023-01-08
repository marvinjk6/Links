const express = require('express');
const router = express.Router();
const linkControler = require('../controllers/linkController');

router.get('/all', linkControler.allLinks);

router.get('/:title', linkControler.redirect);

router.get('/', (req, res)=> res.render('add', {error: false, body: {} }));

router.post('/', express.urlencoded({extended: true}), linkControler.addLink);

module.exports = router;