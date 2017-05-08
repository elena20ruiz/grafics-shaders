#version 330 core

in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D explosion;

uniform float time;
const float slice = 1/30.0;

void main()
{
    //Decideix quin fame es mostra
    //Time de 0 fins 48 amb la velocitat de slice

    float fact = mod(time/slice,48);  

    //Calcul x
    float x = mod(fact,8);
    //Calcul y
    float y =  fact/8;

   //Offset
   float s = 1.0/8.0;
   float t = 1.0/6.0;
   vec2 offset = vec2(x*s, t*y);

    //Calcul de la coordenada de la nostra textura 
    vec2 tex = vec2(vtexCoord.x+s*x, vtexCoord.y+t*y);
    
    fragColor = texture(explosion,tex);
    
    //HO DEMANEN 
    fragColor *= fragColor.a;
}
