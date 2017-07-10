var Mine = {};

Mine.selectedTool = "";
Mine.selectedBlock = "";

Mine.startGame = function(){
	var game = $("#game");
	var columns = 20;
	var rows = 12;
	this.linkArray = [];

	for(var i=0; i<rows; i++){
		var row = $("<div/>");
			row.addClass("rows");
			this.linkArray[i] = Array(columns);
			
		for(var j=0; j<columns; j++){
			var block =  this.linkArray[i][j] = $("<div/>");
			block.addClass("block sky");
			row.append(block);	
		}
		game.append(row);
	}

	//var t = Math.floor(Math.random()*18)+2;
	//Drawing the ground
	var itree = [];
	var irock = [];
 	for(var i=0; i<20; i++){
 		var dirt = Math.floor(Math.random()*4)+2;
 		for(var j=rows-1; j>=rows-dirt; j--){
 			if(j==rows-dirt){
 				this.linkArray[j][i].removeClass("sky").addClass("grass");
 			}else{
 				this.linkArray[j][i].removeClass("sky").addClass("dirt");
 			}
 		}
 		if(dirt == 5){
 			itree.push(i);
 		}
 		else if(dirt == 2){
 			irock.push(i);
 		}
 	}
 	//Drawing the tree
 	var treeLocation = Math.floor(Math.random() * (itree.length-3)) + 1 ;
 	for(var i=6; i>4; i--){
 		this.linkArray[i][itree[treeLocation]].removeClass("sky").addClass("tree");
 	}
 	for(var i=4; i>1; i--){
 		for(var j=itree[treeLocation]-1; j<=itree[treeLocation]+1; j++)
 		this.linkArray[i][j].removeClass("sky").addClass("leaf");
 	}

 	//Drawing the rock
 	var rockLocation = Math.floor(Math.random() * (irock.length-3)) + 1 ;
 	for(var i=9; i>7; i--){
 		this.linkArray[i][irock[rockLocation]].removeClass("sky").addClass("rock");
 	}


 /*
	for(j=rows-1; j>=rows-dirt; j--){
		if(j==rows-dirt){
			this.linkArray[j][t].removeClass("sky").addClass("grass");
		}else{
			this.linkArray[j][t].removeClass("sky").addClass("dirt");
		}
		for(j=rows-dirt+1; j<rows-dirt+3; j++){
			this.linkArray[j][t].removeClass("sky").addClass("tree");
		}
	}

	 	
	for(var i=t+1; i<columns; i++){
		var dirt = Math.floor(Math.random()*4)+2;
		for(j=rows-1; j>=rows-dirt; j--){
			if(j==rows-dirt){
				this.linkArray[j][i].removeClass("sky").addClass("grass");
			}else{
				this.linkArray[j][i].removeClass("sky").addClass("dirt");
			}
		}
	}*/

}

 Mine.startGame();












