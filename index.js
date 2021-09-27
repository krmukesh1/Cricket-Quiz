const chalk = require("chalk");
const readlineSync = require("readline-sync");

let score = 0;
let highScore = [{ name: "Mukesh", score: "4" }];
let userName;

function formQuestionAnswerPair(question, answer) {
  return {
    question,
    answer,
  };
}
let questions = [
  formQuestionAnswerPair(
    `"I would go to war with Dhoni by my side." - who said this?
  a:Virat Kohli
  b:Ravi Shastri
  c:Sourav Ganguly
  d:Gary Kirsten\n`,
    "d"
  ),
  formQuestionAnswerPair(
    `Where did MS Dhoni make his Test captaincy debut?
  a:Delhi
  b:Mohali
  c:Kanpur
  d:Nagpur\n`,
    "c"
  ),
  formQuestionAnswerPair(
    `Dhoni's maiden Test and ODI century both came against the same opponent. Name the team.
  a:Pakistan
  b:Sri Lanka
  c:West Indies
  d:Australia\n`,
    "a"
  ),
  formQuestionAnswerPair(
    `Which rank does MS Dhoni hold in the Territorial Indian army which was conferred upon him?
  a:Major General
  b:Captain
  c:Brigadier General
  d:Lieutenant Colonel\n`,
    "d"
  ),
  formQuestionAnswerPair(
    `Which of these IPL records does MS Dhoni hold?
  a:Most matches
  b:Most catches
  c:Most sixes
  d:Most runs in the 20th over\n`,
    "d"
  ),
];

function welcomeUser() {
  userName = readlineSync.question(chalk.yellow("Hi, What is your Name?\n"));
  console.log(
    chalk.yellow(
      "Welcome " + userName + ", Let's see how much you know about Dhoni!"
    )
  );
}

function askQuestion(question, answer) {
  let userAnswer = readlineSync.question(question);
  if ( userAnswer === answer) {
    score++;
    console.log(chalk.green("\nThat's correct!!"));
  } else {
    console.log(chalk.red("\nWRONG!"));
  }
}

function startGame() {
  for (let item = 0; item < questions.length; item++) {
    askQuestion(questions[item].question, questions[item].answer);
    console.log("current score : " + chalk.yellow(score));
  }
  highScore[1] = { name: userName, score: score };
}

function displayScores() {
  console.log(
    chalk.bold.yellowBright("\nTHANKS FOR PLAYING!\nFinal Score = " + score)
  );
  console.log("\nLet's see the highscores\n{");
  highScore.map((score) => console.log(" " + score.name + " : " + score.score));
  console.log("}");
}

welcomeUser();
startGame();
displayScores();