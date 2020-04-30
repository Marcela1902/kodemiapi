
const koder = require('../models/koders')
const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

//los casos de uso son las acciones que puede ejercer un usuario en el sistema

async function getAll (){
    const allkoders= await koder.find()
    return allkoders
}

async function create(koderData){
   const koderCreated = await koder.create (koderData)
   return koderCreated
}

//en la ruta
//const koders = require ('...koders')
//koders.getAll()

function deleteById(id){
    return koder.findByIdAndDelete(id)

}

async function signup(newkoderData){
    const {email, password} = newkoderData
    const koderAlreadyExists = await koder.findOne({email })
    if(!email) throw new Error('email is requiered')
    if(!password)throw new Error('passwor is requiered')
    
    if(koderAlreadyExists) throw new Error('Email is already registered')
    if(password.length < 6) throw new Error('password must be 6 characters minimum')
        //crear hash
    const hash = await bcrypt.hash(password, 5)

    return koder.create ({ ...newkoderData, password: hash})

}

async function login (email, password){
    const koder  = await koder.findOne({email})
    if(!koder) throw new Error('invalid data')

    const isPasswordCorrect = await bcrypt.compare(password,koder.password)
    if(!isPasswordCorrect) throw new Error('invalid data')

    return token = jwt.sing({id: koder._id})
}



module.exports = {
    getAll,
    create,
    deleteById,
    signup,
    login
}

