var posXbot1 = 20;
var posYbot1 = 20;
var tamBot1 = 20;

var posXbot2 = 50;
var posYbot2 = 20;
var tamBot2 = 20;

var posXbot3 = 80;
var posYbot3 = 20;
var tamBot3 = 20;

var posXbot4 = 110;
var posYbot4 = 20;
var tamBot4 = 20;

var posXbot5 = 140;
var posYbot5 = 20;
var tamBot5 = 20;

var posXbot6 = 170;
var posYbot6 = 20;
var tamBot6 = 20;

var posXbot7 = 200;
var posYbot7 = 20;
var tamBot7 = 20;

var posXbot8 = 230;
var posYbot8 = 20;
var tamBot8 = 20;

var posXbot9 = 260;
var posYbot9 = 20;
var tamBot9 = 20;

var posXbot10 = 290;
var posYbot10 = 20;
var tamBot10 = 20;

var posXbot11 = 320;
var posYbot11 = 20;
var tamBot11 = 20;

var bot = 0;
var col = 0;
var coltexto = "white";

function setup() {
  createCanvas(400, 400);
  background(255);
  textSize(10);
}

function draw() {
  //botones para los colores
  cColor(1);
  rect(posXbot1, posYbot1+tamBot1+5,  tamBot1, tamBot1);
  cColor(2);
  rect(posXbot2, posYbot2+tamBot2+5,  tamBot2, tamBot2);
  cColor(3);
  rect(posXbot3, posYbot3+tamBot3+5,  tamBot3, tamBot3);
  cColor(4);
  rect(posXbot4, posYbot4+tamBot4+5,  tamBot4, tamBot4);
  cColor(5);
  rect(posXbot5, posYbot5+tamBot5+5,  tamBot5, tamBot5);
  cColor(6);
  rect(posXbot6, posYbot6+tamBot6+5,  tamBot6, tamBot6);
  cColor(7);
  rect(posXbot7, posYbot7+tamBot7+5,  tamBot7, tamBot7);
  cColor(8);
  rect(posXbot8, posYbot8+tamBot8+5,  tamBot8, tamBot8);
  cColor(9);
  rect(posXbot9, posYbot9+tamBot9+5,  tamBot9, tamBot9);
  cColor(10);
  rect(posXbot10,posYbot10+tamBot10+5, tamBot10,tamBot10);
  
  //botones para las funciones de dibujo
  cColor(col);
  rect(posXbot1, posYbot1,  tamBot1, tamBot1);
  textBoton("1",coltexto,posXbot1+7,posYbot1+15);
  rect(posXbot2, posYbot2,  tamBot2, tamBot2);
  textBoton("2",coltexto,posXbot2+7,posYbot2+15);
  rect(posXbot3, posYbot3,  tamBot3, tamBot3);
  textBoton("3",coltexto,posXbot3+7,posYbot3+15);
  rect(posXbot4, posYbot4,  tamBot4, tamBot4);
  textBoton("4",coltexto,posXbot4+7,posYbot4+15);
  rect(posXbot5, posYbot5,  tamBot5, tamBot5);
  textBoton("5",coltexto,posXbot5+7,posYbot5+15);
  rect(posXbot6, posYbot6,  tamBot6, tamBot6);
  textBoton("6",coltexto,posXbot6+7,posYbot6+15);
  rect(posXbot7, posYbot7,  tamBot7, tamBot7);
  textBoton("7",coltexto,posXbot7+7,posYbot7+15);
  rect(posXbot8, posYbot8,  tamBot8, tamBot8);
  textBoton("8",coltexto,posXbot8+7,posYbot8+15);
  rect(posXbot9, posYbot9,  tamBot9, tamBot9);
  textBoton("9",coltexto,posXbot9+7,posYbot9+15);
  rect(posXbot10,posYbot10, tamBot10,tamBot10);
  textBoton("10",coltexto,posXbot10+7,posYbot10+15);
  //rectangulo del boton para borrar
  rect(posXbot11, posYbot11, tamBot11, tamBot11);
  
  if (mouseIsPressed) {
    if (bot == 1) {
      ellipse(mouseX, mouseY, 10, 30);
    }
    if (bot == 2) {
      ellipse(mouseX, mouseY, 30, 20);
      line(width/2,height/2,mouseX, mouseY);
    }
    if (bot == 3) {
      //Botón que simula un pincel tipo avanico
      //Lineas que parten del mismo centro
      line(mouseX, mouseY, mouseX - 15, mouseY - 15);
      line(mouseX, mouseY, mouseX + 15, mouseY - 15);
      line(mouseX, mouseY, mouseX     , mouseY - 15);
      line(mouseX, mouseY, mouseX - 7.5, mouseY - 15);
      line(mouseX, mouseY, mouseX + 7.5, mouseY - 15);
      line(mouseX, mouseY, mouseX     , mouseY - 15);
      line(mouseX, mouseY, mouseX - 3.25, mouseY - 15);
      line(mouseX, mouseY, mouseX + 3.25, mouseY - 15);
      line(mouseX, mouseY, mouseX     , mouseY - 15);
      line(mouseX, mouseY, mouseX - 1, mouseY - 15);
      line(mouseX, mouseY, mouseX + 1, mouseY - 15);
      line(mouseX, mouseY, mouseX     , mouseY - 15);
    }
    if (bot == 4) {
   //botón para dibujar montañas
   //Dibujo de cuatro triángulos
   triangle(mouseX, mouseY, mouseX + 15, mouseY + 15, mouseX - 15, mouseY + 15);
   triangle(mouseX, mouseY + 7.5, mouseX + 15, mouseY - 15, mouseX + 30, mouseY + 7.5);
   triangle(mouseX + 15, mouseY + 7.5, mouseX + 30, mouseY + 22.5, mouseX, mouseY + 22.5);
   triangle(mouseX + 15, mouseY + 15, mouseX + 30, mouseY, mouseX + 45, mouseY + 15);
    }
    if (bot == 5) {
      //botón que dibuja un poligono de cuatro lados
      quad(mouseX, mouseY, mouseX+38, mouseY-11, 
           mouseX+31, mouseY+32, mouseX-8, mouseY+35);
    }
    if (bot == 6) {
      //botón circulo entre circulo
    for (var incre = 0; incre < 100; incre = incre + 10) {
    noFill();//Para que se puedan ver las lineas de cada circulo
    ellipse(mouseX, mouseY, 100 - incre);
  }
    } 
       if (bot == 7) {
       //Botón que hace una pequeña curva
       noFill();
       bezier(mouseX, mouseY, mouseX-50, mouseY+20,
              mouseX-50, mouseY+20, mouseX+15, mouseY+80);
    }
    if (bot == 8) {
       //Botón que hace circulos más pequeños o grandes dependiendo de la cercanía con la posición en x
       //Entre más grande la distancia más grande el circulo
       //Entre más pequeña la distancia más pequeño el circulo
       var radius = mouseX/4;
       for (var r = radius; r > 0; --r) {
         ellipse(mouseX, mouseY, r, r);
       }
    }
    if (bot == 9) {
    //Curva con la que se puede dibujar un agujero de gusano
       noFill();
       beginShape();
       curveVertex(mouseX,    mouseY+200);
       curveVertex(mouseX-16, mouseY-20);
       curveVertex(mouseX-60, mouseY-25);
       curveVertex(mouseX-50, mouseY+200);
       endShape();
    }
    if (bot == 10) {
        //Dibujar estrella
       star(mouseX, mouseY, 9, 21, 5);   
    }
    //Si esta dentro de estas coordenadas
    //al presionar el boton pone el fondo de blanco
    if (mouseX > posXbot11 && 
        mouseX < posXbot11+tamBot11 && 
        mouseY > posYbot11 && 
        mouseY < posYbot11+tamBot11) {
      (bot == 11)
    background(255);
    }
    if (mouseX > posXbot1 && 
        mouseX < posXbot1+tamBot1 && 
        mouseY > posYbot1 && 
        mouseY < posYbot1+tamBot1) {
      bot = 1;
      
    }
    if (mouseX > posXbot1 && 
        mouseX < posXbot1+tamBot1  && 
        mouseY > posYbot1+tamBot1+5 && 
        mouseY < posYbot1+tamBot1*2+5) {
      col = 1;
      
      coltexto = "white";
    }
    if (mouseX > posXbot2 && 
        mouseX < posXbot2+tamBot2 && 
        mouseY > posYbot2 && 
        mouseY < posYbot2+tamBot2) {
      bot = 2;
     
    }
    if (mouseX > posXbot2 && 
        mouseX < posXbot2+tamBot2 && 
        mouseY > posYbot2+tamBot2+5 && 
        mouseY < posYbot2+tamBot2*2+5) {
      col = 2;
      
      coltexto = "white";
    }
    if (mouseX > posXbot3 && 
        mouseX < posXbot3+tamBot3 && 
        mouseY > posYbot3 && 
        mouseY < posYbot3+tamBot3) {
      bot = 3;
      background(255);
    }
    if (mouseX > posXbot3 && 
        mouseX < posXbot3+tamBot3 && 
        mouseY > posYbot3+tamBot3+5 && 
        mouseY < posYbot3+tamBot3*2+5) {
      col = 3;
      
      coltexto = "white";
    }
    if (mouseX > posXbot4 && 
        mouseX < posXbot4+tamBot4 && 
        mouseY > posYbot4 && 
        mouseY < posYbot4+tamBot4) {
      bot = 4;
      
    }
    if (mouseX > posXbot4 && 
        mouseX < posXbot4+tamBot4 && 
        mouseY > posYbot4+tamBot4+5 && 
        mouseY < posYbot4+tamBot4*2+5) {
      col = 4;
      
      coltexto = "black";
    }
    if (mouseX > posXbot5 && 
        mouseX < posXbot5+tamBot5 && 
        mouseY > posYbot5 && 
        mouseY < posYbot5+tamBot5) {
      bot = 5;
      
    }
    if (mouseX > posXbot5 && 
        mouseX < posXbot5+tamBot5 && 
        mouseY > posYbot5+tamBot5+5 && 
        mouseY < posYbot5+tamBot5*2+5) {
      col = 5;
      
      coltexto = "white";
    }
    if (mouseX > posXbot6 && 
        mouseX < posXbot6+tamBot6 && 
        mouseY > posYbot6 && 
        mouseY < posYbot6+tamBot6) {
      bot = 6;
      
    }
    if (mouseX > posXbot6 && 
        mouseX < posXbot6+tamBot6 && 
        mouseY > posYbot6+tamBot6+5 && 
        mouseY < posYbot6+tamBot6*2+5) {
      col = 6;
      
      coltexto = "black";
    }
    if (mouseX > posXbot7 && 
        mouseX < posXbot7+tamBot7 && 
        mouseY > posYbot7 && 
        mouseY < posYbot7+tamBot7) {
      bot = 7;
      
    }
    if (mouseX > posXbot7 && 
        mouseX < posXbot7+tamBot7 && 
        mouseY > posYbot7+tamBot7+5 && 
        mouseY < posYbot7+tamBot7*2+5) {
      col = 7;
      
      coltexto = "white";
    }
    if (mouseX > posXbot8 && 
        mouseX < posXbot8+tamBot8 && 
        mouseY > posYbot8 && 
        mouseY < posYbot8+tamBot8) {
      bot = 8;
      
    }
    if (mouseX > posXbot8 && 
        mouseX < posXbot8+tamBot8 && 
        mouseY > posYbot8+tamBot8+5 && 
        mouseY < posYbot8+tamBot8*2+5) {
      col = 8;
      
      coltexto = "white";
    }
    if (mouseX > posXbot9 && 
        mouseX < posXbot9+tamBot9 && 
        mouseY > posYbot9 && 
        mouseY < posYbot9+tamBot9) {
      bot = 9;
      
    }
    if (mouseX > posXbot9 && 
        mouseX < posXbot9+tamBot9 && 
        mouseY > posYbot9+tamBot9+5 && 
        mouseY < posYbot9+tamBot9*2+5) {
      col = 9;
      
      coltexto = "white";
    }
    if (mouseX > posXbot10 && 
        mouseX < posXbot10+tamBot10 && 
        mouseY > posYbot10 && 
        mouseY < posYbot10+tamBot10) {
      bot = 10;
      
    }
    if (mouseX > posXbot10 && 
        mouseX < posXbot10+tamBot10 && 
        mouseY > posYbot10+tamBot10+5 && 
        mouseY < posYbot10+tamBot10*2+5) {
      col = 10;
     
      coltexto = "white";

    }
  }
}
//Función que determina como funcionan los botones de colores
function cColor(numColor) {
    if(numColor == 1){
      fill("gray");
      stroke("gray");
    }
    else if(numColor == 2){
      fill("brown");
      stroke("brown");
    }
    else if(numColor == 3){
      fill("red");
      stroke("red");
    }
    else if(numColor == 4){
      fill("yellow");
      stroke("yellow");
    }
    else if(numColor == 5){
      fill("green");
      stroke("green");
    }
    else if(numColor == 6){
      fill("pink");
      stroke("pink");
    }
    else if(numColor == 7){
      fill("orange");
      stroke("orange");
    }
    else if(numColor == 8){
      fill("lightblue");
      stroke("lightblue");
    }
    else if(numColor == 9){
      fill("black");
      stroke("black");
    }
    else {
      fill("blue");
      stroke("blue");
    }
}
//Función para ponerle los numeros a los botones
function textBoton(texto, color, posX, posY) {
    noFill();
    stroke(color);
    text(texto,posX,posY);
    cColor(col);//Se vuelve a comer el color porque sino el fondo de los botones queda blanco
}
//Función que indica como debe estar la estrella, lo que la conforma
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

}