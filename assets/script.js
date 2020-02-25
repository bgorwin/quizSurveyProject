const questions = [
    {
        question: 'What does CSS stand for?',
        answers: [
            'Cascade Style Sheets',
            'Cool Style Syntax',
            'Case Sensitive Subjects'
        ],
        correctAnswer: 0
    },
    {
        question: 'One use of Javascript is to ______.',
        answers: [
            'Code in Java',
            'Build blocks of reusable code',
            'Change the text font style'
        ],
        correctAnswer: 1
    }
]

// Loop through the questino array
for(let i = 0; i < questions.length; i ++){
    document.getElementById('questionsDisplay').innerHTML = `${questions[i].question}`;
}

// Loop through the answers array
for(let a = 0; a < questions.length; a++){
    document.getElementById('listOfAnswers').innerHTML = `${questions[a].answers.join('<br>')}`;
}






// Map through the questions array object.
// const listOfQuestions = item => {
//     const mapThroughQuestions = [item.question, item.answers].join(' ');
//     return mapThroughQuestions;
// }

// const listOfAnswers = item => {
//     const mapThroughAnswers = [item.answers[0]];
//     return mapThroughAnswers;
// }

// document.getElementById("questionsDisplay").innerHTML = `
// <h3>${questions.map(listOfQuestions).join('<br><br>')}</h3>
// <br>
// `;



// Select answer



// Submit Answer
