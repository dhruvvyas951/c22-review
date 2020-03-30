//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//variables
var engine, world;
var Box;
var Ground;
var gSlider;
 
 
//setup
function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.World;

    Box = new box(200,300,50,50);
    Ground = new ground(1000,20,500,20);

    // This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    
}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background("black");
    // This is the value of your gravity.
    var fVal = gSlider.value();
    
    Engine.update(engine);
    Box.display();
    Ground.display();
    gSlider.display();

}

    // Create a show method which will draw the box every time it is called inside the draw method.

    this.show = function () {
    }
