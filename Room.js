module.exports = class Room {

    playerList = [];
    title = "";
    id = undefined;
    hasPassword = false;
    password = undefined;
    text = "";

    constructor(title, hasPassword) {
        this.title = title;
        this.hasPassword = hasPassword;
    }

}