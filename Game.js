const Room = require("./Room");

function getPlayerList() {
    return playerList.map(socket => socket.data.nickname).join(', ')
}

function isPlayerConnected(socket) {
    return playerList.includes(socket)
}

function getRooms() {

    return rooms.map(room => {
        return {
            name: room.title,
            hasPassword: room.hasPassword
        }
    })
}

function createRoom(data, callback) {

    let room = new Room(
        data.name, data.password
    );

    room.addPlayer(data.player);
    rooms.push(room);

    callback();
    return room;
}

function playerDisconnected(socket) {

    rooms.forEach(room => {
        if (room.playerList.includes(socket)) {
            room.removePlayer(socket);
        }
    });

    rooms = rooms.filter(room => room.playerList.length > 0);

    playerList.splice(playerList.indexOf(socket));
}


module.exports =
    {
        getPlayerList,
        isPlayerConnected,
        getRooms,
        createRoom,
        playerDisconnected
    };