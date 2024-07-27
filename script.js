let choises = document.querySelectorAll(".choise");
let userScoreId = document.querySelector("#userScoreId");
let compScoreId = document.querySelector("#compScoreId");
let msg = document.querySelector(".msg");
let newGame = document.querySelector("#newGame");

let userScore = 0;
let compScore = 0;

for (let choise of choises) {
  choise.addEventListener("click", function () {
    let userChoise = choise.getAttribute("id");
    console.log(userChoise);
    let computerChoise = getComputerChoise();
    console.log(computerChoise);
    checkwin(userChoise, computerChoise);
  });
}

let getComputerChoise = () => {
  let choices = ["rock", "paper", "scissor"];
  let computerChoise = choices[Math.floor(Math.random() * 3)];
  return computerChoise;
};

let checkwin = (userChoise, computerChoise) => {
  console.log(
    "user choise: " + userChoise + "compter choise: " + computerChoise
  );

  if (userChoise === computerChoise) {
    msg.innerText = `Both chose ${userChoise}. It's a tie!`;
    msg.classList.add("zoomed");
    setTimeout(() => {
      msg.classList.remove("zoomed");
    }, 300);

    msg.style.color = "#eef4ed";
    msg.style.display = "inline-block";
  } else {
    let userWin = true;
    if (userChoise === "rock") {
      userWin = computerChoise === "paper" ? false : true;
    }
    if (userChoise === "paper") {
      userWin = computerChoise === "scissor" ? false : true;
    }
    if (userChoise === "scissor") {
      userWin = computerChoise === "rock" ? false : true;
    }
    if (userWin) {
      msg.innerText = `Your ${userChoise} smashes Computer's ${computerChoise}. Victory is yours!`;
      msg.classList.add("zoomed");
      setTimeout(() => {
        msg.classList.remove("zoomed");
      }, 300);
      msg.style.color = "#70e000";
      msg.style.display = "inline-block";
      userScore++;
      userScoreId.innerText = userScore;
    } else {
      msg.innerText = `Computer's ${computerChoise} cut your ${userChoise}. You lost this round.`;
      msg.classList.add("zoomed");
      setTimeout(() => {
        msg.classList.remove("zoomed");
      }, 300);
      msg.style.color = "#ff0a54";
      msg.style.display = "inline-block";
      compScore++;
      compScoreId.innerText = compScore;
    }
  }
};

newGame.addEventListener("click", () => {
  console.log("clicked");
  userScore = 0;
  compScore = 0;
  userScoreId.innerText = userScore;
  compScoreId.innerText = compScore;
  msg.style.display = "none";
});

// choises.forEach(choise => {
//     console.log("choise");
//     choise.addEventListener("click", () => {
//         console.log("choosed");
//     });
// });
