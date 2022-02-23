var socket = io();

socket.on('test', (msg) => {
   alert('message: ' + msg);
});

$("#enterGame").click((e) => {
    let username = $("#usernameInput").val();

    let usernameRegex = /^[a-zA-ZÑñ0-9 ]{3,24}$/;

    if (usernameRegex.test(username)) {
        let msg = {'nickname': $("#usernameInput").val()};
        socket.emit('joinServer', msg);
        $("#usernameInput").val("");
    } else {
        alert("Username must be between 3 and 24 characters and not contains invalid characters.");
    }

});

