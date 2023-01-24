const quizDB = [
    {
    question: "Q1: What is the capital of India?",
     a: "New Delhi.",
     b: "Mumbai.",
     c: "Chennai.",
     d: "Pune.",
     ans: "ans1"
    
  },
  {
    question: "Q2: Where Mumbai located?",

     a: "Punjab",
     b: "Tamil Nadu",
     c: "Uttar Pradesh",
     d: "Maharashtra",
    ans: "ans4"
  },
  {
    question: "Q3: What does “HTTP” stand for??",

     a: "HyperText Transfer Protocol",
     b: "HiText Transfer Protocol",
     c: "HyperText Transfer Prototype",
     d: "HyperText Travel Protocol",
    ans: "ans1"
  },
  {

    question: "Q4: Where chatrapati shivaji maharaj born?",
     a: "Shivneri,junnar",
     b: "Raigad",
     c: "Sinhgad",
     d: "Panhala",
    ans: "ans1"
  },
  {

    question: "Q5: Which continent is india located?",
     a: "Asia",
     b: "Europe",
     c: "Africa",
     d: "America",
    ans: "ans1"
  }
];
let questionCount = 0;
let score=0;
const question = document.querySelector('.question');
const optiona = document.querySelector('#option1');
const optionb= document.querySelector('#option2');
const optionc = document.querySelector('#option3');
const optiond = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

const loadQuestion= () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }
        return answer;
    });
    return answer;

};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () =>{
     const checkedAnswer = getCheckAnswer();
     console.log(checkedAnswer);

     if(checkedAnswer== quizDB[questionCount].ans)
     {
        score++;
     };
     questionCount++;
     deselectAll();
     if(questionCount < quizDB.length)
     {
        loadQuestion();
     }
     else{
            showScore.innerHTML= `
            <h3>You scored 🎉${score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">Replay?</button>`;
            showScore.classList.remove('scoreArea');
     }

});