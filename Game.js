function getPlayerList() {
    return playerList.map(socket => socket.data.nickname).join(', ')
}

// function to check if a socket is in the playerList
function isPlayerConnected(socket) {
    return playerList.includes(socket)
}

module.exports = {getPlayerList, isPlayerConnected};