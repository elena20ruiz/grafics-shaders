#version 330 core

in vec4 P;
out vec4 fragColor;

uniform float time;

void main()
{

   // Pasamos a coordenadas NFC
   // Le sumamos 1 para ir de 0 a 2
   float x = P.x / P.w + 1;


   //Velocidad = 1 pixel por segundo
   // Time 0 = No se descarta de -1 a 1 Good
   // Time 1 = posición 0
   // Time 2 = Hasta posición 1
   if (x <= time) fragColor = vec4(0.0,0.0,1.0,1.0);
   else discard;

}
