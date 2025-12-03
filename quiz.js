function checkAnswer (){
    let correctAnswer = "4";

    const quiz = document.querySelector('input[name="quiz"]:checked');

    console.log(quiz)
    const userAnswer = quiz.value;

    
    if(userAnswer == correctAnswer){
        const feedback = document.getElementById("feedback");
        feedback.textContent = "Correct! Well done."
    }else {
        feedback.textContent = "That's incorrect. Try again!"
    }
    console.log(userAnswer);
}

const btn = document.getElementById("submit-answer")

btn.addEventListener("click", checkAnswer)