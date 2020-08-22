class Rectangle extends Shape
{
	constructor(vertices, canvas)
	{
		// Note, co-ordinates as below, may be subject to an arbitary rotation
		//
		// (x1, y1)    ---    (x2, y2)
		//
		//   ---                ---
		//
		// (x4, y4)    ---    (x3, y3)
		//
		super("Rectangle", vertices, canvas);
	}

	// override the inherited method and use a specific rectangle formular
	//
	getArea()
	{
		console.log("Calling getArea() in Rectangle");

		// for simplicity use explicit co-ordinates
		//
		var x1 = this.vertices[0], y1 = this.vertices[1],
		    x2 = this.vertices[2], y2 = this.vertices[3],
		    x3 = this.vertices[4], y3 = this.vertices[5],
		    x4 = this.vertices[6], y4 = this.vertices[7],
		    width = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2))),
		    height = Math.sqrt(((x2 - x3) * (x2 - x3)) + ((y2 - y3) * (y2 - y3)));

		return width * height;
	}

	// override the inherited method and efficiently draw a rectangle
	//
	drawAt(x, y, caption)
	{
		// to leave space for the caption and shape name
		//
		var shapeOffset = 40;

		var width = this.vertices[2] - this.vertices[0];
		var height = this.vertices[7] - this.vertices[0];

		// explicitly draw the rectangle
		//
		this.ctx.beginPath();
		this.ctx.rect(x + this.vertices[0], y + shapeOffset + this.vertices[1], width, height);
		this.ctx.strokeStyle = '#ff0000';
		this.ctx.stroke();

		// add caption
		//
		this.ctx.font = "12px Arial";
		this.ctx.fillText(caption, x, this.canvas.height - y - 16);
		this.ctx.fillText("Name: " + this.name, x, this.canvas.height - y);
	}
}
