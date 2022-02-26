const socketActions = require('./SocketActions')

module.exports = class SocketEvents {
    constructor(socket) {
        this.socket = socket;
        this.events();
    }

    events() {

        // General

        this.socket.on('disconnect', () => {
            socketActions.disconnect(this.socket);
        });

        // Auth

        this.socket.on('joinServer', (data) => {
            socketActions.joinServer(data, this.socket);
        });

        // Rooms

        this.socket.on('getRoomsInfo', () => {
            socketActions.getRooms(this.socket);
        });

        this.socket.on('createRoom', (data) => {
            socketActions.createRoom(data, this.socket);
        });
    }


}