const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let setIntervalID;
let score = 0;
let touchstartX = 0, touchendX = 0, touchstartY = 0, touchendY = 0;
let sped;
const slow =document.getElementById("slowBtn");


let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerHTML = `High Score: ${highScore}`;

function checkDirection()
{
    if((touchendY+75)<touchstartY){
        velocityX = 0;
        velocityY = -1;
    }else if(touchendY>(touchstartY+75)){
        velocityX = 0;
        velocityY = 1;
    }else if((touchendX)<touchstartX){
        velocityY = 0;
        velocityX = -1;
    }else if(touchendX>(touchstartX)){
        velocityY = 0;
        velocityX = 1;
    }
}


const changeFoodPosition = () => {
  foodX = Math.floor(Math.random()*30) +1;
  foodY = Math.floor(Math.random()*30) +1;
}

const handleGameOver = () => {
    clearInterval(setIntervalID);
	alert("Game Over!\nYou're so retarded that you can't even beat a kids game!\nHahahahahahahahahahahahahahahahaha!\nNo wonder why uSandile is your rents' favourite!\nPress OK to Play Again...");
    location.reload();
}

const changeDirection = (e) => {
	if(e.key === "ArrowUp" && velocityY != 1)
  {
  	velocityX = 0;
    velocityY = -1;
  } else if(e.key === "ArrowDown" && velocityY != -1){
  	velocityX = 0;
    velocityY = 1;
  }else if(e.key === "ArrowLeft" && velocityX != 1){
  	velocityX = -1;
    velocityY = 0;
  }else if(e.key === "ArrowRight" && velocityX != -1){
  	velocityX = 1;
    velocityY = 0;
  }
}

document.addEventListener("touchstart", (e) =>{
    touchstartY = e.changedTouches[0].screenY;
    touchstartX = e.changedTouches[0].screenX;
    console.log("start");
});

document.addEventListener("touchend", (e) =>{
    touchendY = e.changedTouches[0].screenY;
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
    console.log("end");
});



    const speed = () => {
        if(document.getElementsByClassName('btn1').clicked == true)
        {
            
            alert("The monsters gone, it on the run and your daddy's here. beautiful, beautiful, beautiful, beautiful boy.");
        } else if(document.getElementById('medBtn').clicked == true)
        {
            sped =125;
        }else if(document.getElementById('fastBtn').clicked == true)
        {
            sped =50;
        }
    }




const initGame = () => {
    if(gameOver) return handleGameOver();
	let htmlMarkup = `<div class="food" style="grid-area: ${foodY}/${foodX}"></div>`;
  
  if(snakeX===foodX&&snakeY==foodY){
    changeFoodPosition();
  	snakeBody.push([foodX,foodY]);
    score++;

    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("high-score", highScore);
    scoreElement.innerHTML = `Score: ${score}`;
    highScoreElement.innerHTML = `High Score: ${highScore}`;
  }
  
  for(let i = snakeBody.length-1; i>0; i--){
    snakeBody[i] = snakeBody[i-1];
  }
  
  snakeBody[0] = [snakeX, snakeY];
  
  snakeX += velocityX;
  snakeY += velocityY;

  if(snakeX <1||snakeX>30||snakeY <1||snakeY>30){
    gameOver=true;
  }
  
  for(let i = 0; i < snakeBody.length; i++){
  	htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;
    if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
        gameOver=true;
    }
  }
	playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
setIntervalID = setInterval(initGame,localStorage.getItem("slow"));
document.addEventListener("keydown",changeDirection);