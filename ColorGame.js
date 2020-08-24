var numSquares = 6;
var squares = document.getElementsByClassName("square");
// (or) document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var colors = generateRandomColors(numSquares);
var pickedcolor = pickcolor();
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupButtons();
	setupSquares();
	back_to_normal();
}

function setupButtons(){
	for(var i=0;i<modeButtons.length;++i){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			numSquares =  this.textContent === "Easy"  ? 3 : 6;
			
			back_to_normal()
		});
	}
	resetButton.addEventListener("click",function(){
		back_to_normal();
	});
}


function setupSquares(){
	for(var i=0;i<squares.length;++i){
		// add colors to squares
		squares[i].style.backgroundColor = colors[i];
		
		//  grab rgb value of sq and check if it is equal
		squares[i].addEventListener("click",function(){
			var clickedcolor = this.style.backgroundColor;
			if(pickedcolor===clickedcolor){
				messageDisplay.textContent = "Correct!";
				changeColors(pickedcolor);
				h1.style.backgroundColor=pickedcolor;
				resetButton.textContent = "Play Again?";
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";

			}
		});
	}
}

function back_to_normal(){
	colors = generateRandomColors(numSquares);
	pickedcolor = pickcolor();
	colorDisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;++i){
		// add colors to squares
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else squares[i].style.display = "none";
	}
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
}


function changeColors(color){
	for(var i=0;i<squares.length;++i){
		squares[i].style.backgroundColor=color;
	}
}


function pickcolor(){
	var random =  Math.floor( Math.random() *(colors.length));
	return colors[random];
}

function generateRandomColors(num){
	// generate array of random colors 
	// ans return
	var arr = [];
	for(var i=0;i<num;++i){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}