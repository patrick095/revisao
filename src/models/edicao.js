const mongoose = require('../database')

const edicaoSchema = new mongoose.Schema({
    segE: {
        type: Object,
        required: false
    },
    segEO: {
        type: Object,
        required: false
    },
    terE: {
        type: Object,
        required: false
    },
    terEO: {
        type: Object,
        required: false
    },
    quaE: {
        type: Object,
        required: false
    },
    quaEO: {
        type: Object,
        required: false
    },
    quiE: {
        type: Object,
        required: false
    },
    quiEO: {
        type: Object,
        required: false
    },
    sexE: {
        type: Object,
        required: false
    },
    sexEO: {
        type: Object,
        required: false
    },
    sabE: {
        type: Object,
        required: false
    },
    sabEO: {
        type: Object,
        required: false
    },
    domE: {
        type: Object,
        required: false
    },
    domEO: {
        type: Object,
        required: false
    },
    
})

const Edicao = mongoose.model('Edicao', edicaoSchema)
module.exports = Edicao