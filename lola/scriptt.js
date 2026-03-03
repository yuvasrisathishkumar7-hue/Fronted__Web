function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        window.location = "lan.html";
    } else {
        alert("Invalid Login Details");
    }
}

function logout() {
    window.location = "log.html";
}