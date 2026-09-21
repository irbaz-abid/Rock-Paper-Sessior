let user = 0;
let computer = 0;

//accessing scores

let userscore = document.querySelector("#user-score");

let cmpscore = document.querySelector("#comp-score");

let choices = document.querySelectorAll(".choice");

//showing of the winner also
let msg = document.querySelector("#msg");

const compChoice = ()=>{
     const options=["rock","paper","sessor"] ;
     const random = Math.floor(Math.random() * 3);
     return options[random];
}
//if both are equal so draw

const drawGame = ()=>{
     console.log("Game is draw..");
     msg.innerText="Game is Draw Play Again!";
     msg.style.backgroundColor="brown";
}
//show winner

const showWinner =(userWin ,userChoice ,cmp)=>{
    if(userWin){
     console.log("You Win !");
     msg.innerText=`You Win! your ${userChoice} beats ${cmp}.`;
     msg.style.backgroundColor="green";
     user++;
     userscore.innerText=user;
    }
    else{
     console.log("Comp wins!");
     msg.innerText=`You Lose! ${cmp} beats your ${userChoice}`;
     msg.style.backgroundColor='red';
     computer++;
     cmpscore.innerText=computer;
}
}

const playGame = (userChoice) =>{
       console.log("User Choice is : ",userChoice);
       //Computer
       const cmp = compChoice();
      console.log("Computer Choice is : ",cmp);
      //comparing the choices
      let userWin = false;
      if(userChoice === cmp){
          drawGame();
      }
      else{
          if(userChoice === 'rock'){
              userWin= cmp === 'sessor' ? true : false;
          }
          else if(userChoice === 'paper'){
              userWin = cmp=== 'rock' ? true : false;
          }
          else{
               userWin = cmp ==='paper' ?true : false;
          }
          showWinner(userWin , userChoice , cmp);
      }
} 



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
         const userChoice = choice.getAttribute("id");
         playGame(userChoice);
    })
})