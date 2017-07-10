var Mine = {};

Mine.selectedTool = "";
Mine.selectedBlock = "";

Mine.startGame = function(){
	var game = $("#game");
	var columns = 20;
	var rows = 12;

	for(var i=0; i<rows; i++){
		var row = $("<div/>");
			row.addClass("rows");
			
		for(var j=0; j<columns; j++){
			var block = $("<div/>");
			block.addClass("block sky");
			row.append(block);	
		}
		game.append(row);
	}

}
 Mine.startGame();




