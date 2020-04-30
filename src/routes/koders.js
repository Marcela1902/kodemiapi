const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()


router.get('/', async(request,response) =>{
    const allkoders = await koders.getAll()
    response.json({
        message: 'all koders',
        data: {
            koder: allkoders
        }
    })
})


router.post('/', async (request,response)=>{
try{
    const newkoder = await koders.create(request.body)
    response.json({
        message: 'koder create',
        data: {
            koders: newkoder
        }
    })
}catch(error){
    const errorArray = Object.entries(error.errors)
      .map((entry)=>{
          const [key, value] = entry
          return {[key]: value.message}
      })
    response.json({
        success: false,
        error: error.message,
        errors: error.errors
    })
}

})

// delte
router.delete ('/:id',async(request,response)=>{
    try{
        const {id} = request.params
        const koderDelete = await koders.deleteById(id)
        response.json({
            success: true,
            message: `koder with id ${id}  deleted`,
                koder: koderDelete
            
        })
    }catch(error){
        const errorArray = Object.entries(error.errors)
      .map((entry)=>{
          const [key, value] = entry
          return {[key]: value.message}
      })
    response.json({
        success: false,
        error: error.message,
        errors: error.errors
    })
}
       
})


router.post ('/signup', async(request, response) =>{
    try{
        const newkoder = await koder.signup(request.body)
        response.json({
            success: true,
            message: 'koder registred',
            data:{
                koder: newkoder
            }
        })
     }catch (error){
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router

//try-catch
