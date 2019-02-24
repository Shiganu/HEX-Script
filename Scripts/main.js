
let r = 100;
let triR = 80;
let colors = ["#00ff00", "#ff0000", "#ffffff"];

let hexWord = new HexWord(width/2, height/2, r, triR, colors);

function main()
{
	ctx.fillStyle = "#222222";
	ctx.fillRect(0, 0, width, height);

	hexWord.draw();

	requestAnimationFrame(main);
}

requestAnimationFrame(main);

document.addEventListener("click", function(){
	let mouseX = arguments[0].clientX;
	let mouseY = arguments[0].clientY;

	hexWord.click(mouseX, mouseY);
});
