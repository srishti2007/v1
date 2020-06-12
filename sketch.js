var canvas;
var database;
var form;
var user;
function setup(){

  canvas = createCanvas(900, 600);

  database = firebase.database();

  form = new Form(0, 0, 0, 0);
  user = new User(0, 0, 0, 0);
}

function draw(){
  
  background(215, 17, 255);
  form.display();
}