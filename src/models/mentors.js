const mongoose = require ('mongoose')


const mentorSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength:2,
        maxlength: 100,
        required:true
    },
    especialidad:{
        type: String,
        required: true

    }

})

module.exports = mongoose.model('mentors',mentorSchema)