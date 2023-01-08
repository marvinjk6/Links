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
        // error precisa ser enviado caso haja um erro
        // o body é enviado de volta para não apagar o que já foi preenchido pelo usuário
    };
};

module.exports = {redirect, addLink};