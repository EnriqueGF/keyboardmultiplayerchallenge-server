const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

global.playerList = [];
global.__basedir = __dirname;

const router = (global.router = (express.Router()));
app.use('/global', require('./routes/global'))
app.use(router);

server.listen(3000, () => {
    console.log('listening on *:3000');
});

//

const SocketEvents = require('./SocketEvents');

io.on('connection', (socket) => {
    let socketEvent = new SocketEvents(socket);
});

//

