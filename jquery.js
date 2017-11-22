$(document).ready(function(){
	generateGrid();
});


function generateGrid() {	
		$("#container").empty();
		var width = prompt("How many columns wide do you want the Etch-a-Sketch"
								+ " to be? Enter an integer between 1 and 64");
		var height = prompt("How many rows high do you want the Etch-a-Sketch"
								+ " to be? Enter an integer between 1 and 64");
	
		width = Math.round(width);
		height = Math.round(height);

		if (width > 64) {
			width = 64;
		};
		if (width < 1) {
			width = 1;
		};

		if (height > 64) {
			height = 64;
		};
		if (height < 1) {
			height = 1;
		};
	

	for (var j = 0; j < height; j++) {
		var line = $("<div class='line'></div>");
			
			for (var i = 0; i < width; i++) {		
				var square = $("<div></div>").addClass("square");
				$(line).append(square);		
			};
		$("#container").append(line);
	};
	var pixels = (960/width) - 2;
	$(".square").css({"width": pixels, "height":pixels});
	shade();
};

function ghost() {
	$(".square").mouseenter(function(){
		$(this).addClass("highlight");
	});
	$(".square").mouseleave(function(){
		$(this).removeClass("highlight");
	});
	
};
function permanent() {
	
	$(".square").mouseenter(function(){
		$(this).addClass("highlight");
	});
	$(".square").mouseleave(function(){
		$(this).addClass("highlight");
	});
};
function shade() {
	$(".square").mouseenter(function(){
		var ting = $(this).css("opacity");
		ting -= 0.1;
		$(this).css({"opacity": ting});
	
	});
};
	

