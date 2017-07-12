var Mine = {};

Mine.selectedTool = "";
Mine.selectedBlock = "";

// Create the game
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
			block.on("click", function(){
				Mine.toggleBlock();
			});
		}
		game.append(row);
	}	

	//Drawing the ground
	var itree = [];
	var irock = [];
	var icloud = [];
 	for(var i=0; i<columns; i++){
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
 	var treeLocation = Math.floor(Math.random() * (itree.length-3)) + 1;
 	for(var i=6; i>4; i--){
 		this.linkArray[i][itree[treeLocation]].removeClass("sky").addClass("tree");
 	}
 	for(var i=4; i>1; i--){
 		for(var j=itree[treeLocation]-1; j<=itree[treeLocation]+1; j++)
 		this.linkArray[i][j].removeClass("sky").addClass("leaf");
 	}

 	//Drawing the rock
 	var rockLocation = Math.floor(Math.random() * (irock.length-3)) + 1;
 	for(var i=9; i>7; i--){
 		this.linkArray[i][irock[rockLocation]].removeClass("sky").addClass("rock");
 	}

 	//Drawing the cloud
 	var cloudLocation = Math.floor(Math.random() * (icloud.length-3)) + 1;
 	for(var i=2; i>1; i--){
 		for(var j=itree[treeLocation]+3; j<itree[treeLocation]+6; j++){
 			this.linkArray[i][j].removeClass("sky").addClass("cloud");
 		}
 	}
 	for(var i=3; i>2; i--){
 		for(var j=itree[treeLocation]+4; j<itree[treeLocation]+7; j++){
 			this.linkArray[i][j].removeClass("sky").addClass("cloud");
 		}
 	}	
}
// Create the toolbar
Mine.tools = function(name, image, associate){
	this.name = name;
	this.image = image;
	this.associate = [];
	for(i=0; i<associate.length; i++){
		this.associate[i] = associate[i];
	}
	this.element = $("<div/>"); 
	this.element.addClass(this.name)
	var self = this;
	this.element.on("click", function(){
		Mine.selectedTool = self;
		Mine.selectedBlock = "";
		//console.log(Mine.selectedTool);
	});
	this.element.css({"background-image":"url("+this.image+")", "width":"60px", "height":"60px", "background-size":"cover"});
	$("#toolbar").append(this.element);
}

var axe = new Mine.tools("axe", "./images/axe.png", ['tree', 'leaf']);
var pickaxe = new Mine.tools("pickaxe", "./images/pickaxe.png", ['rock']);
var shovel = new Mine.tools("shovel", "./images/shovel.png", ['grass', 'dirt']);

// generate the dynamic of the tools objects 
Mine.toggleBlock = function(){
	if(Mine.selectedTool != ""){
		var ele = event.target;
		var class1 = ele.classList;
		for(var i=0; i<class1.length; i++){
			for(var j=0; j<Mine.selectedTool.associate.length; j++){
				var toolClass = class1[i];
				if(class1[i] === Mine.selectedTool.associate[j]){
					ele.classList.remove(class1[i]);
					ele.classList.add("sky");

					var toolClass = "tool.block." + toolClass;
					if($("." + toolClass).length){
						var toolMapEl = $("." + toolClass);
						var counter = toolMapEl.text();
						if(counter == ""){
							toolMapEl.text("2");
						}
						else{
							counter = parseInt(counter);
							counter++;
							toolMapEl.text(counter);
						}
					}
					else{
						var toolmapel = $('<div/>');
						toolmapel.addClass(toolClass.replace(/\./g," "));
						toolmapel.on("click", function(){
							Mine.selectBlock();
						});
						$("#toolbar").append(toolmapel);
					}
					//$(".")
				}
			}
		}
	}
	else if(Mine.selectedBlock != ""){
		var ele = event.target;
		var class1 = ele.classList;
		for(var i=0; i<class1.length; i++){
			if(class1[i] == "sky"){
				ele.classList.remove("sky");
				ele.classList.add(Mine.selectedBlock);
			}
		}
	}
}

Mine.selectBlock = function(){
	var element = event.target;
	var currClass = element.className;
	currClass = currClass.replace("tool block ", "");
	Mine.selectedBlock = currClass;
	Mine.selectedTool = "";
	console.log();
	
}






 Mine.startGame();












