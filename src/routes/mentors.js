const express = require('express')
const koders = require('../usecases/mentors')
const router = express.Router()

router.get('/', async(request,response) =>{
    const allmentors = await koders.getAll()
    response.json({
        message: 'all koders',
        data: {
            mentors: allmentors
        }
    })
})

module.exports = router