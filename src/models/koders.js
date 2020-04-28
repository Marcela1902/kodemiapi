const mongoose = require ('mongoose')

const koderSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength:2,
        maxlength: 100,
        required:true
    },
    generetion: {
        type: Number,
        required: true,
        min: 1

    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    }

})


//module.export = para decir lo que queremos que el scrip export
//solo se puede exportar una sola cosas

module.exports = mongoose.model('koders', koderSchema) 