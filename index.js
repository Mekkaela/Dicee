window.addEventListener('load', function(event){
  diceReload();
});

function diceReload(){
  var player1 = Math.floor(Math.random() * 6) + 1;
  var player2 = Math.floor(Math.random() * 6) + 1;
  console.log(player1);
  console.log(player2);
  Winner(player1, player2);
  ReloadDice(player1, player2);
}

function Winner(player1, player2){
  if(player1 > player2){
    console.log("Player 1 Wins");
    document.querySelector(".displayText").innerText = "🚩 Player 1 Wins!";
  }else if(player1 < player2){
    console.log("Player 2 Wins");
    document.querySelector(".displayText").innerText = "Player 2 Wins! 🚩";
  }else {
    console.log("Draw");
    document.querySelector(".displayText").innerText = "Draw!";
  }
}

function ReloadDice(player1, player2){
  document.getElementById('img1').src = 'images/dice'+p1+'.png';
  document.getElementById('img2').src = 'images/dice'+p2+'.png';
}

