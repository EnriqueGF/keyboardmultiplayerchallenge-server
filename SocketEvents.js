const socketActions = require('./SocketActions')

module.exports = class SocketEvents {
    constructor(socket) {
        this.socket = socket;
        this.events();
    }

    events() {
        this.socket.on('disconnect', () => {
            socketActions.disconnect(this.socket);
        });

        this.socket.on('joinServer', (data) => {
            socketActions.joinServer(data, this.socket);
        });

        this.socket.on('getRoomsInfo', () => {
            socketActions.getRooms(this.socket);
        });
    }


}