const game = require('./Game')

function disconnect(socket) {
    playerList.splice(playerList.indexOf(this.socket));
    console.log('user disconnected');
    console.log(game.getPlayerList());
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
        socket.emit('getRooms', {
            success: false,
            message: 'You are not connected to the server.'
        });
        return;
    }

    socket.emit('roomsInfo', game.getRooms());
}

module.exports = {joinServer, disconnect, getRooms};
