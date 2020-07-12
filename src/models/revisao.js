const mongoose = require('../database')

const revisaoSchema = new mongoose.Schema({
    segR: {
        type: Object,
        required: false
    },
    segO: {
        type: Object,
        required: false
    },
    terR: {
        type: Object,
        required: false
    },
    terO: {
        type: Object,
        required: false
    },
    quaR: {
        type: Object,
        required: false
    },
    quaO: {
        type: Object,
        required: false
    },
    quiR: {
        type: Object,
        required: false
    },
    quiO: {
        type: Object,
        required: false
    },
    sexR: {
        type: Object,
        required: false
    },
    sexO: {
        type: Object,
        required: false
    },
    sabR: {
        type: Object,
        required: false
    },
    sabO: {
        type: Object,
        required: false
    },
    domR: {
        type: Object,
        required: false
    },
    domO: {
        type: Object,
        required: false
    },
    
})

const Revisao = mongoose.model('Revisao', revisaoSchema)
module.exports = Revisao