const problems = [
    {
        question: "Is JavaScript the same as Java?", 
        answers: [
            {text: 'Yes'},
            {text: 'No'},
            {text: 'Maybe'}
        ], 
        correctAnswer: 'No'
    },
    {
        question: "Javascript can be used to ___",
        answers: [
            {text: 'Writing in Java'},
            {text: 'Build reusable blocks of code'},
            {text: 'Style color of fonts'}
        ],
        correctAnswer: 'Build reusable blocks of code'
    },
    {
        question: "What does 'Nan' stand for?",
        answers: [
            {text: 'Not a number'},
            {text: 'Name another number'},
            {text: 'No answer name'}
        ],
        correctAnswer: 'Not a number'
    }
]

 
const renderQuestions = () => {
    const text = problems.map(function(item, index) {
        return `<fieldset><legend>${item.question}</legend>
        ${item.answers.map(a => 
            `<label><input id='selectedAnswer' type='radio' name='answer${index}' required> ${a.text}</label>`).join("<br>")}</fieldset>`;
        }).join("<br>");

    
        document.getElementById('questionsDisplay').innerHTML = text;
}

// Below I used preventDefault from keeping the page from reloading when clicking the submit button and it keeps the current values
// that the user selected to see if they got it wrong or not.
const questionResults = () => {
    document.getElementById('questionsForm').addEventListener('submit', (e) => {
        e.preventDefault(handleSubmitClick());
    });
}

// Instead of doing addEventListeners to the page, I added this refresh reload function to just refresh the whole page.
function refreshPage(){
    window.location.reload();
} 


const handleSubmitClick = (e) => {
    let score = 0;

    for(let problemIndex in problems) {
        const selectedAnswer = getSelectedAnswer(problemIndex);

        if (selectedAnswer.text == problems[problemIndex].correctAnswer) {
            score++;
            document.getElementById('displayScore').innerHTML = `<h3>Score: ${score}</h3>`;
            document.getElementById('restartQuiz').innerHTML = `<button id="resetButton" type="reset" onclick="refreshPage()">Reset Quiz</button>`;           
        } else {
            document.getElementById('displayScore').innerHTML = `<h3>Score: 0</h3>`;
            document.getElementById('restartQuiz').innerHTML = `<button id="resetButton" type="reset" onclick="refreshPage()">Reset Quiz</button>`;
        }
    }
}

function getSelectedAnswer(problemIndex) {

    const name = `answer${problemIndex}`;
    const radios = document.getElementsByName(name);
    let answerIndex;
    for(let r = 0; r < radios.length; r++){
        const radio = radios[r];
        if(radio.checked){
            answerIndex = r;
        }
    }
    return problems[problemIndex].answers[answerIndex];
}



questionResults();
renderQuestions();











// const codingQuestions = [
//     {
//         question: "What does CSS stand for?", 
//         answers: [
//             {text: 'Cascade Style Sheet', correctAnswer: true },
//             {text: 'Color Selects Section', correctAnswer: false },
//             {text: 'Create Section Style', correctAnswer: false }
//         ]
//     },
//     {
//         question: "Javascript can be used to ___",
//         answers: [
//             {text: 'Writing in Java', correctAnswer: false },
//             {text: 'Build reusable blocks of code', correctAnswer: true },
//             {text: 'Style color of fonts', correctAnswer: false }
//         ]
//     }
// ]
