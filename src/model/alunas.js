const mongoose = require('mongoose');

const AlunasSchema = new mongoose.Schema({
    nome: { type: String },
    dateOfBirth: { type: Date },
    nasceuEmSp: { type: Boolean },
    livros: [{
        titulo: String,
        leu: Boolean
    }]
});