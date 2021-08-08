let readlineSync=require('readline-sync');
const chalk = require('chalk');
// =================global=========================
let score=0;
let wrong=0;

let high=[
  {user:'Google',score:10},
  {user:'Me',score:9}
]
// -------------intro part-------------------
console.log(chalk.magentaBright.bold("Hey there, This is Nikhil.\nHope you are doing safe during this pandemic.\n"))

let user_name=readlineSync.question(chalk.blueBright.bold.underline("What should I call you?-"))
if(user_name.length<1){
  user_name='Un-Named Human'
}
console.log(chalk.yellowBright.bold("\n Hey " +user_name.toUpperCase()+",\n\n This is a quiz based on STARWARS franchise\n"))

console.log(chalk.greenBright("Here are the rules:\n1. Every correct answer adds one point to the score \n2. There is no penalty for wrong answers.\n3. There are 2 levels, answer all the questions on levelZero to reach Level1\n\nNOTE--This quiz is a two level play where if the user clears L1 then his name is replaced with current winner"))
// ===========levels using arrays and objects================
let levelZero=[
  {q:"\nStawars franchise was created by?--",a:"george lucas"},
  {q:"In which year did the first Starwars film release?--",a:"1977"},
  {q:"In which Starwars flim did Emilia Clarke star--",a:"Solo"},
  {q:"Who was the first Skywalker?--",a:"Shmi skywalker"},
  {q:"What was the last Starwars flim in theatres?--",a:"Rise of skywalker"}]

let levelOne=[
  {q:"\nName of the latest starwars series?--",a:"Mandalorian"},
  {q:"How many triologies does Starwars have?--",a:"Three"},
  {q:"What's the best Starwars vehicle?--",a:"Millennium Falcon"},
  {q:"Next Starwars film?--",a:"Rogue Squadron"},
  {q:"upcoming starwars series?--",a:"Andor"}]
// ============output==================
var user_answer;
function game(question,answer){
  user_answer=readlineSync.question(question)
  while(user_answer.length<1){
    user_answer=readlineSync.question(question)
  }
  
  if(user_answer.toUpperCase()===answer.toUpperCase()){
  console.log(chalk.bgGreen.black.bold(" Correct \n"))
  score++;
  }
  else{
    console.log(chalk.bgRed.white.bold("\n Wrong "))
    console.log(chalk.grey("Correct answer is--" +answer.toUpperCase() +"\n"))
    wrong++
  }
  
  console.log(chalk.yellowBright("current score--" +score+"\n"))
}
// ===================input=================
function on_level(level){
  for(var i=0;i<level.length;i++){
    let enter=readlineSync.question(chalk.blue.bold("Press Y to continue,any other key to quit the Quiz anytime--"))
    if(enter.toUpperCase()!='Y'){
      console.log("Thanks for checking out the game!!")
      break
    }
    else{
      let holder=level[i];
      game(holder.q,holder.a)
    }
  }
}
// =============for final results===============
function result(level){
  console.log(chalk.blue("========\nTotal questions-"+(score +wrong)))
  console.log(chalk.blue("Ansered correct-"+score))
  console.log(chalk.blue('Ansered Wrong-'+ wrong+"\n======="))
  console.log("Highest score user--"+ high[0].user+"\nscore--"+high[0].score)
  console.log(chalk.yellowBright.bold("\nCONGRATULATIONS"))
  console.log("\nTo know more about STARWARS, visit")
  console.log(chalk.bgYellow.bold(" https://www.starwars.com/ "))
}
// ================function calls====================
on_level(levelZero)
// =========
if(score===levelZero.length-1){
  console.log(chalk.magentaBright.underline.bold("**You have been qualified to Level One**"))
  on_level(levelOne)
}
// ----==============================-------
for(let x=0;x<high.length;x++){
  if(score===(high[x].score)){
    console.log("\nWoah!!! you are really clever...you have been awarded the 1st position and will receive GC very soon")
    // =====this will replace the highest scorer
    high.splice(0, 0,{user:user_name,score:10})
    console.log(chalk.bgYellow.bold("\n\n NEW WINNER-- "+ high[0].user.toUpperCase() +" "))
    result(levelOne)
  }
  else if(score>=5 && score<high[x].score){
    console.log("\nOuhhhh!!! You were close, Practice more to qualify")
    result(levelOne)
  }
  else{
    console.log("You are now a part of the Backbenchers Club!")
    result(levelZero)
  }
  break
}
// -----------------HAPPY--ENDING-------------------------
