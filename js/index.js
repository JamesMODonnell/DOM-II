// Your code goes here










const mouseover = document.querySelector("#main-navigation");
mouseover.addEventListener("mouseover", function (event) {
   event.target.style.color = "red";
  });
const keydown = document.querySelector("#main-navigation");
keydown.addEventListener("keydown", function (event) {
    console.log("the better way to add functionality");
  });
const wheel = document.querySelector("#container home");
wheel.addEventListener("click", function (event) {
    console.log("working");
  });
const load = document.querySelector("#container home");
load.addEventListener("click", function (event) {
    console.log("the page is loading!");
  });
const focus = document.querySelector("#content-section");
focus.addEventListener("click", function (event) {
    event.target.style.background = "pink";
  });
const resize = document.querySelector("#height");
resize.addEventListener("click", function (event) {
    window.onresize = reportWindowSize;
  });
const scroll = document.querySelector("#content-section");
scroll.addEventListener("click", function (event) {
console.log("the better way to add functionality");
  });
const select = document.querySelector("#content-destination");
launchButton.addEventListener("click", function (event) {
    console.log("the better way to add functionality");
  });
const dblclick = document.querySelector("#content-destination"); 
launchButton.addEventListener("click", function (event) {
    console.log("the better way to add functionality");