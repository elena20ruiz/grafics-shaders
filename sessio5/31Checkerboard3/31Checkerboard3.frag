#version 330 core

in vec2 vtexCoord;
out vec4 fragColor;

const vec4 grey = vec4(0.8,0.8,0.8,1.0);
const vec4 black = vec4(0.0,0.0,0.0,1.0);
uniform float n = 8;




void main()
{
    vec2 coord = vtexCoord;

    float fila = fract(coord.x*n);
    float col =  fract(coord.y*n);
    if(fila < 0.1)
       if(col < 0.1) fragColor = grey;
       else fragColor = black;
    else 
       if(col < 0.1) fragColor = black;
       else fragColor = grey;
}

