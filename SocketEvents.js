const socketActions = require('./SocketActions')

module.exports = class SocketEvents {
    constructor(socket) {
        this.socket = socket;
        this.events();
    }

    events() {
        this.socket.on('disconnect', () => {
            playerList.splice(playerList.indexOf(this.socket));
            console.log('user disconnected');
            console.log(this.getPlayerList());
        });

        this.socket.on('joinServer', (data) => {
            socketActions.joinServer(data, this.socket);
        });

        this.socket.on('getRoomsInfo', () => {
            this.socket.emit('roomsInfo', {
                rooms: [1, 2, 3]
            });
        });
    }


}