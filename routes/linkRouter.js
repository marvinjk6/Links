const express = require('express');
const router = express.Router();
const linkControler = require('../controllers/linkController');

router.get('/:title', linkControler.redirect);

// como essa rota e addlink renderiza o template add, é preciso enviar erro e body, assim como addLink envia
router.get('/', (req, res)=> res.render('add', {error: false, body: {} }));

router.post('/', express.urlencoded({extended: true}), linkControler.addLink);

module.exports = router;