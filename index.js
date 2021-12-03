window.addEventListener('load', function(event){
  diceNum();
});

function diceNum(){
  var player1 = Math.floor(Math.random() * 6) + 1;
  var player2 = Math.floor(Math.random() * 6) + 1;
  console.log(player1);
  console.log(player2);
  decideWinner(player1, player2);
  changeImage(player1, player2);
}

function decideWinner(p1, p2){
  var aTag = document.createElement("i");
  aTag.className="fas fa-trophy";
  console.log(aTag);
  if(p1 > p2){
    console.log("Player 1 Wins");
    document.querySelector(".displayText").innerText = "Player 1 Wins!";
    document.getElementById("asd").prepend(aTag);
  }else if(p1 < p2){
    console.log("Player 2 Wins");
    document.querySelector(".displayText").innerText = "Player 2 Wins!";
    document.getElementById("asd").append(aTag);
  }else {
    console.log("Draw");
    document.querySelector(".displayText").innerText = "Draw!";
  }
}

function changeImage(p1, p2){
  document.getElementById('img1').src = 'images/dice'+p1+'.png';
  document.getElementById('img2').src = 'images/dice'+p2+'.png';
}
