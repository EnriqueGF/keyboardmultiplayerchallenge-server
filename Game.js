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
            hasPassword:  room.hasPassword
        }
    })
}

function createRoom(data, callback) {

    let room = new Room(
        data.name, data.password
    );

    rooms.push(room);
    callback();
    return room;
}

module.exports =
    {
        getPlayerList,
        isPlayerConnected,
        getRooms,
        createRoom
    };