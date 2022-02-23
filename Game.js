function getPlayerList() {
    return playerList.map(socket => socket.data.nickname).join(', ')
}

module.exports = {getPlayerList};