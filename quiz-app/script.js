const quizData = [
    {
        question:'Who is the prime minister of sri Lanka?',
        a:'Gotabaya Rajapaksha',
        b:'Nimal Siripala',
        c:'Mahinda Rajapaksha',
        d:'Mahinda Amaraweera',
        correct:'c'
    },
    
    {
        question:'What is the best programming language?',
        a:'c#',
        b:'Java',
        c:'Javascript',
        d:'Python',
        correct:'c'
    },

    {
        question:'Who is the president of us?',
        a:'Mahinda Rajapaksha',
        b:'MithreePala Sirisena',
        c:'Jonston Pranandu',
        d:'Gotabaya Rajapaksha',
        correct:'d'
    },

    {
        question:'What does HTML stands for?',
        a:'Hypertext Markup Language',
        b:'Cascading Style Sheet',
        c:'Json Object Notation',
        d:'Javascript Object Notation',
        correct:'a'
    },

    {
        question:'What year was Javascript launched?',
        a:'2020',
        b:'2014',
        c:'2001',
        d:'1995',
        correct:'d'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deSelectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer =   answerEl.id;
        }       
    });
    return answer;
}

function deSelectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click',()=>{
 
    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }

        else{
            quiz.innerHTML = `<h2>You answered correctly at ${score} / ${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }

});