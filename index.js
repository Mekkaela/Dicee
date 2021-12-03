
var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[0].src = "images/dice" + num1 + ".png";
document.querySelectorAll("img")[1].src = "images/dice" + num2 + ".png";

var header = "Refresh Me";
if (num1 > num2) {
    header = "🚩 Player 1 Wins!";
} else if (num2 > num1) {
    header = "Player 2 Wins! 🚩";
} else {
    header = "Draw!";
}

document.querySelectorAll("h1")[0].innerHTML = header;
