function setup() {
    // crear el lienzo
    createCanvas(700, 700);
    background('white');
}

function draw() {
    // Posición xy de cada grupo de cuadrados
    var xloc = 20;
    var yloc = 20;
    // Tamaño de un lado del triangulo
    var lado = 20;
    // Posición xy de cada triangulo
    var posx = 0;
    var posy = 0;
    // Tipo de triangulo
    var t = 0;
    // Consecutivo de repetición de un triangulo
    var r = 0;
    
    // Se repiten 4 veces los 4 cuadros para armar la figura
    for (var f = 1; f <= 4; f = f + 1) {     
     // Se dibujan 4 cuadros de la figura
     for (var c = 1; c <= 4; c = c + 1) {
      // Definir colores para el centro
      if (f == 1 && c == 4) {
         fill("orange");
         noStroke();
      } else if (f == 2 && c == 3) {
         fill("orange");
         noStroke();
      } else if (f == 3 && c == 2) {
         fill("orange");
         noStroke();
      } else if (f == 4 && c == 1) {
         fill("orange");
         noStroke();
      }
      else {
         // Definir colores diferentes al centro
         fill(1);
         noStroke();
      }
      // Se ubica la posición xy y el triangulo con que inicia el cuadro 1
      /* 
      Cuadrado 1 con tipo de triangulo:
      1	 1	2	2	1	1	2	2
      1	 2	2	1	1	2	2	1
      2	 2	1	1	2	2	1	1
      2	 1	1	2	2	1	1	2
      1	 1	2	2	1	1	2	2
      1	 2	2	1	1	2	2	1
      2	 2	1	1	2	2	1	1
      2	 1	1	2	2	1	1	2
      */
      if (c == 1) {
         t = 1;
         r = 1;
         posx = xloc;
         posy = yloc;
      }
      // Se ubica la posición xy y el triangulo con que inicia el cuadro 2
      /*
      Cuadrado 2 con tipo de triangulo:
      4	 4	3	3	4	4	3	3
      3	 4	4	3	3	4	4	3
      3	 3	4	4	3	3	4	4
      4	 3	3	4	4	3	3	4
      4	 4	3	3	4	4	3	3
      3	 4	4	3	3	4	4	3
      3	 3	4	4	3	3	4	4
      4	 3	3	4	4	3	3	4
      */
      if (c == 2) {
         t = 4;
         r = 1;
         posx = xloc + lado * 8;
         posy = yloc;
      }
      // Se ubica la posición xy y el triangulo con que inicia el cuadro 3
      /*
      Cuadrado 3 con tipo de triangulo:
      3	 4	4	3	3	4	4	3
      3	 3	4	4	3	3	4	4
      4	 3	3	4	4	3	3	4
      4	 4	3	3	4	4	3	3
      3	 4	4	3	3	4	4	3
      3	 3	4	4	3	3	4	4
      4	 3	3	4	4	3	3	4
      4	 4	3	3	4	4	3	3
      */
      if (c == 3) {
         t = 3;
         r = 2;
         posx = xloc;
         posy = yloc + lado * 8;
      }
      // Se ubica la posición xy y el triangulo con que inicia el cuadro 4
      /*
      Cuadrado 4 con tipo de triangulo:
      1	 2	2	1	1	2	2	1
      2	 2	1	1	2	2	1	1
      2	 1	1	2	2	1	1	2
      1	 1	2	2	1	1	2	2
      1	 2	2	1	1	2	2	1
      2	 2	1	1	2	2	1	1
      2	 1	1	2	2	1	1	2
      1	 1	2	2	1	1	2	2
      */
      if (c == 4) {
         t = 1;
         r = 2;
         posx = xloc + lado * 8;
         posy = yloc + lado * 8;
      }
      // Se guarda triangulo inicial y su repetición para la primera fila
      var ti = t;
      var ri = r;
      // Se guarda posición xy para el primer triangulo de la primera fila
      var posxi = posx;
      var posyi = posy;
      // Pintar las filas de un cuadrado
      for (var y = 0; y < 8; y = y + 1) {
          // Pintar las columnas de cada fila
          for (var x = 0; x < 8; x = x + 1) {
              if (t == 1) {
                 // Se dibuja triangulo |_\
                 triangle(posx,      posy,
                          posx,      posy+lado,
                          posx+lado, posy+lado);
                 // Si ya se repitio 2 veces un triangulo se cambia al otro triangulo
                 if (r == 2) {
                    t = 2;
                 }
              } else if (t == 2) {
                 // Se dibuja triangulo \-|
                 triangle(posx,      posy,
                          posx+lado, posy,
                          posx+lado, posy+lado);
                 // Si ya se repitio 2 veces un triangulo se cambia al otro triangulo
                 if (r == 2) {
                    t = 1;
                 }
              } else if (t == 3) {
                 // Se dibuja triangulo |-/
                 triangle(posx,      posy,
                          posx,      posy+lado,
                          posx+lado, posy);
                 // Si ya se repitio 2 veces un triangulo se cambia al otro triangulo
                 if (r == 2) {
                    t = 4;
                 }
              } else if (t == 4) {
                 // Se dibuja triangulo /_|
                 triangle(posx,      posy+lado,
                          posx+lado, posy,
                          posx+lado, posy+lado);
                 // Si ya se repitio 2 veces un triangulo se cambia al otro triangulo
                 if (r == 2) {
                    t = 3;
                 }
              }
              // Ubicar la posición del siguiente triangulo
              posx = posx + lado;
              // Incrementar repetición entre 1 y 2, para saber cuantos triangulos del mismo se han dibujado
              if (r == 1) {
                 r = 2;
              }
              else {
                 r = 1;
              }
          } // Aqui se termina de dibujar una fila
          // De acuerdo con el tipo de triangulo y la repetición
          // de la fila actual, definir triangulo para iniciar la siguiente fila 
          if (ti == 1) {
             if (ri == 1) {
                // Repetir el mismo triangulo
                t = ti;
                r = 2;
                ri = 2;
             }
             else {
                   // Iniciar con triangulo diferente
                   ti = 2;
                   t = 2;
                   r = 1;
                   ri = 1;
             }
          } else if (ti == 2) {
             if (ri == 1) {
                // Repetir el mismo triangulo
                t = ti;
                r = 2;
                ri = 2;
             }
             else {
                   // Iniciar con triangulo diferente
                   ti = 1;
                   t = 1;
                   r = 1;
                   ri = 1;
             }
          } else if (ti == 3) {
             if (ri == 1) {
                // Iniciar con triangulo diferente
                ti = 4;
                t = 4;
                r = 2;
                ri = 2;
             }
             else {
                // Repetir el mismo triangulo
                t = ti;
                r = 1;
                ri = 1;
             }
          } else if (ti == 4) {
             if (ri == 1) {
                // Iniciar con triangulo diferente
                ti = 3;
                t = 3;
                r = 2;
                ri = 2;
             }
             else {
                // Repetir el mismo triangulo
                t = ti;
                r = 1;
                ri = 1;
             }
          }
          // Ubicar posición X al inicio de la fila
          posx = posxi;
          // Ubicar posición Y en la siguiente fila
          posy = posy + lado;
      } // Aqui se termina de dibujar un cuadrado
     } // Aqui se termina de dibujar los 4 cuadrados
        
     // Ubicar posición inicial para 2do grupo de cuadrados
     if (f == 1) {
        xloc = xloc + lado * 16;
     }
     // Ubicar posición inicial para 3er grupo de cuadrados
     if (f == 2) {
        xloc = xloc - lado * 16;
        yloc = yloc + lado * 16;
     }
     // Ubicar posición inicial para 4to grupo de cuadrados
     if (f == 3) {
        xloc = xloc + lado * 16;
     }
    } // Aqui se finaliza de dibujar los 16 cuadrados
}
