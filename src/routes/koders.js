const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()

router.get('/', async(request,response) =>{
    const allkoders = await koders.getAll()
    response.json({
        message: 'all koders',
        data: {
            koders: allkoders
        }
    })
})

module.exports = router