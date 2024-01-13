const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Oceanea", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];
// linking the question header, answer btns and next btn with the script
const questionElement = document.getElementById("question");
const answerbtns = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-btn");
// initializing score and the current question index
let currentQI = 0;
let score = 0;
//quiz starter
function start(){
  currentQI=0
  score =0
  nextbtn.textContent = "Next"
  displayQuestions()
}
// answer validator
function validateAnswer(e){
  const selected = e.target
  const isCorrect = selected.dataset.correct === 'true'
  if(isCorrect){
    // selected.classList.add('correct')
    // console.log('clicked');
    
    //score here
  } else {
    // selected.classList.add('incorrect')
    // console.log('sckipped');
    
  }
  Array.from(answerbtns.children).forEach(button => {
    if(button.dataset.correct === 'true'){
      button.classList.add('correct')
    }

  })
}
// substituting questions and answer btns by the json above.
function displayQuestions(){
  reseter()
  let currentQuestion = questions[currentQI];
  questionElement.textContent = questions[currentQI].question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("dybtn");
    answerbtns.appendChild(button);
    // answer conditionals
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', validateAnswer)
  });
}
//the reseter
function reseter(){
  while(answerbtns.firstChild){
    answerbtns.removeChild(answerbtns.firstChild)
  }
}

//nxt button handler
function nxthandler(){
  currentQI++
    if(currentQI<questions.length){
      displayQuestions()
    } else {
      // we show the score
    }
}
//event listener for the next button
nextbtn.addEventListener("click", () => {
  if (currentQI < questions.length) {
    nxthandler()
  } else {
    questionElement.textContent = "No questions"
  }
});
start()