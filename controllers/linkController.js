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
        res.redirect('/all');
    } catch(error) {
        res.render('add', {error, body: req.body});
    };
};

const allLinks = async (req, res) => {

    try {
        let docs = await Link.find({});
        res.render('all', {links: docs});
    } catch(error) {
        res.send(error);
    };
};

const deleteLink = async (req, res) => {

    let id = req.params.id;

    if(!id) {
        id = req.body.id
    }

    try {
        //await Link.deleteOne({_id: id});
        await Link.findByIdAndDelete(id);
        res.redirect('/all'); // enviando o id para o fetch saber
    } catch(error) {
        //caso tenha algum erro, precisa colocar status(404) para enviar o erro
        res.status(404).send(error);
    };
};

module.exports = {redirect, addLink, allLinks, deleteLink};