#version 330 core

in vec2 vtexCoord;

out vec4 fragColor;

uniform vec3 boundingBoxMax;
uniform vec3 boundingBoxMin;

uniform vec4 grey = vec4(0.8,0.8,0.8,1.0);
uniform vec4 black = vec4(0.0,0.0,0.0,1.0);
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

    int fila = int(fract(coord.x)*8);
    int col =  int(fract(coord.y)*8); 

    if(mod(fila , 2) == mod(col,2)) fragColor = grey;
       else fragColor = black;

}
