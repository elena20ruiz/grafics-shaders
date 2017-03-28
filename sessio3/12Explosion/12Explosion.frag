#version 330 core

in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D explosion;

uniform float time;
const float slice = 1/30.0;

void main()
{

    int fact = int(mod(time/slice,48)); //Decideix quin fame es mostra


    float x = mod(fact,8);
    float y = 5 - fact/8;


    vec2 tex = vec2(x/8 + vtexCoord.x/8, y/6 + vtexCoord.y/6);
    

    fragColor = texture(explosion,tex);
    fragColor *= fragColor.a;
}
