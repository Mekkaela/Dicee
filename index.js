document.addEventListener('load', function(event){
  var player1 = Math.floor(Math.random() * 6) + 1;
  var player2 = Math.floor(Math.random() * 6) + 1;
  diceReload(player1, player2);
  Winner(player1, player2);
});

function diceReload(player1, player2){
  document.getElementById('img1').src = 'images/dice'+player1+'.png';
  document.getElementById('img2').src = 'images/dice'+player2+'.png';
}

function Winner(player1, player2){
  if(player1 > player2){
    document.querySelector(".displayText").innerText = "🚩 Player 1 Wins!";
  }else if(player1 < player2){
    document.querySelector(".displayText").innerText = "Player 2 Wins! 🚩";
  }else {
    document.querySelector(".displayText").innerText = "Draw!";
  }
}

