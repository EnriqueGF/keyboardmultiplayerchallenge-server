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

module.exports =
    {
        getPlayerList,
        isPlayerConnected,
        getRooms
    };