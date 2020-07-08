const pressed = [];
const password = "devall";

window.addEventListener("keyup", (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-password.length - 1, pressed.length - password.length);
    if (pressed.join("").includes(password)) {
        alert("Congrats!! You Cracked the Password - Click OK to go to the Website");
        location = "password.html";
    }
    console.log(pressed)
})