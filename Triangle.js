class Triangle extends Shape
{
	constructor(vertices, canvas)
	{
		super("Triangle", vertices, canvas);
	}

	// override the inherited method and use a specific triangle formular
	//
	getArea()
	{
		console.log("Calling getArea() in Triangle");

		// for simplicity use explicit co-ordinates
		//
		var x1 = this.vertices[0], y1 = this.vertices[1],
		    x2 = this.vertices[2], y2 = this.vertices[3],
		    x3 = this.vertices[4], y3 = this.vertices[5];

		return (((x2 - x1) * (y3 - y1)) - ((x3 - x1) * (y2 - y1))) / 2;
	}
}
