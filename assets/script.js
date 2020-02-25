const questions = [
    {
        question1: 'What does CSS stand for?',
        answers: {
            a: 'Cascade Style Sheets',
            b: 'Cool Style Syntax',
            c: 'Case Sensitive Subjects'
        }
    },
    {
        question2: 'One use of Javascript is to ______.',
        answers: {
            a: 'Code in Java',
            b: 'Build blocks of reusable code.',
            c: 'Change the text font style.'
        }
    }
]

// Map through the questions array object.
const listOfQuestions = (question, answer) => {
    const mapThroughQuestions = [question.question1, answer.answers].join('');
    return mapThroughQuestions;
}

document.getElementById("questionsDisplay").innerHTML = questions.map(listOfQuestions);



// Select answer



// Submit Answer
