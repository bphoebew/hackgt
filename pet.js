var critter = $('.critter');
var ear = $('.ear');
var lid = $('.lid');
var play = $('.play');
var currentColorBody = localStorage.getItem('bodyColor') || "#F4B9B2";
var currentColorSec = localStorage.getItem('secColor') || "#7DBBC3";
var countChange = localStorage.getItem('countChange') != 0 ?
localStorage.getItem('countChange') : 0;

// buttons
var pinkB = $('.pinkB');
var pinkO = $('.pinkO');
var brownB = $('.brownB');
var brownO = $('.brownO');
var orangeB = $('.orangeB');
var orangeO = $('.orangeO');
var mintB = $('.mintB');
var mintO = $('.mintO');
var blueB = $('.blueB');
var blueO = $('.blueO');
var blackB = $('.blackB');
var blackO = $('.blackO');

pinkB.on("click", pinkBody);
pinkO.on("click", pinkOutline);
brownB.on("click", brownBody);
brownO.on("click", brownOutline);
orangeB.on("click", orangeBody);
orangeO.on("click", orangeOutline);
mintB.on("click", mintBody);
mintO.on("click", mintOutline);
blueB.on("click", blueBody);
blueO.on("click", blueOutline);
blackB.on("click", blackBody);
blackO.on("click", blackOutline);

critter.css('backgroundColor', currentColorBody);
ear.css('backgroundColor', currentColorBody);
$('head').append('<style>.critter:before{background:' + currentColorSec + ';} .ear:before{background:' + currentColorSec + ';}</style>');

if (countChange != 0){
  play.css('visibility', 'visible');
}
function pinkBody(){
  var bodyColor = "#F4B9B2";
  critter.css('backgroundColor', "#F4B9B2");
  ear.css('backgroundColor', "#F4B9B2");
  localStorage.setItem("bodyColor", bodyColor);
}
function pinkOutline(){
  var secColor = "#F4B9B2";
  $('head').append('<style>.critter:before{background: #F4B9B2;} .ear:before{background: #F4B9B2;}</style>');
  localStorage.setItem("secColor", secColor);
}

function brownBody(){
  var bodyColor = "#E5B181";
  critter.css('backgroundColor', "#E5B181");
  ear.css('backgroundColor', "#E5B181");
  localStorage.setItem("bodyColor", bodyColor);
}
function brownOutline(){
  var secColor = "#E5B181";
  $('head').append('<style>.critter:before{background: #E5B181;} .ear:before{background: #E5B181;}</style>');
  localStorage.setItem("secColor", secColor);
}

function orangeBody(){
  var bodyColor = "#DE6B48";
  critter.css('backgroundColor', "#DE6B48");
  ear.css('backgroundColor', "#DE6B48");
  localStorage.setItem("bodyColor", bodyColor);
}
function orangeOutline(){
  var secColor = "#DE6B48";
  $('head').append('<style>.critter:before{background: #DE6B48;} .ear:before{background: #DE6B48;}</style>');
  localStorage.setItem("secColor", secColor);
}

function mintBody(){
  var bodyColor = "#DAEDBD";
  critter.css('backgroundColor', "#DAEDBD");
  ear.css('backgroundColor', "#DAEDBD");
  localStorage.setItem("bodyColor", bodyColor);
}
function mintOutline(){
  var secColor = "#DAEDBD";
  $('head').append('<style>.critter:before{background: #DAEDBD;} .ear:before{background: #DAEDBD;}</style>');
  localStorage.setItem("secColor", secColor);
}

function blueBody(){
  var bodyColor = "#7DBBC3";
  critter.css('backgroundColor', "#7DBBC3");
  ear.css('backgroundColor', "#7DBBC3");
  localStorage.setItem("bodyColor", bodyColor);
}
function blueOutline(){
  var secColor = "#7DBBC3";
  $('head').append('<style>.critter:before{background: #7DBBC3;} .ear:before{background: #7DBBC3;}</style>');
  localStorage.setItem("secColor", secColor);
}

function blackBody(){
  var bodyColor = "#5D5F71";
  critter.css('backgroundColor', "#5D5F71");
  ear.css('backgroundColor', "#5D5F71");
  localStorage.setItem("bodyColor", bodyColor);
}
function blackOutline(){
  var secColor = "#5D5F71";
  $('head').append('<style>.critter:before{background: #5D5F71;} .ear:before{background: #5D5F71;}</style>');
  localStorage.setItem("secColor", secColor);
}

function refresh(){
    var storedBody = localStorage.getItem("bodyColor");
    var storedSec = localStorage.getItem("secColor");
    var storedScore = localStorage.getItem("countChange");
}

function myFunction() {
  if (countChange == 0){
    alert("Your Pet Has Been Created!");
    play.css('visibility', 'visible');
    countChange++;
    var countChangeTwo = countChange + countChangeTwo;
    localStorage.setItem('countChange', countChange);
  }else{
    alert("Your Pet Has Been Changed!");
    play.css('visibility', 'visible');
    var scoreChange = countChange + scoreChange;
    localStorage.setItem('scoreChange', scoreChange);
  }
}
