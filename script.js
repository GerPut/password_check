const button = document.querySelector(".button")

button.addEventListener('click', checkPassword)

function checkPassword() {
    var correctPassword = [1234]
    var password = document.getElementById("box").value


    if (password == correctPassword) {
        window.location = "index.html"
    } else {
        alert("Access Denied!")
        return false
    }
}

