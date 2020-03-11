const problems = [
    {
        question: "What does CSS stand for?", 
        answers: [
            {text: 'Cascade Style Sheet'},
            {text: 'Color Selects Section'},
            {text: 'Create Section Style'}
        ], 
        correctAnswer: 'Cascade Style Sheet'
    },
    {
        question: "Javascript can be used to ___",
        answers: [
            {text: 'Writing in Java'},
            {text: 'Build reusable blocks of code'},
            {text: 'Style color of fonts'}
        ],
        correctAnswer: 'Build reusable blocks of code'
    }
]

 


const renderQuestions = () => {
    const text = problems.map(function(item, index) {
        return `<fieldset><legend>${item.question}</legend>
        ${item.answers.map(a => 
            `<label><input id='selectedAnswer' type='radio' name='answer${index}' required=[0]> ${a.text}</label>`).join("<br>")}</fieldset>`;
        }).join("<br>");

    
        document.getElementById('questionsDisplay').innerHTML = text;
}

const questionResults = () => {
    document.getElementById('questionsForm').addEventListener('submit', handleSubmitClick);
}

const handleSubmitClick = (e) => {
    let score = 0;

    for(let problemIndex in problems) {
        const selectedAnswer = getSelectedAnswer(problemIndex);
        if (selectedAnswer.text == problems[problemIndex].correctAnswer) {
            
            score++;
        }
    }

    alert(score);

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
   





// codingQuestions.map(function(item, index){
    //     if(item.answers === item.correctAnswer){
    //         document.getElementById('selectedAnswer').addEventListener('click', function(){
    //             document.getElementById('userSelected').innerText = 'This is correct!'
    //         });
    //     }
    // });
    





renderQuestions();
questionResults();









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
