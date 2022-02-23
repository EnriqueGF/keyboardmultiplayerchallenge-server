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
            if (playerList.indexOf(this.socket) !== -1) {
                this.socket.emit('joinServer', {
                    success: false,
                    message: 'You are already in the server.'
                });
                return;
            }

            this.socket.data.nickname = data.nickname;
            playerList.push(this.socket);

            this.socket.emit('joinServer', {
                success: true,
                message: 'You have joined the server.'
            });

            console.log(this.getPlayerList());
        });
    }

    getPlayerList() {
        return playerList.map(socket => socket.data.nickname).join(', ')
    }

}