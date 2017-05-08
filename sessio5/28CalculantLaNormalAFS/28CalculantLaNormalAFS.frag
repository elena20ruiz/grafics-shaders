#version 330 core

in vec4 P;
in vec4 frontColor;
out vec4 fragColor;

void main()
{

    //Calcul de la normal de la luz
    vec3 x = dFdx(P.xyz);
    vec3 y = dFdy(P.xyz);
    
    //Es el producto vectorial de sus derivadas parciales
    vec3 N = normalize(cross(x,y));


    fragColor = frontColor*N.z;
}
