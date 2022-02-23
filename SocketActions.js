const game = require('./Game')

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

module.exports = {joinServer};
