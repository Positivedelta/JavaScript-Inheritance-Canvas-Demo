class Shape
{
	constructor(name, vertices, canvas)
	{
		this.name = name;
		this.vertices = vertices;
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
	}

	getName()
	{
		return this.name;
	}

	// based on the Gauss "shoelace" formular
	// see, https://www.youtube.com/watch?v=0KjG8Pg6LGk
	//
	getArea()
	{
		console.log("Calling getArea() in Shape");

		// add the initial coordinates to the end of the list
		//
		this.vertices.push(this.vertices[0]);
		this.vertices.push(this.vertices[1]);

		// perform the shoelace calculation
		//
		var sum = 0;
		for (var i = 0; i < this.vertices.length - 2; i += 2)
		{
			sum += (this.vertices[i] * this.vertices[i + 3]) - (this.vertices[i + 2] * this.vertices[i + 1]);
		}

		return sum / 2;
	}

	// draw and caption the shape on the supplied canvas with an (x, y) offset
	//
	drawAt(x, y, caption)
	{
		// to leave space for the caption and shape name
		//
		var shapeOffset = 40;

		// plot the shape using the array of vertices
		//
		this.ctx.beginPath();
		this.ctx.moveTo(x + this.vertices[0], this.canvas.height - (y + shapeOffset + this.vertices[1]));
		for (var i = 2; i < this.vertices.length; i += 2)
		{
			this.ctx.lineTo(x + this.vertices[i], this.canvas.height - (y + shapeOffset + this.vertices[i + 1]));
		}

		this.ctx.lineTo(x + this.vertices[0], this.canvas.height - (y + shapeOffset + this.vertices[1]));
		this.ctx.strokeStyle = '#ff0000';
		this.ctx.stroke();

		// add caption
		//
		this.ctx.font = "12px Arial";
		this.ctx.fillText(caption, x, this.canvas.height - y - 16);
		this.ctx.fillText("Name: " + this.name, x, this.canvas.height - y);
	}
}
