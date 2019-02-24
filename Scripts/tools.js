function  str(a) { return String(a);     }
function   px(n) { return str(n) + "px"; }
function gid(id) { return document.getElementById(id); }
function sin(d) { return Math.sin(d/180*Math.PI); }
function cos(d) { return Math.cos(d/180*Math.PI); }

function dist(x1, y1, x2, y2) { return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1)); }

let cvs = document.createElement("canvas");
document.body.appendChild(cvs);
let ctx = cvs.getContext("2d");

let width = window.innerWidth,
	height = window.innerHeight;

cvs.width = str(width);
cvs.height = str(height);
cvs.style.width = px(width);
cvs.style.height = px(height);

let wordDisplay = document.createElement("div");
document.body.appendChild(wordDisplay);
wordDisplay.style.fontFamily = "Monospace";
wordDisplay.style.fontSize = "50px";
wordDisplay.style.position = "absolute";
wordDisplay.style.top = "15px";
