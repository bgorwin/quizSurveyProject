const codingQuestions = [
    {
        question: "What does CSS stand for?", 
        answers: [
            {a: 'Cascade Style Sheet', correctAnswer: true },
            {b: 'Color Selects Section', correctAnswer: false },
            {c: 'Create Section Style', correctAnswer: false }
        ]
    },
    {
        question: "Javascript can be used to ___",
        answers: [
            {a: 'Writing in Java', correctAnswer: false },
            {b: 'Build reusable blocks of code', correctAnswer: true },
            {c: 'Style color of fonts', correctAnswer: false }
        ]
    }
]

const myQuestions = () => {
    const text = codingQuestions.map(function (item) {
        return item.question + "<br>" + "<br>" + "<input type='radio'>" + item.answers + "</input>" + "<br>" + "<br>";
    }).join(" ");

    document.getElementById('questionsDisplay').innerHTML = text;
    console.log(text);
    
    // codingQuestions.forEach(function(entry){
    //     // document.getElementById('questionsDisplay').innerHTML = entry;
    //     // document.write(entry);
    // });

    // for (var i = 0; i < codingQuestions.length; i++){
    //     return "<p>" + codingQuestions[i].question + "</p>";
    // }
}

myQuestions();

















// const questionOutput = document.getElementById('questionsDisplay');
// const answerOutput = document.getElementById('listOfAnswers');

// const loopQuestions = (item) => {
//     var questions = [item.question].join(" ");
//     return questions;
// }

// const loopAnswers = (item) => {
//     var answer = [item.answers, item.text];
//     return answer;
// }

// const startQuiz = () => {
//     questionOutput.innerHTML = codingQuestions.map(loopQuestions);
//     answerOutput.innerHTML = codingQuestions.map(loopAnswers);
// }

// startQuiz();


// function getFullName(item) {
//     var fullname = [item.firstname,item.lastname].join(" ");
//     return fullname;
//   }
  
// function myFunction() {
//     document.getElementById("demo").innerHTML = persons.map(getFullName);
//   }