const Contato = require('../models/contatoModel')

exports.index = async (req, res) => {
    const contatos = await Contato.searchContacts()
    res.render('index', { contatos })
};

