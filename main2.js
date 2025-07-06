const questions = [
  {
    question: "Which HTML tag is used to define a table header?",
    answers: [
      { text: "<th>", correct: true },
      { text: "<td>", correct: false },
      { text: "<tr>", correct: false },
      { text: "<thead>", correct: false }
    ]
  },
  {
    question: "What is the purpose of the 'z-index' in CSS?",
    answers: [
      { text: "To change the zoom level", correct: false },
      { text: "To control the vertical alignment", correct: false },
      { text: "To set the stack order of elements", correct: true },
      { text: "To apply transparency", correct: false }
    ]
  },
  {
    question: "Which method is used to add a new element to the end of an array in JavaScript?",
    answers: [
      { text: "add()", correct: false },
      { text: "push()", correct: true },
      { text: "append()", correct: false },
      { text: "insert()", correct: false }
    ]
  },
  {
    question: "What does the 'defer' attribute do in a <script> tag?",
    answers: [
      { text: "Delays script execution until after the page has loaded", correct: true },
      { text: "Loads the script immediately", correct: false },
      { text: "Blocks HTML parsing", correct: false },
      { text: "Skips script execution", correct: false }
    ]
  },
  {
    question: "Which CSS property is used to make a website responsive?",
    answers: [
      { text: "display", correct: false },
      { text: "float", correct: false },
      { text: "media queries", correct: true },
      { text: "z-index", correct: false }
    ]
  },
  {
    question: "What is the output of `typeof NaN` in JavaScript?",
    answers: [
      { text: "'number'", correct: true },
      { text: "'NaN'", correct: false },
      { text: "'undefined'", correct: false },
      { text: "'object'", correct: false }
    ]
  },
  {
    question: "How do you select an element with id 'main' in CSS?",
    answers: [
      { text: "#main", correct: true },
      { text: ".main", correct: false },
      { text: "main", correct: false },
      { text: "@main", correct: false }
    ]
  },
  {
    question: "Which of the following is NOT a valid JavaScript loop?",
    answers: [
      { text: "for", correct: false },
      { text: "foreach", correct: true },
      { text: "while", correct: false },
      { text: "do...while", correct: false }
    ]
  },
  {
    question: "What does 'flex: 1' mean in a CSS flexbox layout?",
    answers: [
      { text: "The element shrinks to 1 pixel", correct: false },
      { text: "The element takes equal available space", correct: true },
      { text: "The element is hidden", correct: false },
      { text: "The element is positioned absolutely", correct: false }
    ]
  },
  {
    question: "What does the JavaScript '===' operator do?",
    answers: [
      { text: "Compares both value and type", correct: true },
      { text: "Compares only the value", correct: false },
      { text: "Assigns value", correct: false },
      { text: "Checks type only", correct: false }
    ]
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image?",
    answers: [
      { text: "src", correct: false },
      { text: "title", correct: false },
      { text: "alt", correct: true },
      { text: "description", correct: false }
    ]
  },
  {
    question: "How do you make a link open in a new tab in HTML?",
    answers: [
      { text: 'target="_blank"', correct: true },
      { text: 'target="_newtab"', correct: false },
      { text: 'href="newtab"', correct: false },
      { text: 'open="tab"', correct: false }
    ]
  },
  {
    question: "Which CSS unit is relative to the font-size of the root element?",
    answers: [
      { text: "em", correct: false },
      { text: "rem", correct: true },
      { text: "%", correct: false },
      { text: "vh", correct: false }
    ]
  },
  {
    question: "How can you stop event propagation in JavaScript?",
    answers: [
      { text: "event.preventDefault()", correct: false },
      { text: "event.stopPropagation()", correct: true },
      { text: "event.cancel()", correct: false },
      { text: "event.block()", correct: false }
    ]
  },
  {
    question: "What does the `querySelector()` method return?",
    answers: [
      { text: "A list of all matching elements", correct: false },
      { text: "The first matching element", correct: true },
      { text: "An array of classes", correct: false },
      { text: "Nothing", correct: false }
    ]
  },
  {
    question: "Which property is used to change the text color in CSS?",
    answers: [
      { text: "background", correct: false },
      { text: "font-color", correct: false },
      { text: "color", correct: true },
      { text: "text-color", correct: false }
    ]
  },
  {
    question: "What is the default position value of an HTML element?",
    answers: [
      { text: "fixed", correct: false },
      { text: "absolute", correct: false },
      { text: "relative", correct: false },
      { text: "static", correct: true }
    ]
  },
  {
    question: "Which JavaScript method converts JSON data to a JavaScript object?",
    answers: [
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.parse()", correct: true },
      { text: "parse.JSON()", correct: false },
      { text: "objectify()", correct: false }
    ]
  },
  {
    question: "What does the 'box-sizing: border-box;' property do?",
    answers: [
      { text: "Adds box shadows", correct: false },
      { text: "Includes padding and border in the element's total width and height", correct: true },
      { text: "Removes borders", correct: false },
      { text: "Fixes element overflow", correct: false }
    ]
  },
  {
    question: "Which tag is used to embed JavaScript code in an HTML document?",
    answers: [
      { text: "<js>", correct: false },
      { text: "<javascript>", correct: false },
      { text: "<script>", correct: true },
      { text: "<code>", correct: false }
    ]
  }
];


let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

// DOM elements
const loginScreen = document.getElementById("login-screen");
const quizScreen = document.getElementById("quiz-screen");
const userDisplay = document.getElementById("user-display");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progress = document.getElementById("progress");
const timerDisplay = document.getElementById("timer");

function startLogin() {
  const username = document.getElementById("username").value.trim();
  if (username === "") {
    alert("Please enter your name");
    return;
  }
  userDisplay.textContent = `👦👧 ${username}`;
  loginScreen.style.display = "none";
  quizScreen.style.display = "block";
  startQuiz();
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  updateProgress();
  startTimer();

  const current = questions[currentQuestionIndex];
  questionElement.innerText = current.question;

  current.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  clearInterval(timer);
  timeLeft = 15;
  timerDisplay.innerText = `Time: ${timeLeft}s`;
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      disableAnswers();
      nextButton.style.display = "block";
    }
  }, 1000);
}

function selectAnswer(e) {
  clearInterval(timer);
  const selected = e.target;
  const correct = selected.dataset.correct === "true";

  if (correct) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  nextButton.style.display = "block";
}

function disableAnswers() {
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });
}

function updateProgress() {
  const percent = ((currentQuestionIndex) / questions.length) * 100;
  progress.style.width = `${percent}%`;
}

function showScore() {
  resetState();
  questionElement.innerText = `🎉 Quiz Finished!\nYou scored ${score} out of ${questions.length}.`;
  nextButton.innerText = "Restart Quiz";
  nextButton.style.display = "block";
  progress.style.width = "100%";
}

function handleNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNext();
  } else {
    startQuiz();
    nextButton.innerText = "Next";
  }
});


