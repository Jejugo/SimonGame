$(document).ready(function(){
	var arrayRandomColors = [];
	var auxiliarArray = [];
	$red = $(".red");
	$blue = $(".blue");
	$green = $(".green");
	$yellow = $(".yellow");
	var userAnswer = [];
	var level = 0;

	function playSimon (arrayPlay){
		var count = 0;
		var id = setInterval(function(){
			if (arrayPlay[count] == 1 && count < arrayPlay.length){
				$red.css("background-color", "#ffc1c1");
				$("#sound1").get(0).play();
				setTimeout(function(){
					$red.css("background-color", "red");

					$red.hover(function(){
						$red.css("background-color", "#ffc1c1");
					}, function(){
						$red.css("background-color", "red");
					});
					//$red.css("background-color", "red");
				}, 800);
			}
			else if (arrayPlay[count] == 2 && count < arrayPlay.length){
				$blue.css("background-color", "#a5b0f7");
				$("#sound2").get(0).play();
				setTimeout(function(){
					$blue.css("background-color", "blue");

					$blue.hover(function(){
						$blue.css("background-color", "#a5b0f7");
					}, function(){
						$blue.css("background-color", "blue");
					});
				}, 800);
			}
			else if (arrayPlay[count] == 3 && count < arrayPlay.length){
				$green.css("background-color", "#aff7a5");
				$("#sound3").get(0).play();
				setTimeout(function(){
					$green.css("background-color", "green");
					$green.hover(function(){
						$green.css("background-color", "#aff7a5");
					}, function(){
						$green.css("background-color", "green");
					});
				}, 800);
			}
			else if (arrayPlay[count] == 4 && count < arrayPlay.length){
				$yellow.css("background-color", "#cacc20");
				$("#sound4").get(0).play();
				setTimeout(function(){
				$yellow.css("background-color", "yellow");
				$yellow.hover(function(){
						$yellow.css("background-color", "#cacc20");
					}, function(){
						$yellow.css("background-color", "yellow");
					});
				}, 800);
			}

			count++;

			if(count == arrayPlay.length){
				clearInterval(id);
			}

		}, 500);
	}

	function runOnce(){
			for (var i=0; i<20; i++){
				var x = Math.floor(Math.random() * (5 - 1)) + 1;
				arrayRandomColors.push(x);
			}

			console.log(arrayRandomColors);
			var arrayPlay = arrayRandomColors.slice(0, 1);
			playSimon(arrayPlay);
			level++;
			$(".text-level").html(level);
		}

	strictSwitch = 1;
	$("input[type=checkbox]").attr('checked', false);

	$(".slider").click(function(){
		if(strictSwitch == 1){
			$(".textStrict").html("On");
			strictSwitch = 0;
		}
		else{
			$(".textStrict").html("Off");
			strictSwitch = 1;	
		}
	});

	$(".turnItOn").click(function(){
		//Muda a cor pra verde

		runOnce();

	});

	$(".restart").click(function(){
		arrayRandomColors = [];
		auxiliarArray = [];
		userAnswer = [];
		runOnce();
		level = 1;
		$(".text-level").html(level);
	});

	//COUNTAUX TEM QUE RESETAR TODA VEZ QUE O USUARIO ACERTA UMA SEQUENCIA DE CORES

	$red.click(function(){
		userAnswer.push(1);
		$("#sound1").get(0).play();
		for(var i=0; i<userAnswer.length; i++){
			console.log("o i é" + i, userAnswer[i], arrayRandomColors[i], userAnswer.length, level);
			if(userAnswer[i] == arrayRandomColors[i] && i+1 == level){
				auxiliarArray = arrayRandomColors.slice(0, level+1);
				playSimon(auxiliarArray);
				userAnswer = [];
				level++;
				$(".text-level").html(level);
				if (level == 20){
					alert("O jogo Acabou!!!");
					arrayRandomColors = [];
					auxiliarArray = [];
					userAnswer = [];
					runOnce();
				}
			}
			else if(userAnswer[i] != arrayRandomColors[i]){
				if (strictSwitch == 0){
					alert("Você errou!!");
					userAnswer = [];
					auxiliarArray = [];
					userAnswer = [];
					runOnce();
				}
				else{
					alert("Você errou!!");
					userAnswer.splice(userAnswer.length-1, 1);
					auxiliarArray = arrayRandomColors.slice(0, level);
					playSimon(auxiliarArray);
					userAnswer = [];
				}
			
			}
			console.log(auxiliarArray);
		}
	});

	$blue.click(function(){
		userAnswer.push(2);
		$("#sound2").get(0).play();
		for(var i=0; i<userAnswer.length; i++){
			console.log("o i é" + i, userAnswer[i], arrayRandomColors[i], userAnswer.length, level);
			if(userAnswer[i] == arrayRandomColors[i] && i+1 == level){
				auxiliarArray = arrayRandomColors.slice(0, level+1);
				playSimon(auxiliarArray);
				userAnswer = [];
				level++;
				$(".text-level").html(level);
				if (level == 20){
					alert("O jogo Acabou!!!");
					arrayRandomColors = [];
					auxiliarArray = [];
					userAnswer = [];
					runOnce();
				}
			}
			else if(userAnswer[i] != arrayRandomColors[i]){
				if (strictSwitch == 0){
					alert("Você errou!!");
					userAnswer = [];
					auxiliarArray = [];
					userAnswer = [];
					runOnce();
				}
				else{
					alert("Você errou!!");
					userAnswer.splice(userAnswer.length-1, 1);
					auxiliarArray = arrayRandomColors.slice(0, level);
					playSimon(auxiliarArray);
					userAnswer = [];
				}
			}
			console.log(auxiliarArray);
		}
	});

	$green.click(function(){
		userAnswer.push(3);
		$("#sound3").get(0).play();
		for(var i=0; i<userAnswer.length; i++){
			console.log("o i é" + i, userAnswer[i], arrayRandomColors[i], userAnswer.length, level);
			if(userAnswer[i] == arrayRandomColors[i] && i+1 == level){
				auxiliarArray = arrayRandomColors.slice(0, level+1);
				playSimon(auxiliarArray);
				userAnswer = [];
				level++;
				$(".text-level").html(level);
				if (level == 20){
					alert("O jogo Acabou!!!");
					arrayRandomColors = [];
					auxiliarArray = [];
					userAnswer = [];
					runOnce();
				}
			}
			else if(userAnswer[i] != arrayRandomColors[i]){
				if (strictSwitch == 0){
					alert("Você errou!!");
					userAnswer = [];
					auxiliarArray = [];
					userAnswer = [];
					runOnce();
				}
				else{
					alert("Você errou!!");
					userAnswer.splice(userAnswer.length-1, 1);
					auxiliarArray = arrayRandomColors.slice(0, level);
					playSimon(auxiliarArray);
					userAnswer = [];
				}
			}
			console.log(auxiliarArray);
		}
	});

	$yellow.click(function(){
		userAnswer.push(4);
		$("#sound4").get(0).play();
		for(var i=0; i<userAnswer.length; i++){
			console.log("o i é" + i, userAnswer[i], arrayRandomColors[i], userAnswer.length, level);
			if(userAnswer[i] == arrayRandomColors[i] && i+1 == level){
				auxiliarArray = arrayRandomColors.slice(0, level+1);
				playSimon(auxiliarArray);
				userAnswer = [];
				level++;
				$(".text-level").html(level);
				if (level == 20){
					alert("O jogo Acabou!!!");
					arrayRandomColors = [];
					auxiliarArray = [];
					userAnswer = [];
					runOnce();
				}
			}
			else if(userAnswer[i] != arrayRandomColors[i]){
				if (strictSwitch == 0){
					alert("Você errou!!");
					auxiliarArray = [];
					userAnswer = [];
					level = 0;
					runOnce();
				}
				else{
					alert("Você errou!!");
					userAnswer.splice(userAnswer.length-1, 1);
					auxiliarArray = arrayRandomColors.slice(0, level);
					playSimon(auxiliarArray);
					userAnswer = [];
				}
			}
			console.log(auxiliarArray);
		}
	});
	
});