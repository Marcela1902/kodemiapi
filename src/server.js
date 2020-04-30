const express = require('express')
const kodersRouter = require('./routes/koders')

const authRouter = require('./routes/auth')
const mentorRouter = require('.routes/mentors')

const app = express()

app.use(express.json())
//montamos el router
app.use('/koders',kodersRouter)
app.use('/mentors',mentorRouter)
app.use('/auth',authRouter)

//todos los recursos en las rutas se escriben en plural


//mismo recurso
//router '/koders'
// get /koders
//post /'koders'
//patch /'koders/id
//delete /koders/:id

//el roter lo puedo montar en la ruta que quiera
//el ruter se montara en la ruta /koders
// Get / = get /koders
//post / = post /koders



module.exports = app