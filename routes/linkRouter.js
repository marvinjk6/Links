const express = require('express');
const router = express.Router();
const linkControler = require('../controllers/linkController');
const methodOverride = require('method-override');

// agora todas as rotas tem acesso ao method-override
router.use(methodOverride('_method'));

router.get('/all', linkControler.allLinks);

router.get('/:title', linkControler.redirect);

router.get('/', (req, res)=> res.render('add', {error: false, body: {} }));

router.post('/', express.urlencoded({extended: true}), linkControler.addLink);

router.delete('/:id', linkControler.deleteLink);

// rota para deletar com o fetch
router.delete('/', express.json(), linkControler.deleteLink);

module.exports = router;