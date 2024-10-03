const contactServer=require('json-server')
const mpServer=contactServer.create()

const middleWare=contactServer.defaults()

const routes=contactServer.router('db.json')

mpServer.use(middleWare)
mpServer.use(routes)

const PORT=3000 || process.env.PORT
mpServer.listen(PORT,()=>{
    console.log("server running at :"+PORT)
    })