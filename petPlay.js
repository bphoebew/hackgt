var critter = $(".critter");
var mood = "";
var busy = false;
var happiness = 100;
var hunger = 100;
var sleepiness = 100;
var currentColorBody = localStorage.getItem('bodyColor') || "#F4B9B2";
var currentColorSec = localStorage.getItem('secColor') || "#7DBBC3";
// var currentFi = localStorage.getItem('fiColor') || "#F4B9B2";
var ear = $('.ear');
var lid = $('.lid');

critter.css('backgroundColor', currentColorBody);
ear.css('backgroundColor', currentColorBody);
lid.css('backgroundColor', currentColorBody);
$('head').append('<style>.critter:before{background:' + currentColorSec + ';} .ear:before{background:' + currentColorSec + ';}</style>');

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

var fi = $('#fi');
var sec = $('#sec');
var thr = $('#thr');
var fr = $('#fr');
var fv = $('#fv');
var sx = $('#sx');
var sv = $('#sv');
var eg = $('#eg');
var nin = $('#nin');
var ten = $('#ten');
var elv = $('#elv');
var twl = $('#twl');
var thiteen = $('#thiteen');
var frteen = $('#frteen');
var fvteen = $('#fvteen');
var sxteen = $('#sxteen');
var svt = $('#svt');
var egt = $('#egt');
var nnt = $('#nnt');
var twt = $('#twt');
var twtOne = $('#twtOne');
var twtTwo = $('#twtTwo');
var twtThr = $('#twtThr');
var twtFr = $('#twtFr');
var twtFv = $('#twtFv');
var twtSx = $('#twtSx');
var twtSv = $('#twtSv');
var twtEg = $('#twtEg');
var twtNin = $('#twtNin');
var trty = $('#trty');
var trtyOne = $('#trtyOne');

var currentFi = localStorage.getItem('fiColor') || "#F4B9B2";
var currentSec = localStorage.getItem('secColorTwo') || "#F4B9B2";
var currentThr = localStorage.getItem('thrColor') || "#F4B9B2";
var currentFr = localStorage.getItem('frColor') || "#F4B9B2";
var currentFv = localStorage.getItem('fvColor') || "#F4B9B2";
var currentSx = localStorage.getItem('sxColor') || "#F4B9B2";
var currentSv = localStorage.getItem('svColor') || "#F4B9B2";
var currentEg = localStorage.getItem('egColor') || "#F4B9B2";
var currentNin = localStorage.getItem('ninColor') || "#F4B9B2";
var currentTen = localStorage.getItem('tenColor') || "#F4B9B2";
var currentElv = localStorage.getItem('elvColor') || "#F4B9B2";
var currentTwl = localStorage.getItem('twlColor') || "#F4B9B2";
var currentThiteen = localStorage.getItem('thiteenColor') || "#F4B9B2";
var currentFrteen = localStorage.getItem('frteenColor') || "#F4B9B2";
var currentFvteen = localStorage.getItem('fvteenColor') || "#F4B9B2";
var currentSxteen = localStorage.getItem('sxteenColor') || "#F4B9B2";
var currentSvt = localStorage.getItem('svtColor') || "#F4B9B2";
var currentEgt = localStorage.getItem('egtColor') || "#F4B9B2";
var currentNnt = localStorage.getItem('nntColor') || "#F4B9B2";
var currentTwt = localStorage.getItem('twtColor') || "#F4B9B2";
var currentTwtOne = localStorage.getItem('twtOneColor') || "#F4B9B2";
var currentTwtTwo = localStorage.getItem('twtTwoColor') || "#F4B9B2";
var currentTwtThr = localStorage.getItem('twtThrColor') || "#F4B9B2";
var currentTwtFr = localStorage.getItem('twtFrColor') || "#F4B9B2";
var currentTwtFv = localStorage.getItem('twtFvColor') || "#F4B9B2";
var currentTwtSx = localStorage.getItem('twtSxColor') || "#F4B9B2";
var currentTwtSv = localStorage.getItem('twtSvColor') || "#F4B9B2";
var currentTwtEg = localStorage.getItem('twtEgColor') || "#F4B9B2";
var currentTwtNin = localStorage.getItem('twtNinColor') || "#F4B9B2";
var currentTrty = localStorage.getItem('trtyColor') || "#F4B9B2";
var currentTrtyOne = localStorage.getItem('trtyOneColor') || "#F4B9B2";

fi.css('backgroundColor', currentFi);
sec.css('backgroundColor', currentSec);
thr.css('backgroundColor', currentThr);
fr.css('backgroundColor', currentFr);
fv.css('backgroundColor', currentFv);
sx.css('backgroundColor', currentSx);
sv.css('backgroundColor', currentSv);
eg.css('backgroundColor', currentEg);
nin.css('backgroundColor', currentNin);
ten.css('backgroundColor', currentTen);
elv.css('backgroundColor', currentElv);
twl.css('backgroundColor', currentTwl);

fi.on("click", turnFi);
sec.on("click", turnSec);
thr.on("click", turnThr);

var countFi = 0;
function turnFi(){
  if (countFi == 0){
    var bodyColor = "#DAEDBD";
    fi.css('backgroundColor', "#DAEDBD");
    localStorage.setItem("fiColor", bodyColor);
    countFi++;
    console.log("hi");
  }else if (countFi == 1){
    var bodyColor = "#F4B9B2";
    fi.css('backgroundColor', "#F4B9B2");
    localStorage.setItem("fiColor", bodyColor);
    countFi--;
  }
}

var countSec = 0;
function turnSec(){
  if (countSec == 0){
    var bodyColor = "#DAEDBD";
    sec.css('backgroundColor', "#DAEDBD");
    localStorage.setItem("secColorTwo", bodyColor);
    countSec++;
    console.log("hi");
  }else if (countSec == 1){
    var bodyColor = "#F4B9B2";
    sec.css('backgroundColor', "#F4B9B2");
    localStorage.setItem("secColorTwo", bodyColor);
    countSec--;
  }
}

var countThr = 0;
function turnThr(){
  if (countThr == 0){
    var bodyColor = "#DAEDBD";
    thr.css('backgroundColor', "#DAEDBD");
    localStorage.setItem("thrColor", bodyColor);
    countThr++;
    console.log("hi");
  }else if (countThr == 1){
    var bodyColor = "#F4B9B2";
    thr.css('backgroundColor', "#F4B9B2");
    localStorage.setItem("thrColor", bodyColor);
    countFi--;
  }
}

function refresh(){
    var storedBody = localStorage.getItem("bodyColor");
    var storedSec = localStorage.getItem("secColor");
    var storedFi = localStorage.getItem("fiColor");
    var storedSecTwo = localStorage.getItem("secColorTwo");

}
