const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:VSK33cm@2hkgAZL@cluster0.jiyct.mongodb.net/revisao?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false);
console.log("conectado a db com sucesso!")
module.exports = mongoose





//mongodb+srv://admin:VSK33cm@2hkgAZL@cluster0.jiyct.mongodb.net/revisao?retryWrites=true&w=majority