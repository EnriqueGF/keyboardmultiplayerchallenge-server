var socket = io();

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

function displayRoomList() {
    $.get('/roomsTemplate', (data) => {
        $(".div-center.main-div").hide();

        if ($(".div-center.rooms-div").length == 0) {
            $(".back").append(data);
        }

        $(".div-center.rooms-div").show();
        loadRoomsInfo();
    });
}

function displayMain() {
    $(".div-center.rooms-div").hide();
    $(".div-center.main-div").show();
}


function loadRoomsInfo() {
    getRoomsInfo();
}

// SOCKETS EVENTS & STUFF //

socket.on('joinServer', (data) => {
    if (data.success) {
        // alert("You have joined the server!");
        displayRoomList();
    } else {
        alert("You could not join the server!\nReason: " + data.message);
    }
});

socket.on('disconnect', () => {
    alert("You have been disconnected from the server!");
    displayMain();
    location.reload();
});

socket.on('roomsInfo', (data) => {
    console.log("Rooms info:");
    $("#roomListUl").html("");

    for (let i = 0; i < data.length; i++) {
        let name = data[i].name;
        let hasPassword = data[i].hasPassword;

        console.log("Room: " + name + " hasPassword: " + hasPassword);
        $("#roomListUl").append("<li class=\"list-group-item\">" + name + "</li>");
    }
})

function getRoomsInfo() {
    socket.emit('getRoomsInfo', "");
}