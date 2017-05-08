#version 330 core

in vec2 vtexCoord;
out vec4 fragColor;

const vec4 white = vec4(1.0);
const vec4 red = vec4(1.0,0.0,0.0,1.0);

uniform bool classic = TRUE;
const float PI = 3.14159;
void main()
{
    vec2 centre = vec2(0.5,0.5);

    float d = distance(vtexCoord,centre);
     //Si no cumple step se pone a "1" 
     //por tanto acaba poniendo el color blanco
    if(d < 0.2) fragColor = vec4(1.0, step(0.2, d), step(0.2, d), 1);
    else if (classic) fragColor = white;
    else if (!classic) {
      vec2 vector = vtexCoord - centre;
      float ang = atan(vector.y,vector.x);
      if( mod(ang/(PI/16) + 0.5, 2) < 1) fragColor = red;
      else fragColor = white;
    }

    

}
