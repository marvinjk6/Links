const express = require('express');
const router = express.Router();
const linkControler = require('../controllers/linkController');

router.get('/:title', linkControler.redirect);

// renderiza o template add.ejs
router.get('/', (req, res)=> res.render('add'));

router.post('/', express.urlencoded({extended: true}), linkControler.addLink);

module.exports = router;