// Cuadros por Segundo
var fr = 50;
// Tamaño del Background X Y
var bgx = 0;
var bgy = 0;
// Posición y tamaño del ovni
var posx = 0;
var posy = 0;
// Posición y tamaño de la casa
var casx = 0;
var casy = 0;
// Posición y tamaño de la nave
var navx = 0;
var navy = 0;
// Altura de la nave
var anav = 0;

function setup() 
{
  // Configurar el tamaño del Canvas
  createCanvas(windowWidth, windowHeight);
  //createCanvas(800, 600);
  bgx = width;
  bgy = height;
  // Posición y tamaño del ovni
  posx = 0;
  posy = bgy*5/100;
  // Posición y tamaño de la casa
  casx = bgx*48.34/100;
  casy = bgy*56/100;
  // Posición y tamaño de la nave
  navx = bgx*20/100;
  navy = bgy*57.5/100;
  anav = (bgy*20/100);

  // Definir tamaño de letra para framecount
  textSize(20);
}

function draw() 
{
  // Establecer cuadros por segundo
  frameRate(fr);

  // Mostrar background
  background('white');
  drawBG();

  // Mover el Ovni
  posx = posx + 1;

  // Mostrar nave
  drawNave(navx, navy);

  // El Ovni sobre la casa
  // Math.ceil redondea los decimales al techo Ej: 1.1 a 2
  if (frameCount > Math.ceil(bgx*41.66/100) && 
      frameCount < Math.ceil(bgx*41.66/100)+10) {  
     if (posx > casx-(bgx*8.33/100)) {
        // Disminuir velocidad de cuadros por segundo
        frameRate(10);
        // Mantener el Ovni en la misma posición
        posx = casx-(bgx*8.33/100);
        // Mostrar la luz
        drawLuz(casx,(posy+(bgy*10/100)));
        // Subir la casa al disminuir posición en y
        if ((casy-(bgy*20/100)) > posy) {
           casy = casy - (bgy*10/100);
        }
        else {
           // Desaparecer la casa
           casy = -(bgy*10/100);
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
  if (frameCount > Math.ceil(bgx*53.33/100) && 
      frameCount < (Math.ceil(bgx*53.33/100)+4) &&
      navy > anav
     ) {
     // Despegar la Nave
     navy = navy - (bgy*15/100);
     fr = 10;
  } else if (frameCount > Math.ceil(bgx*60/100)) {
    // Colocar en movimiento la Nave
    navx = navx + 1;
  }
  // Mostrar el contador de Frames
  fill("black");
  text(frameCount, 0, Math.ceil(bgy*95/100));
  // Parar, llevando a cero los cuadros por segundo
  if (navx > bgx) {
     fr = 0;
  }
  //Selección para impresión de imagenes 
  //1122 corresponde a los frames resultantes de 800*600
  if (frameCount <= 1122) {
    if (frameCount % 6 == 0) {
      //saveCanvas("miFlipbookito" + frameCount, 'jpg');
    }
  }
}

function drawBG() {
  var altorect=1;
//Dibujo del background, efecto degrade
  for(var posy = 0; posy < height; posy=posy+altorect) {      noStroke();
     fill(0, posy, posy);
    rect(0, posy, width, altorect);
  }
  // Definir color de la luna 
  fill(229, 229, 229);
  ellipse((bgx*50/100), (bgy*120/100), (bgx*130/100), bgy);
}
//Dibujo de las figuras que conforman la nave
function drawNave(xloc, yloc) {
    // Definir color
    noStroke();
    fill("orange");
    triangle((xloc+(bgx*1.66/100)),  yloc,
             (xloc+(bgx*1.66/100)),  (yloc+(bgy*5/100)),
             (xloc+(bgx*10/100)),    (yloc+(bgy*5/100)));
    fill("red");
    rect(xloc,yloc+(bgy*5/100),(bgx*16.66/100),(bgy*10/100));
    fill("orange");
    triangle((xloc+(bgx*1.66/100)),  (yloc+(bgy*15/100)),
             (xloc+(bgx*1.66/100)),  (yloc+(bgy*20/100)),
             (xloc+(bgx*10/100)),    (yloc+(bgy*15/100)));
    fill("yellow");
    triangle((xloc+(bgx*10/100)),    (yloc+(bgy*5/100)),
             (xloc+(bgx*13.33/100)), (yloc+(bgy*2.5/100)),
             (xloc+(bgx*16.66/100)), (yloc+(bgy*5/100)));
    fill("red");
    triangle((xloc+(bgx*16.66/100)), (yloc+(bgy*5/100)),
             (xloc+(bgx*23.33/100)), (yloc+(bgy*10/100)),
             (xloc+(bgx*16.66/100)), (yloc+(bgy*15/100)));
}
//Dibujo de las figuras que conforman la nave del ovni
function drawOvni(xloc, yloc) {
    // Definir color
    fill("blue");
    arc((xloc+(bgx*14.33/100)), (yloc+(bgy*12.5/100)), (bgx*13.33/100), (bgy*20/100), PI, TWO_PI);
    fill("green")
    ellipse((xloc+(bgx*13.66/100)), (yloc+(bgy*15/100)), (bgx*27.33/100), (bgy*11/100));
    fill("yellow");
    ellipse((xloc+(bgx*15/100)), (yloc+(bgy*16/100)), (bgx*12.66/100), (bgy*6/100));
}
//Dibujo de las figuras que conforman la luz que se lleva la casa
function drawLuz(xloc, yloc){
  noStroke();
  fill(247, 247, 52, 400);
  triangle(xloc, (yloc+(bgy*50/100)), (xloc+(bgx*3.33/100)), yloc, (xloc+(bgx*3.33/100)), (yloc+(bgy*50/100)));
  rect((xloc+(bgx*3.33/100)), yloc, (bgx*5/100), (bgy*50/100));
  triangle((xloc+(bgx*8.33/100)), yloc, (xloc+(bgx*8.33/100)), (yloc+(bgy*50/100)), (xloc+(bgx*11.66/100)), (yloc+(bgy*50/100)));
}
//Dibujo de las figuras que conforman la casa
function drawCasa(xloc, yloc) {
  noStroke();
  // Chimenea
  fill(1);
  rect((xloc+(bgx*3.33/100)), yloc, (bgx*0.66/100), (bgy*2.5/100));
  // Techo
  fill("brown");
  rect((xloc+(bgx*3.33/100)), (yloc+(bgy*2.5/100)), (bgx*5/100), (bgy*5/100));
  triangle(xloc, (yloc+(bgy*7.5/100)), (xloc+(bgx*3.33/100)), (yloc+(bgy*2.5/100)), (xloc+(bgx*3.33/100)), (yloc+(bgy*7.5/100)));
  triangle((xloc+(bgx*8.33/100)), (yloc+(bgy*2.5/100)), (xloc+(bgx*8.33/100)), (yloc+(bgy*7.5/100)), xloc+(bgx*11.66/100), (yloc+(bgy*7.5/100)));
  // Frente
  fill(86, 68, 33);
  rect((xloc+(bgx*1.66/100)), (yloc+(bgy*7.5/100)), (bgx*8.33/100), (bgy*7.5/100));
  // Ventanas
  fill(25, 163,166);
  rect((xloc+(bgx*2.33/100)), (yloc+(bgy*7.5/100)), (bgx*2/100), (bgy*2/100));
  rect(xloc+(bgx*7/100), (yloc+(bgy*7.5/100)), (bgx*2/100), (bgy*2/100));
  // Puerta de casa
  fill(239, 190, 94);
  rect((xloc+(bgx*5/100)), (yloc+(bgy*10/100)), (bgx*1.66/100), (bgy*4.5/100));
}
