const game = require('./Game')

function disconnect(socket) {
    game.playerDisconnected(socket);

    console.log('Player disconnected');
    console.log('Player list: ' + game.getPlayerList());
}

function joinServer(data, socket) {
    if (playerList.indexOf(socket) !== -1) {
        socket.emit('joinServer', {
            success: false,
            message: 'You are already in the server.'
        });
        return;
    }

    socket.data.nickname = data.nickname;
    playerList.push(socket);

    socket.emit('joinServer', {
        success: true,
        message: 'You have joined the server.'
    });

    console.log(game.getPlayerList());
}

function getRooms(socket) {

    if (!game.isPlayerConnected(socket)) {
        emitNotConnectedMessage()
        return;
    }

    socket.emit('roomsInfo', game.getRooms());
}

function createRoom(data, socket) {

    if (!game.isPlayerConnected(socket)) {
        emitNotConnectedMessage()
        return;
    }

    data.player = socket;

    game.createRoom(data, () => {
        socket.emit('roomsInfo', game.getRooms());
    });
}

function emitNotConnectedMessage() {
    socket.emit('getRooms', {
        success: false,
        message: 'You are not connected to the server.'
    });
}

module.exports = {joinServer, disconnect, getRooms, createRoom};
