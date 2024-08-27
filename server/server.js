const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
require('dotenv').config()
const app = express()

const port = process.env.PORT_NODE_SERVER

const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    console.log("a user connected");
    
    socket.on("chat message", (msg) => {
        io.emit('chat message', msg)
    })

    socket.on('disconnection', () => {
        console.log("a user disconnected");
    })
})

server.listen(port ,() => {
    console.log(`Node server listening on [http://localhost:${port}]`);
}) 