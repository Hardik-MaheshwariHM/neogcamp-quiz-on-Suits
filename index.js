var readlinesync = require("readline-sync");
var score = 0 ;
var username = readlinesync.question("What's your name?");
console.log("Hi! " +username + " Lets start the quiz"     );

function play(question,answer){
  var useranswer = readlinesync.question(question);
  if(useranswer===answer){
    console.log("You are right!")
    score=score + 1;
     }
  else{
    console.log("You are wrong.")
  }
  console.log("Your score is " + score )

}

// play("whats my age?","21");

var questions =[
  {
    question:"What's the name of Harveys secretary? a)Donna b)Mike c)Rachel d)Jessica " ,
    answer:"a"
  },
  {
    question:"Did harvey knew about mikes secret a)yes b)no",
      answer:"a"
  },
  {
    question:"Mike ross never went to which lawschool a)Harvard b)Boston c)Stanford",
     answer:"a"
  },
  {
    question:"Name of the firm? a)Pearson b)Pearson spector c)Pearson spector litt",
    answer:"c"
  }
]
for (var i=0;i<questions.length;i++){
  var currentquestion = questions[i];
  play(currentquestion.question,currentquestion.answer)
}
console.log("Thank you for playing , your Final score is " + score)
