#version 330 core

in vec2 vtexCoord;

out vec4 fragColor;

uniform vec3 boundingBoxMax;
uniform vec3 boundingBoxMin;

uniform vec4 grey = vec4(0.8,0.8,0.8,1.0);
uniform vec4 black = vec4(0.0,0.0,0.0,1.0);
void main()
{
    // Modificaremos según texturas de coordenadas que van de [0,1]
    vec2 coord = vtexCoord;

    int fila = int(floor(coord.x*8/1));
    int col =  int(floor(coord.y*8/1)); 

    if(mod(fila , 2) == mod(col,2)) fragColor = grey;
       else fragColor = black;

}
