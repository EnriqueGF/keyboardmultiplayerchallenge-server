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

}