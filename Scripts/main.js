
let triangles = [];
let r = 100;
let triR = 80;
let colors = ["#00ff00", "#ff0000", "#ffffff"];

for(let i = 0; i < 3; i++)
{
	let aa = -90 + i*120;

	for(let a = -60; a < 300; a += 60)
		triangles.push(new Triangle(
			width/2  + Math.sqrt(3)*r * cos(aa) + r * cos(a),
			height/2 + Math.sqrt(3)*r * sin(aa) + r * sin(a),
			triR, 180-a, colors
		));

	triangles.push(new Triangle(
		width/2  + Math.sqrt(3)*r * cos(-30+i*120) + r * cos(-60+i*120),
		height/2 + Math.sqrt(3)*r * sin(-30+i*120) + r * sin(-60+i*120),
		triR, 180-60, colors
	));

	triangles.push(new Triangle(
		width/2  + Math.sqrt(3)*r * cos(-30+i*120) + r * cos(0+i*120),
		height/2 + Math.sqrt(3)*r * sin(-30+i*120) + r * sin(0+i*120),
		triR, 180-0, colors
	));
}

/*for(let i = 0; i < triangles.length; i++)
{
	triangles[i].colors = ["#"+Math.round(225/24*i).toString(16)+Math.round(225/24*i).toString(16)+Math.round(225/24*i).toString(16)];
	triangles[i].color = 0;
	if(triangles[i].colors[0] == "#999") triangles[i].colors[0] = "#090909";
	console.log(triangles[i].colors[0]);
}*/

function main()
{
	ctx.fillStyle = "#222222";
	ctx.fillRect(0, 0, width, height);

	for(let t of triangles)
		t.draw();

	requestAnimationFrame(main);
}

requestAnimationFrame(main);

document.addEventListener("click", function(){
	let mouseX = arguments[0].clientX;
	let mouseY = arguments[0].clientY;

	for(let t of triangles)
		t.click(mouseX, mouseY);

	let word = [];
	for(let t of triangles)
		word.push(t.color);
	console.log(word);
	console.log(listToWord(word));
});
