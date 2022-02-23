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

app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/scripts', express.static(__dirname + '/node_modules/socket.io/client-dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/images', express.static(__dirname + '/resources/images'));
app.use('/scripts', express.static(__dirname + '/resources/scripts'));

server.listen(3000, () => {
    console.log('listening on *:3000');
});

//

const SocketEvents = require('./SocketEvents');

io.on('connection', (socket) => {
    let socketEvent = new SocketEvents(socket);
});

//

