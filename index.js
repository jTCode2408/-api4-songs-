const express = require ('express');
const server = express();
server.use(express.json());

server.get('/', (req,res)=>{
    const songs = [{id:1, name:"Im Your Baby Tonight"}]
    res.status(200).json(songs)
})


const port =5000
server.listen(port, ()=>{
    console.log(`\n** server listening on port ${port}**\n`)
})
