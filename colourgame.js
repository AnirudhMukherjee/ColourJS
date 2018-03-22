
var numberOfSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
		for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares=3 : numberOfSquares=6;
		// if(this.textContent=="Easy"){
		// 	numberOfSquares=3;
		// }
		// else{
		// 	numberOfSquares=6;
		// }

			reset();
		});
		}
		for(var i =0;i<squares.length;i++){
		//Add colours to squares
		//Add click listeners to squares
		squares[i].addEventListener("click",function(){
			//grab colour of clicked square
			var clickedColour = this.style.backgroundColor;
			//console.log(clickedColour);
			//compare colour
			if(clickedColour===pickedColour){
				messageDisplay.textContent="Correct!";
				resetButton.textContent="Play Again?";
				changeColours(clickedColour);
				h1.style.backgroundColor=clickedColour;
			}
			else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again";
			}
		});
		}
	reset();
}

//console.log(pickedColour);



colourDisplay.textContent = pickedColour;
for(var i =0;i<squares.length;i++){
	//Add colours to squares
	//Add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab colour of clicked square
		var clickedColour = this.style.backgroundColor;
		//console.log(clickedColour);
		//compare colour
		if(clickedColour===pickedColour){
			messageDisplay.textContent="Correct!";
			resetButton.textContent="Play Again?";
			changeColours(clickedColour);
			h1.style.backgroundColor=clickedColour;
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}

function reset(){
	colours = generateRandomColours(numberOfSquares);
	pickedColour=pickColour();
	colourDisplay.textContent=pickedColour;
	resetButton.textContent="New Colours";

	for(var i = 0;i<squares.length;i++){
		if(colours[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colours[i];
		}
		else{
			squares[i].style.display="none";
		}
	}

	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
}
// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numberOfSquares=3;
// 	colours =generateRandomColours(numberOfSquares);
// 	pickedColour =pickColour();
// 	colourDisplay.textContent=pickedColour;
// 	for(var i =0;i<squares.length;i++){
// 		if(colours[i]){
// 			squares[i].style.backgroundColor=colours[i];
// 		}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numberOfSquares = 6;
// 	colours =generateRandomColours(numberOfSquares);
// 	pickedColour =pickColour();
// 	colourDisplay.textContent=pickedColour;
// 	for(var i =0;i<squares.length;i++){
// 			squares[i].style.backgroundColor=colours[i];
// 			squares[i].style.display="block";
// 	}
// })

resetButton.addEventListener("click",function(){
	reset();
});

function changeColours(color){
  for(var i =0;i<squares.length;i++){
  	squares[i].style.backgroundColor=color;
  }
}

function pickColour(){
	var random = Math.floor(Math.random()*colours.length);
	return colours[random];
}

function generateRandomColours(num){
	var arr = [];
	for(var i =0;i<num;i++){
		arr.push(randomColour());
	}
	return arr;
}

function randomColour(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}