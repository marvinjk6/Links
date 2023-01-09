const express = require('express');
const router = express.Router();
const linkControler = require('../controllers/linkController');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));
router.get('/:title', linkControler.redirect);
router.get('/', linkControler.allLinks);
router.get('/add', (req, res)=> res.render('add', {error: false, body: {} }));
router.get('/edit/:id', linkControler.loadLink);

router.post('/', express.urlencoded({extended: true}), linkControler.addLink);
router.post('/edit/:id', express.urlencoded({extended: true}), linkControler.editLink);

router.delete('/:id', linkControler.deleteLink);
router.delete('/', express.urlencoded({extended: true}), linkControler.deleteLink);

module.exports = router;