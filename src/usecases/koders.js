
const koder = require('../models/koders')

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

module.exports = {
    getAll,
    create
}

