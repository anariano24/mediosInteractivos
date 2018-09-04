// Cuadros por Segundo
var fr = 50;
// Tamaño del Background X Y
var bgx = 300;
var bgy = 200;
// Posición y tamaño del ovni
var posx = 0;
var posy = 10;
// Posición y tamaño de la casa
var casx = 145;
var casy = 110;
// Posición y tamaño de la nave
var navx = 60;
var navy = 115;

function setup() 
{
  // Configurar el tamaño del Canvas
  createCanvas(bgx, bgy);
  // Definir tamaño de letra para framecount
  textSize(20);
}
 
function draw() 
{
  // Establecer cuadros por segundo
  frameRate(fr);

  // Mostrar background
  background('white');
  drawBG(bgx,bgy);

  // Mover el Ovni
  posx = posx + 1;
    
  // Mostrar nave
  drawNave(navx, navy);
  
  // El Ovni sobre la casa
  if (frameCount > 125 && frameCount < 135) {  
     if (posx > casx-25) {
        // Disminuir velocidad de cuadros por segundo
        frameRate(5);
        // Mantener el Ovni en la misma posición
        posx = casx-25;
        // Mostrar la luz
        drawLuz(casx,posy+20);
        // Subir la casa al disminuir posición en y
        if ((casy-40) > posy) {
           casy = casy - 20;
        }
        else {
           // Desaparecer la casa
           casy = -20;
        }
     }
  }
  else {
     // Establecer cuadros por segundo
     fr = 50;
  }
  // Mostrar Ovni
  drawOvni(posx, posy);

  if (casy > 0) {
     // Mostrar Casa
     drawCasa(casx, casy);
  }
  
  // Cuando se llevan la casa
  if (frameCount > 200 && frameCount < 204) {
     // Despegar la Nave
     navy = navy - 30;
     fr = 5;
  } else if (frameCount > 204) {
    // Colocar en movimiento la Nave
    navx = navx + 1;
  }
  // Mostrar el contador de Frames
  fill("black");
  text(frameCount, bgx-50, bgy-10);
  // Parar, llevando a cero los cuadros por segundo
  if (navx > bgx) {
     fr = 0;
  }
}

function drawBG(ancho,alto) {
  var altorect=1;

  for(var posy = 0; posy < height; posy=posy+altorect) {      noStroke();
     fill(0, posy, posy);
    rect(0, posy, width, altorect);
  }
  // Definir color
  fill(229, 229, 229);
  ellipse(150, 240, 400, 200);
}

function drawNave(xloc, yloc) {
    // Definir color
    noStroke();
    fill("orange");
    triangle(xloc+5,  yloc,
             xloc+5,  yloc+10,
             xloc+30, yloc+10);
    fill("red");
    rect(xloc,yloc+10,50,20);
    fill("orange");
    triangle(xloc+5,  yloc+30,
             xloc+5,  yloc+40,
             xloc+30, yloc+30);
    fill("yellow");
    triangle(xloc+30, yloc+10,
             xloc+40, yloc+5,
             xloc+50, yloc+10);
    fill("red");
    triangle(xloc+50, yloc+10,
             xloc+70, yloc+20,
             xloc+50, yloc+30);
}

function drawOvni(xloc, yloc) {
    // Definir color
    fill("blue");
    arc(xloc+43, yloc+25, 40, 40, PI, TWO_PI);
    fill("green")
    ellipse(xloc+41, yloc+30, 82, 22);
    fill("yellow");
    ellipse(xloc+45, yloc+32, 38, 12);
}

function drawLuz(xloc, yloc){
  noStroke();
  fill(247, 247, 52, 400);
  triangle(xloc, yloc+100, xloc+10, yloc, xloc+10, yloc+100);
  rect(xloc+10, yloc, 15, 100);
  triangle(xloc+25, yloc, xloc+25, yloc+100, xloc+35, yloc+100);
}

function drawCasa(xloc, yloc) {
  noStroke();
  // Chimenea
  fill(1);
  rect(xloc+10, yloc, 2, 5);
  // Techo
  fill("brown");
  rect(xloc+10, yloc+5, 15, 10);
  triangle(xloc, yloc+15, xloc+10, yloc+5, xloc+10, yloc+15);
  triangle(xloc+25, yloc+5, xloc+25, yloc+15, xloc+35, yloc+15);
  // Frente
  fill(86, 68, 33);
  rect(xloc+5, yloc+15, 25, 15);
  // Ventanas
  fill(25, 163,166);
  rect(xloc+7, yloc+15, 6, 4);
  rect(xloc+21, yloc+15, 6, 4);
  // Puerta de casa
  fill(239,190, 94);
  rect(xloc+15, yloc+20, 5, 9);
}