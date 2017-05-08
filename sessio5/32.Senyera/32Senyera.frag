#version 330 core

in vec2 vtexCoord;
out vec4 fragColor;

const float a = 1/9;
const vec4 vermell = vec4(1.0,0.0,0.0,1.0);
const vec4 groc = vec4(1.0,1.0,0.0,1.0);

void main()
{
	

    float a = 1/9;

    //Al multiplicar por nueve se le quita la parte fraccionaria
    //Se usa la función fract para coger la parte decimal que contrarestar
    float col = int(fract(vtexCoord.s)*9);

    if(mod(col,2) == 0) fragColor = groc;
    else fragColor = vermell;
    
}
