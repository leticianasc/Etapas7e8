/* Leticia Nascimento de Oliveira e Brunca Caroliny Custodio da Silva - Subturma A
*/

var x = 27;


var y = 470;


var xd = 0;


var yd = 0;


var raioP = 25;


var raioO = 30;


var vidas = 3;


var pontos = 0;


var nivel = 1;


var estadoDisparo = false;


var xo = 100;


var yo = 120;


var vx = []


var vy = []


var tam = 5

;
var vt = []


var bar = 1000


;
function setup() {
  

createCanvas(500, 500);


for(var i = 0; i < tam; i++){

vx[i] = random(0,400)

vy[i] = random(0,400)

vt[i] = random(4, 50)

}

}


function draw() {
  

background(270,66,60);

pontos = pontos + 10
;
if (pontos > bar) {
  
nivel++
  bar = bar + 1000
;
}


for(var i = 0; i < tam; i++){

circle(vx[i], vy[i], vt[i], vt[i]);

}
  

if (keyIsDown(LEFT_ARROW)){
    

x-=5;
  

}  

  

if (keyIsDown(RIGHT_ARROW)){
    

x+=5;
  

}  

  

if (keyIsDown(UP_ARROW)){
    

y-=5;
  

}  

  

if (keyIsDown(DOWN_ARROW)){
    

y+=5;
  

}
  

ellipse(x, y, 2*raioP, 2*raioP);


if (x > 500 ){
    

x = -random(68);
   

}  

  


if (keyIsDown(CONTROL) && ! estadoDisparo){
   
 
xd = x;
    

yd = y;
    

estadoDisparo = true;
  

}  
  
if(estadoDisparo){
    

ellipse(xd, yd, 9, 9);
    

yd = yd - 10;
    
if(yd < 0){

estadoDisparo = false;
    

}  
  

} 
  

fill(0, 0, 0);
  

textSize(18);
  

text('Vidas: '+vidas, 20, 30);
  

text('Pontos: '+pontos, 200, 30);
  

text('Nível: '+nivel, 420, 30);
 
 
ellipse(xo,yo, 50, 50);
  

if(dist(x, y, xo, yo) < raioP + raioO){
    

x = 27;
   
 
y = 470;
 
  

}
  


}
