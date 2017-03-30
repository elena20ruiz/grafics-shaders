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

    int fact = int(mod(time/slice,48)); 

    // x va de 0 a 7
    float x = mod(fact,8);
    // y va de
    float y =  5 - floor(fact/8);

    //Calcul de la coordenada de la nostra textura 
    vec2 tex = vec2(x/8 + vtexCoord.x/8, y/6 + vtexCoord.y/6);
    
    fragColor = texture(explosion,tex);
    
    //HO DEMANEN 
    fragColor *= fragColor.a;
}
