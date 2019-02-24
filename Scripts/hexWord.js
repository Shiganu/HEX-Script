
function HexWord(x, y, r, tr, colors)
{
    this.pos = [x, y];
    this.r = r;
    this.triR = tr;
    this.colors = colors;
    this.color = this.colors.length-1;

    this.triangles = [];

    for(let i = 0; i < 3; i++)
    {
        let aa = -90 + i*120;

        for(let a = -60; a < 300; a += 60)
            this.triangles.push(new Triangle(
                this.pos[0]  + Math.sqrt(3)*this.r * cos(aa) + this.r * cos(a),
                this.pos[1] + Math.sqrt(3)*this.r * sin(aa) + this.r * sin(a),
                this.triR, 180-a, this.colors
            ));

        this.triangles.push(new Triangle(
            this.pos[0]  + Math.sqrt(3)*this.r * cos(-30+i*120) + this.r * cos(-60+i*120),
            this.pos[1] + Math.sqrt(3)*this.r * sin(-30+i*120) + this.r * sin(-60+i*120),
            this.triR, 180-60, this.colors
        ));

        this.triangles.push(new Triangle(
            this.pos[0]  + Math.sqrt(3)*this.r * cos(-30+i*120) + this.r * cos(0+i*120),
            this.pos[1] + Math.sqrt(3)*this.r * sin(-30+i*120) + this.r * sin(0+i*120),
            this.triR, 180-0, this.colors
        ));
    }

    this.draw = function()
    {
        for(let t of this.triangles)
            t.draw();
    };

    this.click = function(x, y)
    {
        for(let t of this.triangles)
            t.click(x, y);
    };

    this.getWord = function()
    {
        let word = [];
        for(let t of this.triangles)
            word.push(t.color);
        return word;
    };

    this.loadWord = function(word)
    {
        let list = wordToList(word);
        for(let i = 0; i < this.triangles.length; i++)
            this.triangles[i].color = list[i];
    };
}
