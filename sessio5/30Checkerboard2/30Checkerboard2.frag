#version 330 core

in vec2 vtexCoord;
out vec4 fragColor;

const vec4 grey = vec4(0.8,0.8,0.8,1.0);
const vec4 black = vec4(0.0,0.0,0.0,1.0);
uniform float n = 8;

void main()
{
    // [0][0] -> Cel·la 0
    // [0][1/8] -> Cel·la 1
    // [0][1/16] -> Cel·la 2

    //Si fila par i col par -> BLANC
    //Si fila par i col par -> NEGRE
    //Si fila impar i col par -> BLANC  
    //Si fila impar i col impar -> BLANC  

    vec2 coord = vtexCoord;

    int fila = int(floor(coord.x*n));
    int col =  int(floor(coord.y*n)); 

    if(mod(fila , 2) == mod(col,2)) fragColor = grey;
       else fragColor = black;
}
