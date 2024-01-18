function addQuestion() {
  const newQuestionInput = document.getElementById("new-question").value;
  const newChoicesInputs = [
    document.getElementById("new-choice1").value,
    document.getElementById("new-choice2").value,
    document.getElementById("new-choice3").value,
    document.getElementById("new-choice4").value,
  ];
  const correctAnswerIndex =
    document.getElementById("correct-answer").value - 1;
  if (
    newQuestionInput &&
    newChoicesInputs.every((choice) => choice.trim() !== "") &&
    correctAnswerIndex >= 0 &&
    correctAnswerIndex < 4
  ) {
    //Create a new question object
    const newQuizItem = {
      question: newQuestionInput,
      answers: newChoicesInputs.map((choice, index) => {
        return {
          text: choice,
          correct: index === correctAnswerIndex,
        };
      }),
    };
    // Retrieve existing questions from local storage or initialize an empty array
    const storedQuestion = JSON.parse(localStorage.getItem("quizData")) || [];
    //Add the new question to the array
    storedQuestion.push(newQuizItem);
    //Save the updated array back to local
    localStorage.setItem("quizData", JSON.stringify(storedQuestion));
    //clear input fields
    newQuestionInput.value = "";
    newChoicesInputs.forEach((input, index) => {
      document.getElementById(`new-choice${index + 1}`).value = "";
    });
    document.getElementById("correct-answer").value = "";
  } else {
    alert("Please fill the all fields with the valid information");
  }
}
