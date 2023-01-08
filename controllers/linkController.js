const Link = require('../models/Link');

const redirect = async (req, res) => {

    let title = req.params.title;

    try {
        let doc = await Link.findOne({title});
        res.redirect(doc.url);
    } catch(error) {
        res.send(error);
    };
};

const addLink = async (req, res) => {

    let doc = new Link(req.body);

    try {
        await doc.save();
        res.redirect('/');
    } catch(error) {
        res.render('add', {error, body: req.body});
    };
};

const allLinks = async (req, res) => {

    try {
        // pegar todos os documentos
        // renderizar o template all, e enviar os docs
        // foi chamado de links para fazer a conexão com all.ejs
        let docs = await Link.find({});
        res.render('all', {links: docs});
    } catch(error) {
        res.send(error);
    };
};

module.exports = {redirect, addLink, allLinks};