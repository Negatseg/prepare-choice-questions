const questions = [
	{
		question: "Commonly used data types Do not include?",
		answers: [
			{text: "strings",correct:false},
			{text: "boolean",correct:false},
			{text: "alerts",correct:true},
			{text: "numbers",correct:false},
		]
	},
	{
		question: "The condition in an if/else statement enclosed with _______:",
		answers: [
			{text: "quotes",correct:false},
			{text: "curlybrackets",correct:false},
			{text: "paranethesis",correct:true},
			{text: "square brackets",correct:false},
		]
	},
	{
		question: "arrays in javascript is used to store?",
		answers: [
			{text: "numbers and strings",correct:false},
			{text: "other arrays",correct:false},
			{text: "booleans",correct:false},
			{text: "All of the above",correct:true},
		]
	},
	{
		question: "String values must be enclosed in--------when being assigned by variables?",
		answers: [
			{text: "commas",correct:false},
			{text: "curlybrackets",correct:false},
			{text: " quotes",correct:true},
			{text: "parenthesis",correct:false},
		]
	},
	{
		question: "A very useful tool used during development and debugging for printing content for the debugger is?",
		answers: [
			{text: "Javascript",correct:false},
			{text: "terminal/bash",correct:false},
			{text: "for loops",correct:false},
			{text: "console.log",correct:true},
		]
	}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score= 0;

function startQuiz(){
	currentQuestionIndex= 0;
	score= 0;
	nextButton.innerHTML= "Next";
	showQuestion();
}
function showQuestion (){
	resetState();
	let currentQuestion= questions[currentQuestionIndex];
	let questionNo= currentQuestionIndex + 1;
	questionElement.innerHTML= questionNo + "." + currentQuestion.question;

	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML= answer.text;
		button.classList.add("btn");
		answerButtons.appendchild(button);
	});
}

function resetState(){
	nextButton.style.display = "block";
	while(answerButtons.firstChild){
		answerButtons.removechild(answerButtons.firstChild);
	}
}

function selectAnswer(e){
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct==="true";
	if(isCorrect){
		selectedBtn.clasList.add("correct")
		score++;
	}else{selectedBtn.clasList.add("incorrect")}

	Array.from(answerButtons.children).forEach(button => {
		if(button.dataset.correct=== "ture") {
			button.classList.add("correct");
		}
		button.disabled= true;
	});
}

function showScore(){
	resetState();
	questionElement.innerHTML = 'You scored ${score} out of ${questions.length!}';
	nextButton.innerHTML = "Play Again";
}

function handleNextButton(){
	currentQuestionIndex++;
	if(currentQuestionIndex < questions.length) {
		showQuestion();
	}else {showScore();
	}
}

nextButton.addEventListener("click", ()=> {
	if(currentQuestionIndex < questions.length){
		handleNextButton();
	}else{startQuiz();
		}
})
