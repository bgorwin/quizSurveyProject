const question = document.getElementById('questionsDisplay');
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let availableQuestions = [];
let acceptingAnswers = false;

let questions = [
    {
        question: 'What does CSS stand for?',
        choice1: 'Cascade Style Sheets',
        choice2: 'Color Selects Section',
        choice3: 'Create Section Style',
        answer: 1
    },
    {
        question: 'Javascript can be used to ___',
        choice1: 'Writing in Java',
        choice2: 'Build reusable blocks of code',
        choice3: 'Style color of fonts',
        answer: 2
    }
];



startQuiz = () => {
    availableQuestions = [... questions];
    console.log(availableQuestions);
    displayNewQuestion();
};

displayNewQuestion = () => {
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
        
    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;

    choices.forEach(choice => {
        choice.addEventListener("click", e => {
            if(!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["number"];
            console.log(selectedAnswer);
            
            displayNewQuestion();
        });
    });
    
}

startQuiz();