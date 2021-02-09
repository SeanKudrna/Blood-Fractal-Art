
let showTriangle = true;
let randMode = false;
let count = 0;

//Setup
function setup() {
	alert("Blood Fractal- The symmetry of the recursive triangle yet slight bending of its lines represent the chaotic, organized chaos of nature. The red lines that web from its verticies allow you to create a 3d fractle using the base as your brush, symbolizing how all art stems from the chaos of the world we come from. If you click, the webbing will switch to randomized lines being drawn from the verticies, and the triangle stops wiggling, this is suppose to represent the opposite of the piror mode, unchaotic base, yet chaoic brush, or art that stems from it. Yin and Yang so to speak. The webbing is red, as it represents the boldness of human nature/art. The background is white, as it represents life: or the canvas to be painted, a story to write.");
	background(0);
	createCanvas(windowWidth, windowHeight);
}

//Clear drawing
function mousePressed() {
	clear();
	randMode = !randMode;
  }


//Main
function draw() {
	//stroke(255, 255, 255, length * 8);
	//line((width/4), (height)/2, (width/4 + height/2), height/2, (width/4+height /4), (width/4+height/2));
	recursiveTri(width/4, height, height);
	
    
}

//Triangles/Web
const recursiveTri = (x, y, length) => {
	if (length < 8) {
		return;
	}

	//Wiggle
	let randomVal = Math.floor(Math.random() *15);

	if (randMode)
		randomVal = 0;

	//Opacity of web
	let randomVal2 = Math.floor(Math.random() *30); 

	//Color for triangles
	let colorSchemeT = [[34, 34, 85], [34, 85, 85], [255, 255, 255], [102, 102, 51], [102, 51, 51], [85, 85, 85]];
	let randomColorT= Math.floor(Math.random() * 6);

	let randomValRT = colorSchemeT[randomColorT][0]; 
	let randomValGT = colorSchemeT[randomColorT][1];
	let randomValBT = colorSchemeT[randomColorT][2]; 

	//Color for Web (Random - Streaks)
	let colorSchemeW = [[5, 150, 150], [60, 110, 155], [75, 75,75], [0,0,0]];
	let randomColorW = Math.floor(Math.random() * 4);

	let randomValRW = colorSchemeW[randomColorW][0]; 
	let randomValGW = colorSchemeW[randomColorW][1];
	let randomValBW = colorSchemeW[randomColorW][2]; 


	//Draw triangles
	stroke(randomValRT, randomValGT, randomValBT, length * 8, 0);
	line((x+randomVal), (y+randomVal)/2, (x + length/2), y/2, (x+length /4), (y+length/2));

	//Web at verticies (Random - Streaks)
	if (randMode)
	{
		count ++;
		if (count > 200)
		{
			stroke(randomValRW, randomValGW, randomValBW, 80);
			let randomX = Math.floor(Math.random() * width);
			let randomY = Math.floor(Math.random() * height);
			line((randomX+randomVal), (randomY+randomVal), (x + length/2), y/2, (x+length /4), (y+length/2));
			count = 0;
		}
	}

	else
	{
		//Web at verticies (3D Fractical - Brush)
		stroke(length*4, 10, randomVal2, 80);
		line((mouseX+randomVal), (mouseY+randomVal), (x + length/2), y/2, (x+length /4), (y+length/2));
	}

	//line((mouseX+randomVal), (mouseY+randomVal), (x + length/2), y/2, (x+length /4), (y+length/2));



	//Triangle Math
	let newLength = length / 2;
	
	let xVal1 = x - newLength / 4;
	let yVal1 = y + newLength / 2;
	recursiveTri(xVal1, yVal1, newLength);
	
	let x2 = x + 3 * newLength / 4;
	let y2 = y + newLength / 2;
	recursiveTri(x2, y2, newLength);
	
	let x3 = x + newLength / 4;
	let y3 = y - newLength / 2;
	recursiveTri(x3, y3, newLength);
	};
