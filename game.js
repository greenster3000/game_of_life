// $(document).ready(function(){
// 	generateGrid();
// });
window.onload = function() {
	generateGrid();
}


function generateGrid() {	
		document.getElementById("container").innerHTML = "";
		var width = 34;
		var height = 17;


	for (var j = 0; j < height; j++) {
		
		var line = document.createElement('div');
		line.className = 'line';
		
			
			for (var i = 0; i < width; i++) {
				
				var xy = 'x' + j.toString() + 'y' + i.toString();
	
				var square = document.createElement('div');
				square.className = 'square';
				square.id = xy;
				square.addEventListener("click", handleClick);
				line.appendChild(square);
				
			};
		document.getElementById('container').appendChild(line);
	};
	var pixels = (960/width) - 2;
	$(".square").css({"width": pixels, "height":pixels});
	shade();
};

// function highlight() {
// 	get.onClick(function(){
// 		$(this).addClass("highlight");
// 	});
	
// };

// Function that will be called when anchor is clicked
function handleClick(){
  this.classList.add("highlight");
}

// function highlight() {
// 	document.getElementsByClassName('square').onClick = function () {
// 		// document.this.classList.add("highlight");
// 		alert("You clicked me!");
// 	};
		
		
// }
// function changeClass() {
//     document.getElementById("changeButton").onclick = function () {
//         if (document.getElementById("mainText").className === "settingOne") {
//             document.getElementById("mainText").className = "settingTwo";
//         } else {
//             document.getElementById("mainText").className === "settingOne";
//         }
//     };
// }
	

