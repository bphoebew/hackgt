var critter = $(".critter");
var mood = "";
var busy = false;
var happiness = 100;
var hunger = 100;
var sleepiness = 100;


init();

function play() {
	if(!busy) {
		critter.removeClass("idle").removeClass("worried").removeClass("sad").addClass("play");
		// $("#status").html("Play");
		happiness += 12;

		busy = true;
		disable();
		coolDown(4000);
	}
}
function feed() {
	if(!busy) {
		critter.removeClass("idle").removeClass("worried").removeClass("sad").addClass("feed");
		// $("#status").html("Feed");
		hunger += 12;

		busy = true;
		disable();
		coolDown(5000);
	}
}
function rest() {
	if(!busy){
		critter.removeClass("idle").removeClass("worried").removeClass("sad").addClass("rest");
		// $("#status").html("Rest");
		sleepiness += 12;

		busy = true;
		disable();
		coolDown(8000);
	}
}

function update(){

	happiness -= 0;
	hunger -= 0;
	sleepiness -= 0;

	// Check Happiness
	if(happiness < 10){
		// Min Happiness
		happiness = 10;
	} else if(happiness < 33){
		// Sad
		$(".happy .progress").css( "background", "firebrick");
		if( !critter.hasClass("sad") ){
			if(!busy){
				critter.removeClass("worried").addClass("sad");
			}
			mood = "sad";
		}
	} else if(happiness < 66){
		// Worried
		$(".happy .progress").css( "background", "gold");
		if( !critter.hasClass("worried") || !critter.hasClass("sad") ){
			if(!busy){
				critter.addClass("worried").removeClass("sad");
			}
			mood = "worried";
		}
	} else if(happiness <= 100){
		// Happy
		$(".happy .progress").css( "background", "lightgreen");
		critter.removeClass("worried").removeClass("sad");
		mood = "";
	} else if (happiness > 100){
		happiness = 100;
		critter.removeClass("worried").removeClass("sad");
		mood = "";
	}
	// Check Hunger
	if(hunger < 10){
		// Min Hunger
		hunger = 10;
	} else if(hunger < 33){
		// Sad
		$(".hunger .progress").css( "background", "firebrick");
		if( !critter.hasClass("sad") ){
			if(!busy){
				critter.removeClass("worried").addClass("sad");
			}
			mood = "sad";
		}
	} else if(hunger < 66){
		// Worried
		$(".hunger .progress").css( "background", "gold");
		if( !critter.hasClass("worried") || !critter.hasClass("sad") ){
			if(!busy){
				critter.addClass("worried").removeClass("sad");
			}
			mood = "worried";
		}
	} else if(hunger <= 100){
		// Happy
		$(".hunger .progress").css( "background", "lightgreen");
		critter.removeClass("worried").removeClass("sad");
		mood = "";
	} else if (hunger > 100){
		// Max Hunger
		hunger = 100;
		critter.removeClass("worried").removeClass("sad");
		mood = "";
	}
	// Check Sleepiness
	if(sleepiness < 10){
		// Min Sleepiness
		sleepiness = 10;
	} else if(sleepiness < 33){
		// Sad
		$(".sleep .progress").css( "background", "firebrick");
		if( !critter.hasClass("sad") ){
			if(!busy){
				critter.removeClass("worried").addClass("sad");
			}
			mood = "sad";
		}
	} else if(sleepiness < 66){
		// Worried
		$(".sleep .progress").css( "background", "gold");
		if( !critter.hasClass("worried") || !critter.hasClass("sad") ){
			if(!busy){
				critter.addClass("worried").removeClass("sad");
			}
			mood = "worried";
		}
	} else if(sleepiness <= 100){
		// Happy
		$(".sleep .progress").css( "background", "lightgreen");
		critter.removeClass("worried").removeClass("sad");
		mood = "";
	} else if (sleepiness > 100){
		// Max Sleepiness
		sleepiness = 100;
		critter.removeClass("worried").removeClass("sad");
		mood = "";
	}

	// Set Stats
	$(".happy .progress").css( "width", happiness + "%");
	$(".hunger .progress").css( "width", hunger + "%");
	$(".sleep .progress").css( "width", sleepiness + "%");
}

function init() {
	console.log("startGame");
	setInterval(function(){
		update();
	}, 3000);
}



function coolDown( time ){

	setTimeout(function(){
		busy = false;
		// console.log("----- ready");
		critter.addClass("idle").removeClass("play").removeClass("feed").removeClass("rest").addClass(mood);
		// $("#status").html("Idle");
		enable();
	}, time);

}
function disable() {
	$("button").addClass("disabled");
}
function enable(){
	$("button").removeClass("disabled");
}
