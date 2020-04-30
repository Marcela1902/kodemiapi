const server = require('./src/server')
const db = require('./src/lib/db')
const jwt = require('./src/lib/jwt')



async function main (){
    await db.connect()
    console.log('db connnected')


server.listen(8082, () =>{
    console.log('server is running')
})
}

main()
    .then (() =>{
        console.log('server ready')
    })
    .catch(error => console.error('error:',error))