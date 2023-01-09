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

const loadLink = async (req, res) => {

    // pegar o id pelo action do formulário
    let id = req.params.id;

    try {
        
        let doc = await Link.findById(id)
        // renderizar o template edit e mandar o doc pelo body, para poder fazer a edição
        // precisa passar error false, pois todos os campos devem ser preenchidos, se não preencher dispara o erro
        res.render('/edit', {error: false, body: doc});
    } catch(error) {
        res.status(404).send(error);
    };
};

const editLink = async (req, res) => {

    // depois que o documento foi encontrado pelo load, vamos atualizar ele
    let link = {};
    link.title = req.body.title;
    link.description = req.body.description;
    link.url = req.body.url;

    let id = req.params.id;

    if(!id) {
        id = req.body.id
    }

    try {
        //let doc = await Link.findByIdAndUpdate(id, link);
        let doc = await Link.updateOne({_id: id}, link);
        res.redirect('/all')
    } catch(error) {
        res.render('edit', {error, body: req.body});
    };
};


module.exports = {redirect, addLink, allLinks, deleteLink, loadLink, editLink};