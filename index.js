document.addEventListener('load', function(event){
  diceReload();
});

function diceReload(){
  var player1 = Math.floor(Math.random() * 6) + 1;
  var player2 = Math.floor(Math.random() * 6) + 1;
  document.getElementById('img1').src = 'images/dice'+player1+'.png';
  document.getElementById('img2').src = 'images/dice'+player2+'.png';
  Winner(player1, player2);
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

