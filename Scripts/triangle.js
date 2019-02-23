
function Triangle(x, y, s, a, colors)
{
	this.pos = [x, y];
	this.r = s;
	this.angle = a;
	this.colors = colors;
	this.color = this.colors.length-1;

	this.draw = function()
	{
		ctx.fillStyle = this.colors[this.color % this.colors.length];
		ctx.beginPath();
		ctx.moveTo(this.pos[0] + this.r * cos(this.angle    ), this.pos[1] + this.r * sin(this.angle    ));
		ctx.lineTo(this.pos[0] + this.r * cos(this.angle+120), this.pos[1] + this.r * sin(this.angle+120));
		ctx.lineTo(this.pos[0] + this.r * cos(this.angle+240), this.pos[1] + this.r * sin(this.angle+240));
		ctx.fill();
	};

	this.click = function(x, y)
	{
		if(dist(x, y, this.pos[0] + this.r * cos(this.angle    ), this.pos[1] + this.r * sin(this.angle    )) < 1.5*this.r
		&& dist(x, y, this.pos[0] + this.r * cos(this.angle+120), this.pos[1] + this.r * sin(this.angle+120)) < 1.5*this.r
		&& dist(x, y, this.pos[0] + this.r * cos(this.angle+240), this.pos[1] + this.r * sin(this.angle+240)) < 1.5*this.r)
			this.color = (this.color+1) % this.colors.length;
	};
}
