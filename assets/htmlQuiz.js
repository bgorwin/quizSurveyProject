const problems = [
    {
        question: "What does the li tag used for?", 
        answers: [
            {text: 'Creating a line item'},
            {text: 'For a list you need to create'},
            {text: 'Use it to line index a string'}
        ], 
        correctAnswer: 'For a list you need to create'
    },
    {
        question: "Where do you put your visible parts of html code on an index.html page?",
        answers: [
            {text: 'In a script tag'},
            {text: 'Within the body tag'},
            {text: 'Anywhere in the index.html file'}
        ],
        correctAnswer: 'Within the body tag'
    },
    {
        question: "What tag do you use to create a link to another page?",
        answers: [
            {text: 'h1'},
            {text: 'img'},
            {text: 'a'}
        ],
        correctAnswer: 'a'
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
