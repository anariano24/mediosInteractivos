function setup() {
    // crear el lienzo
    createCanvas(700, 700);
    background('white');
}

function draw() {
    var posx = 20;
    var posy = 20;
    var lado = 20;
    
    drawCuadro1(1, posx, posy, lado);
    drawCuadro1(1, posx, posy+lado*4, lado);
    
    drawCuadro1(1, posx+lado*16, posy, lado);
    drawCuadro1(1, posx+lado*16, posy+lado*4, lado);
    
    drawCuadro1(1, posx, posy+lado*16, lado);
    drawCuadro1(1, posx, posy+lado*20, lado);

    drawCuadro1("orange", posx+lado*16, posy+lado*16, lado);
    drawCuadro1("orange", posx+lado*16, posy+lado*20, lado);

    drawCuadro2(1, posx, posy+lado*8, lado);
    drawCuadro2(1, posx, posy+lado*12, lado);

    drawCuadro2("orange", posx+lado*16, posy+lado*8, lado);
    drawCuadro2("orange", posx+lado*16, posy+lado*12, lado);

    drawCuadro2(1, posx, posy+lado*24, lado);
    drawCuadro2(1, posx, posy+lado*28, lado);

    drawCuadro2(1, posx+lado*16, posy+lado*24, lado);
    drawCuadro2(1, posx+lado*16, posy+lado*28, lado);
    
    drawCuadro3(1, posx+lado*8,  posy, lado);
    drawCuadro3(1, posx+lado*8,  posy+lado*4, lado);
    
    drawCuadro3(1, posx+lado*24,  posy, lado);
    drawCuadro3(1, posx+lado*24,  posy+lado*4, lado);
    
    drawCuadro3("orange", posx+lado*8,  posy+lado*16, lado);
    drawCuadro3("orange", posx+lado*8,  posy+lado*20, lado);
    
    drawCuadro3(1, posx+lado*24,  posy+lado*16, lado);
    drawCuadro3(1, posx+lado*24,  posy+lado*20, lado);
   
    drawCuadro4("orange", posx+lado*8, posy+lado*8, lado);
    drawCuadro4("orange", posx+lado*8, posy+lado*12, lado);
    
    drawCuadro4(1, posx+lado*24, posy+lado*8, lado);
    drawCuadro4(1, posx+lado*24, posy+lado*12, lado);
    
    drawCuadro4(1, posx+lado*8, posy+lado*24, lado);
    drawCuadro4(1, posx+lado*8, posy+lado*28, lado);
    
    drawCuadro4(1, posx+lado*24, posy+lado*24, lado);
    drawCuadro4(1, posx+lado*24, posy+lado*28, lado);
}

function drawCuadro1(color, xloc, yloc, lado) {
    // Definir colores
    fill(color);
    noStroke();
    // Linea 1
    /*
    triangle(  0,  0,   0, 20,  20, 20);
    triangle( 20,  0,  20, 20,  40, 20);
    triangle( 40,  0,  60,  0,  60, 20);
    triangle( 60,  0,  80,  0,  80, 20);
    triangle( 80,  0,  80, 20, 100, 20);
    triangle(100,  0, 100, 20, 120, 20);
    triangle(120,  0, 140,  0, 140, 20);
    triangle(140,  0, 160,  0, 160, 20);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc, xloc,        yloc+lado, xloc+lado,   yloc+lado);
    triangle(xloc+lado,   yloc, xloc+lado,   yloc+lado, xloc+lado*2, yloc+lado);
    triangle(xloc+lado*2, yloc, xloc+lado*3, yloc,      xloc+lado*3, yloc+lado);
    triangle(xloc+lado*3, yloc, xloc+lado*4, yloc,      xloc+lado*4, yloc+lado);
    triangle(xloc+lado*4, yloc, xloc+lado*4, yloc+lado, xloc+lado*5, yloc+lado);
    triangle(xloc+lado*5, yloc, xloc+lado*5, yloc+lado, xloc+lado*6, yloc+lado);
    triangle(xloc+lado*6, yloc, xloc+lado*7, yloc,      xloc+lado*7, yloc+lado);
    triangle(xloc+lado*7, yloc, xloc+lado*8, yloc,      xloc+lado*8, yloc+lado);
    // Linea 2
    /*
    triangle(  0, 20,   0, 40,  20, 40);
    triangle( 20, 20,  40, 20,  40, 40);
    triangle( 40, 20,  60, 20,  60, 40);
    triangle( 60, 20,  60, 40,  80, 40);
    triangle( 80, 20,  80, 40, 100, 40);
    triangle(100, 20, 120, 20, 120, 40);
    triangle(120, 20, 140, 20, 140, 40);
    triangle(140, 20, 140, 40, 160, 40);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc+lado, xloc,        yloc+lado*2, xloc+lado,   yloc+lado*2);
    triangle(xloc+lado,   yloc+lado, xloc+lado*2, yloc+lado,   xloc+lado*2, yloc+lado*2);
    triangle(xloc+lado*2, yloc+lado, xloc+lado*3, yloc+lado,   xloc+lado*3, yloc+lado*2);
    triangle(xloc+lado*3, yloc+lado, xloc+lado*3, yloc+lado*2, xloc+lado*4, yloc+lado*2);
    triangle(xloc+lado*4, yloc+lado, xloc+lado*4, yloc+lado*2, xloc+lado*5, yloc+lado*2);
    triangle(xloc+lado*5, yloc+lado, xloc+lado*6, yloc+lado,   xloc+lado*6, yloc+lado*2);
    triangle(xloc+lado*6, yloc+lado, xloc+lado*7, yloc+lado,   xloc+lado*7, yloc+lado*2);
    triangle(xloc+lado*7, yloc+lado, xloc+lado*7, yloc+lado*2, xloc+lado*8, yloc+lado*2);
    // Linea 3
    /*
    triangle(  0, 40,  20, 40,  20, 60);
    triangle( 20, 40,  40, 40,  40, 60);
    triangle( 40, 40,  40, 60,  60, 60);
    triangle( 60, 40,  60, 60,  80, 60);
    triangle( 80, 40, 100, 40, 100, 60);
    triangle(100, 40, 120, 40, 120, 60);
    triangle(120, 40, 120, 60, 140, 60);
    triangle(140, 40, 140, 60, 160, 60);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc+lado*2, xloc+lado,   yloc+lado*2, xloc+lado,   yloc+lado*3);
    triangle(xloc+lado,   yloc+lado*2, xloc+lado*2, yloc+lado*2, xloc+lado*2, yloc+lado*3);
    triangle(xloc+lado*2, yloc+lado*2, xloc+lado*2, yloc+lado*3, xloc+lado*3, yloc+lado*3);
    triangle(xloc+lado*3, yloc+lado*2, xloc+lado*3, yloc+lado*3, xloc+lado*4, yloc+lado*3);
    triangle(xloc+lado*4, yloc+lado*2, xloc+lado*5, yloc+lado*2, xloc+lado*5, yloc+lado*3);
    triangle(xloc+lado*5, yloc+lado*2, xloc+lado*6, yloc+lado*2, xloc+lado*6, yloc+lado*3);
    triangle(xloc+lado*6, yloc+lado*2, xloc+lado*6, yloc+lado*3, xloc+lado*7, yloc+lado*3);
    triangle(xloc+lado*7, yloc+lado*2, xloc+lado*7, yloc+lado*3, xloc+lado*8, yloc+lado*3);
    // Linea 4
    /*
    triangle(  0, 60,  20, 60,  20, 80);
    triangle( 20, 60,  20, 80,  40, 80);
    triangle( 40, 60,  40, 80,  60, 80);
    triangle( 60, 60,  80, 60,  80, 80);
    triangle( 80, 60, 100, 60, 100, 80);
    triangle(100, 60, 100, 80, 120, 80);
    triangle(120, 60, 120, 80, 140, 80);
    triangle(160, 60, 140, 60, 160, 80);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc+lado*3, xloc+lado,   yloc+lado*3, xloc+lado,   yloc+lado*4);
    triangle(xloc+lado,   yloc+lado*3, xloc+lado,   yloc+lado*4, xloc+lado*2, yloc+lado*4);
    triangle(xloc+lado*2, yloc+lado*3, xloc+lado*2, yloc+lado*4, xloc+lado*3, yloc+lado*4);
    triangle(xloc+lado*3, yloc+lado*3, xloc+lado*4, yloc+lado*3, xloc+lado*4, yloc+lado*4);
    triangle(xloc+lado*4, yloc+lado*3, xloc+lado*5, yloc+lado*3, xloc+lado*5, yloc+lado*4);
    triangle(xloc+lado*5, yloc+lado*3, xloc+lado*5, yloc+lado*4, xloc+lado*6, yloc+lado*4);
    triangle(xloc+lado*6, yloc+lado*3, xloc+lado*6, yloc+lado*4, xloc+lado*7, yloc+lado*4);
    triangle(xloc+lado*8, yloc+lado*3, xloc+lado*7, yloc+lado*3, xloc+lado*8, yloc+lado*4);
}

function drawCuadro2(color, xloc, yloc, lado) {
    // Definir colores
    fill(color);
    noStroke();
    // Linea 1
    /*
    triangle(  0,   0,   0,  20,  20,  0);
    triangle( 20,  20,  40,   0,  40, 20);
    triangle( 40,  20,  60,   0,  60, 20);
    triangle( 60,   0,  60,  20,  80,  0);
    triangle( 80,   0,  80,  20, 100,  0);
    triangle(100,  20, 120,   0, 120, 20);
    triangle(120,  20, 140,   0, 140, 20);
    triangle(140,   0, 140,  20, 160,  0);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc,        xloc,        yloc+lado,   xloc+lado,   yloc);
    triangle(xloc+lado,   yloc+lado,   xloc+lado*2, yloc,        xloc+lado*2, yloc+lado);
    triangle(xloc+lado*2, yloc+lado,   xloc+lado*3, yloc,        xloc+lado*3, yloc+lado);
    triangle(xloc+lado*3, yloc,        xloc+lado*3, yloc+lado,   xloc+lado*4, yloc);
    triangle(xloc+lado*4, yloc,        xloc+lado*4, yloc+lado,   xloc+lado*5, yloc);
    triangle(xloc+lado*5, yloc+lado,   xloc+lado*6, yloc,        xloc+lado*6, yloc+lado);
    triangle(xloc+lado*6, yloc+lado,   xloc+lado*7, yloc,        xloc+lado*7, yloc+lado);
    triangle(xloc+lado*7, yloc,        xloc+lado*7, yloc+lado,   xloc+lado*8, yloc);
    // Linea 2
    /*
    triangle(  0,  20,   0,  40,  20, 20);
    triangle( 20,  20,  20,  40,  40, 20);
    triangle( 40,  40,  60,  20,  60, 40);
    triangle( 60,  40,  80,  20,  80, 40);
    triangle( 80,  20,  80,  40, 100, 20);
    triangle(100,  20, 100,  40, 120, 20);
    triangle(120,  40, 140,  20, 140, 40);
    triangle(140,  40, 160,  20, 160, 40);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc+lado,   xloc,        yloc+lado*2, xloc+lado,   yloc+lado);    
    triangle(xloc+lado,   yloc+lado,   xloc+lado,   yloc+lado*2, xloc+lado*2, yloc+lado);    
    triangle(xloc+lado*2, yloc+lado*2, xloc+lado*3, yloc+lado,   xloc+lado*3, yloc+lado*2);    
    triangle(xloc+lado*3, yloc+lado*2, xloc+lado*4, yloc+lado,   xloc+lado*4, yloc+lado*2);    
    triangle(xloc+lado*4, yloc+lado,   xloc+lado*4, yloc+lado*2, xloc+lado*5, yloc+lado);    
    triangle(xloc+lado*5, yloc+lado,   xloc+lado*5, yloc+lado*2, xloc+lado*6, yloc+lado);    
    triangle(xloc+lado*6, yloc+lado*2, xloc+lado*7, yloc+lado,   xloc+lado*7, yloc+lado*2);    
    triangle(xloc+lado*7, yloc+lado*2, xloc+lado*8, yloc+lado,   xloc+lado*8, yloc+lado*2);  
    // Linea 3
    /*
    triangle(  0,  60,  20,  40,  20,  60);
    triangle( 20,  40,  20,  60,  40,  40);
    triangle( 40,  40,  40,  60,  60,  40);
    triangle( 60,  60,  80,  40,  80,  60);
    triangle( 80,  60, 100,  40, 100,  60);
    triangle(100,  40, 100,  60, 120,  40);
    triangle(120,  40, 120,  60, 140,  40);
    triangle(140,  60, 160,  40, 160,  60);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc+lado*3, xloc+lado,   yloc+lado*2, xloc+lado,   yloc+lado*3);
    triangle(xloc+lado,   yloc+lado*2, xloc+lado,   yloc+lado*3, xloc+lado*2, yloc+lado*2);
    triangle(xloc+lado*2, yloc+lado*2, xloc+lado*2, yloc+lado*3, xloc+lado*3, yloc+lado*2);
    triangle(xloc+lado*3, yloc+lado*3, xloc+lado*4, yloc+lado*2, xloc+lado*4, yloc+lado*3);
    triangle(xloc+lado*4, yloc+lado*3, xloc+lado*5, yloc+lado*2, xloc+lado*5, yloc+lado*3);
    triangle(xloc+lado*5, yloc+lado*2, xloc+lado*5, yloc+lado*3, xloc+lado*6, yloc+lado*2);
    triangle(xloc+lado*6, yloc+lado*2, xloc+lado*6, yloc+lado*3, xloc+lado*7, yloc+lado*2);
    triangle(xloc+lado*7, yloc+lado*3, xloc+lado*8, yloc+lado*2, xloc+lado*8, yloc+lado*3);
    
    // Linea 4
    /*
    triangle(  0,  80,  20,  60,  20,  80);
    triangle( 20,  80,  40,  60,  40,  80);
    triangle( 40,  60,  40,  80,  60,  60);
    triangle( 60,  60,  60,  80,  80,  60);
    triangle( 80,  80, 100,  60, 100,  80);
    triangle(100,  80, 120,  60, 120,  80);
    triangle(120,  60, 120,  80, 140,  60);
    triangle(140,  60, 140,  80, 160,  60);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc+lado*4, xloc+lado,   yloc+lado*3, xloc+lado,   yloc+lado*4);
    triangle(xloc+lado,   yloc+lado*4, xloc+lado*2, yloc+lado*3, xloc+lado*2, yloc+lado*4);
    triangle(xloc+lado*2, yloc+lado*3, xloc+lado*2, yloc+lado*4, xloc+lado*3, yloc+lado*3);
    triangle(xloc+lado*3, yloc+lado*3, xloc+lado*3, yloc+lado*4, xloc+lado*4, yloc+lado*3);
    triangle(xloc+lado*4, yloc+lado*4, xloc+lado*5, yloc+lado*3, xloc+lado*5, yloc+lado*4);
    triangle(xloc+lado*5, yloc+lado*4, xloc+lado*6, yloc+lado*3, xloc+lado*6, yloc+lado*4);
    triangle(xloc+lado*6, yloc+lado*3, xloc+lado*6, yloc+lado*4, xloc+lado*7, yloc+lado*3);
    triangle(xloc+lado*7, yloc+lado*3, xloc+lado*7, yloc+lado*4, xloc+lado*8, yloc+lado*3);
}

function drawCuadro3(color, xloc, yloc, lado) {
    // Definir colores
    fill(color);
    noStroke();
        
    // Linea 1
    /*
    triangle(   0,  20,  20,   0,  20,  20);
    triangle(  20,  20,  40,   0,  40,  20);
    triangle(  40,   0,  40,  20,  60,   0);
    triangle(  60,   0,  60,  20,  80,   0);
    triangle(  80,  20, 100,   0, 100,  20);
    triangle( 100,  20, 120,   0, 120,  20);
    triangle( 120,   0, 120,  20, 140,   0);
    triangle( 140,   0, 140,  20, 160,   0); 
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc+lado, xloc+lado,   yloc,      xloc+lado,   yloc+lado);
    triangle(xloc+lado,   yloc+lado, xloc+lado*2, yloc,      xloc+lado*2, yloc+lado);
    triangle(xloc+lado*2, yloc,      xloc+lado*2, yloc+lado, xloc+lado*3, yloc);
    triangle(xloc+lado*3, yloc,      xloc+lado*3, yloc+lado, xloc+lado*4, yloc);
    triangle(xloc+lado*4, yloc+lado, xloc+lado*5, yloc,      xloc+lado*5, yloc+lado);
    triangle(xloc+lado*5, yloc+lado, xloc+lado*6, yloc,      xloc+lado*6, yloc+lado);
    triangle(xloc+lado*6, yloc,      xloc+lado*6, yloc+lado, xloc+lado*7, yloc);
    triangle(xloc+lado*7, yloc,      xloc+lado*7, yloc+lado, xloc+lado*8, yloc);
    
    // Linea 2
    /*
    triangle(   0,  20,   0,  40,  20,  20);
    triangle(  20,  40,  40,  20,  40,  40);
    triangle(  40,  40,  60,  20,  60,  40);
    triangle(  60,  20,  60,  40,  80,  20);
    triangle(  80,  20,  80,  40, 100,  20);
    triangle( 100,  40, 120,  20, 120,  40);
    triangle( 120,  40, 140,  20, 140,  40);
    triangle( 140,  20, 140,  40, 160,  20);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc+lado, xloc,     yloc+lado*2,      xloc+lado,   yloc+lado);
    triangle(xloc+lado, yloc+lado*2, xloc+lado*2, yloc+lado, xloc+lado*2, yloc+lado*2);
    triangle(xloc+lado*2, yloc+lado*2, xloc+lado*3, yloc+lado, xloc+lado*3, yloc+lado*2);
    triangle(xloc+lado*3, yloc+lado,   xloc+lado*3, yloc+lado*2, xloc+lado*4, yloc+lado);
    triangle(xloc+lado*4, yloc+lado,   xloc+lado*4, yloc+lado*2, xloc+lado*5, yloc+lado);
    triangle(xloc+lado*5, yloc+lado*2, xloc+lado*6, yloc+lado,   xloc+lado*6, yloc+lado*2);
    triangle(xloc+lado*6, yloc+lado*2, xloc+lado*7, yloc+lado, xloc+lado*7, yloc+lado*2);
    triangle(xloc+lado*7, yloc+lado,   xloc+lado*7, yloc+lado*2, xloc+lado*8, yloc+lado);
    
    // Linea 3
    /*
    triangle(   0,  40,   0,  60,  20,  40);
    triangle(  20,  40,  20,  60,  40,  40);
    triangle(  40,  60,  60,  40,  60,  60);
    triangle(  60,  60,  80,  40,  80,  60);
    triangle(  80,  40,  80,  60, 100,  40);
    triangle( 100,  40, 100,  60, 120,  40);
    triangle( 120,  60, 140,  40, 140,  60);
    triangle( 140,  60, 160,  40, 160,  60);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,    yloc+lado*2,     xloc,      yloc+lado*3,      xloc+lado,   yloc+lado*2);
    triangle(xloc+lado, yloc+lado*2,   xloc+lado, yloc+lado*3, xloc+lado*2, yloc+lado*2);
    triangle(xloc+lado*2, yloc+lado*3, xloc+lado*3, yloc+lado*2, xloc+lado*3, yloc+lado*3);
    triangle(xloc+lado*3, yloc+lado*3, xloc+lado*4, yloc+lado*2, xloc+lado*4, yloc+lado*3);
    triangle(xloc+lado*4, yloc+lado*2, xloc+lado*4, yloc+lado*3, xloc+lado*5, yloc+lado*2);
    triangle(xloc+lado*5, yloc+lado*2, xloc+lado*5, yloc+lado*3,   xloc+lado*6, yloc+lado*2);
    triangle(xloc+lado*6, yloc+lado*3, xloc+lado*7, yloc+lado*2, xloc+lado*7, yloc+lado*3);
    triangle(xloc+lado*7, yloc+lado*3, xloc+lado*8, yloc+lado*2, xloc+lado*8, yloc+lado*3);
    // Linea 4
    /*
    triangle(   0,  80,  20,  60,  20,  80);
    triangle(  20,  60,  20,  80,  40,  60);
    triangle(  40,  60,  40,  80,  60,  60);
    triangle(  60,  80,  80,  60,  80,  80);
    triangle(  80,  80, 100,  60, 100,  80);
    triangle( 100,  60, 100,  80, 120,  60);
    triangle( 120,  60, 120,  80, 140,  60);
    triangle( 140,  80, 160,  60, 160,  80);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,    yloc+lado*4,     xloc+lado,      yloc+lado*3,      xloc+lado,   yloc+lado*4);
    triangle(xloc+lado, yloc+lado*3,   xloc+lado, yloc+lado*4, xloc+lado*2, yloc+lado*3);
    triangle(xloc+lado*2, yloc+lado*3, xloc+lado*2, yloc+lado*4, xloc+lado*3, yloc+lado*3);
    triangle(xloc+lado*3, yloc+lado*4, xloc+lado*4, yloc+lado*3, xloc+lado*4, yloc+lado*4);
    triangle(xloc+lado*4, yloc+lado*4,   xloc+lado*5, yloc+lado*3, xloc+lado*5, yloc+lado*4);
    triangle(xloc+lado*5, yloc+lado*3, xloc+lado*5, yloc+lado*4,   xloc+lado*6, yloc+lado*3);
    triangle(xloc+lado*6, yloc+lado*3, xloc+lado*6, yloc+lado*4, xloc+lado*7, yloc+lado*3);
    triangle(xloc+lado*7, yloc+lado*4,   xloc+lado*8, yloc+lado*3, xloc+lado*8, yloc+lado*4);
}
    
    function drawCuadro4(color, xloc, yloc, lado) {
    // Definir colores
    fill(color);
    noStroke();
        
    // Linea 1
    /*
    triangle(   0,  20,   0,   0,  20,  20);
    triangle(  20,   0,  40,   0,  40,  20);
    triangle(  40,   0,  60,   0,  60,  20);
    triangle(  60,   0,  60,  20,  80,  20);
    triangle(  80,   0,  80,  20, 100,  20);
    triangle( 100,   0, 120,   0, 120,  20);
    triangle( 120,   0, 140,   0, 140,  20);
    triangle( 140,   0, 140,  20, 160,  20);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc+lado, xloc,        yloc,      xloc+lado,   yloc+lado);
    triangle(xloc+lado,   yloc,      xloc+lado*2, yloc,      xloc+lado*2, yloc+lado);
    triangle(xloc+lado*2, yloc,      xloc+lado*3, yloc,      xloc+lado*3, yloc+lado);
    triangle(xloc+lado*3, yloc,      xloc+lado*3, yloc+lado, xloc+lado*4, yloc+lado);
    triangle(xloc+lado*4, yloc,      xloc+lado*4, yloc+lado, xloc+lado*5, yloc+lado);
    triangle(xloc+lado*5, yloc,      xloc+lado*6, yloc,      xloc+lado*6, yloc+lado);
    triangle(xloc+lado*6, yloc,      xloc+lado*7, yloc,      xloc+lado*7, yloc+lado);
    triangle(xloc+lado*7, yloc,      xloc+lado*7, yloc+lado, xloc+lado*8, yloc+lado);
        
    // Linea 2
    /*
    triangle(   0,  20,  20,  20,  20,  40);
    triangle(  20,  20,  40,  20,  40,  40);
    triangle(  40,  20,  40,  40,  60,  40);
    triangle(  60,  20,  60,  40,  80,  40);
    triangle(  80,  20, 100,  20, 100,  40);    
    triangle( 100,  20, 120,  20, 120,  40);    
    triangle( 120,  20, 120,  40, 140,  40);
    triangle( 140,  20, 140,  40, 160,  40);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc+lado,      xloc+lado,   yloc+lado,    xloc+lado,   yloc+lado*2);
    triangle(xloc+lado,   yloc+lado,      xloc+lado*2, yloc+lado,    xloc+lado*2, yloc+lado*2);
    triangle(xloc+lado*2, yloc+lado,      xloc+lado*2, yloc+lado*2,  xloc+lado*3, yloc+lado*2);
    triangle(xloc+lado*3, yloc+lado,      xloc+lado*3, yloc+lado*2,  xloc+lado*4, yloc+lado*2);
    triangle(xloc+lado*4, yloc+lado,      xloc+lado*5, yloc+lado,    xloc+lado*5, yloc+lado*2);
    triangle(xloc+lado*5, yloc+lado,      xloc+lado*6, yloc+lado,    xloc+lado*6, yloc+lado*2);
    triangle(xloc+lado*6, yloc+lado,      xloc+lado*6, yloc+lado*2,  xloc+lado*7, yloc+lado*2);
    triangle(xloc+lado*7, yloc+lado,      xloc+lado*7, yloc+lado*2,  xloc+lado*8, yloc+lado*2);
    // Linea 3
    /*
    triangle(   0,  40,  20,  40,  20,  60);
    triangle(  20,  40,  20,  60,  40,  60);
    triangle(  40,  40,  40,  60,  60,  60);
    triangle(  60,  40,  80,  40,  80,  60);
    triangle(  80,  40, 100,  40, 100,  60);    
    triangle( 100,  40, 100,  60, 120,  60);    
    triangle( 120,  40, 120,  60, 140,  60);
    triangle( 140,  40, 160,  40, 160,  60); 
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc+lado*2,      xloc+lado,   yloc+lado*2,   xloc+lado,   yloc+lado*3);
    triangle(xloc+lado,   yloc+lado*2,      xloc+lado,   yloc+lado*3,   xloc+lado*2, yloc+lado*3);
    triangle(xloc+lado*2, yloc+lado*2,      xloc+lado*2, yloc+lado*3,   xloc+lado*3, yloc+lado*3);
    triangle(xloc+lado*3, yloc+lado*2,      xloc+lado*4, yloc+lado*2,   xloc+lado*4, yloc+lado*3);
    triangle(xloc+lado*4, yloc+lado*2,      xloc+lado*5, yloc+lado*2,   xloc+lado*5, yloc+lado*3);
    triangle(xloc+lado*5, yloc+lado*2,      xloc+lado*5, yloc+lado*3,   xloc+lado*6, yloc+lado*3);
    triangle(xloc+lado*6, yloc+lado*2,      xloc+lado*6, yloc+lado*3,   xloc+lado*7, yloc+lado*3);
    triangle(xloc+lado*7, yloc+lado*2,      xloc+lado*8, yloc+lado*2,   xloc+lado*8, yloc+lado*3);
    // Linea 4 
    /*
    triangle(   0,  60,   0,  80,  20,  80);
    triangle(  20,  60,  20,  80,  40,  80);
    triangle(  40,  60,  60,  60,  60,  80);    
    triangle(  60,  60,  80,  60,  80,  80);    
    triangle(  80,  60,  80,  80, 100,  80);    
    triangle( 100,  60, 100,  80, 120,  80);    
    triangle( 120,  60, 140,  60, 140,  80);    
    triangle( 140,  60, 160,  60, 160,  80);
    */
    //triangulos con posicion relativa del punto de inicio
    triangle(xloc,        yloc+lado*3,      xloc,        yloc+lado*4,   xloc+lado,   yloc+lado*4);
    triangle(xloc+lado,   yloc+lado*3,      xloc+lado,   yloc+lado*4,   xloc+lado*2, yloc+lado*4);
    triangle(xloc+lado*2, yloc+lado*3,      xloc+lado*3, yloc+lado*3,   xloc+lado*3, yloc+lado*4);
    triangle(xloc+lado*3, yloc+lado*3,      xloc+lado*4, yloc+lado*3,   xloc+lado*4, yloc+lado*4);
    triangle(xloc+lado*4, yloc+lado*3,      xloc+lado*4, yloc+lado*4,   xloc+lado*5, yloc+lado*4);
    triangle(xloc+lado*5, yloc+lado*3,      xloc+lado*5, yloc+lado*4,   xloc+lado*6, yloc+lado*4);
    triangle(xloc+lado*6, yloc+lado*3,      xloc+lado*7, yloc+lado*3,   xloc+lado*7, yloc+lado*4);
    triangle(xloc+lado*7, yloc+lado*3,      xloc+lado*8, yloc+lado*3,   xloc+lado*8, yloc+lado*4);
}