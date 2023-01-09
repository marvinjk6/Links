const express = require('express');
const router = express.Router();
const linkControler = require('../controllers/linkController');
const methodOverride = require('method-override');

// agora todas as rotas tem acesso ao method-override
router.use(methodOverride('_method'));
router.get('/all', linkControler.allLinks);
router.get('/:title', linkControler.redirect);
router.get('/', (req, res)=> res.render('add', {error: false, body: {} }));
// rota para renderizar o template de edição e encontra o documento pelo id passado na url
router.get('/edit/:id', linkControler.loadLink);


router.post('/', express.urlencoded({extended: true}), linkControler.addLink);
// rota para editar os docs através do formulário
router.post('/edit/:id', express.urlencoded({extended: true}), linkControler.editLink);

router.delete('/:id', linkControler.deleteLink);
// rota para deletar com o formulário 
router.delete('/', express.urlencoded({extended: true}), linkControler.deleteLink);

module.exports = router;