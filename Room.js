module.exports = class Room {

    playerList = [];
    title = "";
    id = undefined;
    password = undefined;
    text = "";

    constructor(title, password) {
        this.title = title;
        this.password = password;
    }

    addPlayer(player) {
        this.playerList.push(player);
        console.log('El jugador ' + player.data.nickname + ' se ha unido a la sala ' + this.title);
    }

    removePlayer(player) {
        console.log('El jugador ' + player.data.nickname + ' se ha desconectado de la sala ' + this.title);
        this.playerList.splice(this.playerList.indexOf(player), 1);
    }

}