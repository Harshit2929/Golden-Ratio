//jshint esversion:6
window.onload = function(){
	show(0);
};
let questions =[
	{
		id:1,
		question:"What is the value of Golden Ratio correct upto 3 decimal places?",
		answer:"1.618",
		options:["1.617","1.620","1.618","1.613"]
	},
	{
		id:2,
		question:"What is a sequence called, if a term belonging to this sequence is the sum of the previous two terms?",
		answer:"Fibonacci Sequence",
		options:["Lebnitz Sequence","Bernoulli Sequence" ,"Fibonacci Sequence" ,"None of these"]
	},
	{
	 	id:3,
	 	question:"Let T[n]=T[n-1]+T[n-2] for n>=3 such that T[1]=1 and T[2]=1.Which of the following represents the ratio of the nth and (n-1)th term as n tends to infinity?",
		answer:"1.618",
		options:["0.809","3.236" ,"1.618" ,"1.617"]
	},
	{
		id:4,
		question:"Who suggested to use a Greek letter to represent the Golden Ratio?",
		answer:"Mark Barr",
		options:["Euclid","Johannes Kepler","Phidias","Mark Barr"]
	},
	{
		id:5,
		question:" What Greek Symbol represents the Golden Ratio?",
		answer:"Phi",
		options:["Psi","Phi" ,"Pi" ,"Theta"]
	}
];

function submitForm(e){
	e.preventDefault();
	let name=document.forms["welcome_form"]["name"].value;

	//store player name
	sessionStorage.setItem("name",name);

	location.href ="quiz.html";
	console.log(name);
}

let question_count=0;
let point=0;

function next(){

	let user_answer =document.querySelector("li.option.active").innerHTML;
	// console.log(user_answer);

	//checkking answer
	if(user_answer==questions[question_count].answer){
		point+=20;
		sessionStorage.setItem("points",point);
	}

	if(question_count == questions.length-1){
		sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
		clearInterval(mytime);
		location.href = "end_quiz.html";
		return;
	}

	question_count++;
	show(question_count);
}

function show(count){
	let question = document.getElementById("questions");
	// question.innerHTML = "<h2>" + questions[count].question + "<h2>";
	question.innerHTML =`
	<h2>Q${question_count+1}. ${questions[count].question}</h2>
	<ul class="options">
		<li class="option">${questions[count].options[0]}</li>
		<li class="option">${questions[count].options[1]}</li>
		<li class="option">${questions[count].options[2]}</li>
		<li class="option">${questions[count].options[3]}</li>
	</ul>
	`
	toggleActive();
}

function toggleActive(){
	let option = document.querySelectorAll("li.option");
	for(let i=0;i<option.length;i++)
	{
		option[i].onclick =function(){
			for(let j=0;j<option.length;j++){
				if(option[j].classList.contains("active")){
					option[j].classList.remove("active");
				}
			}
			option[i].classList.add("active")
		}
	}
}
