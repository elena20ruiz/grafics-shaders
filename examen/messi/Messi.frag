#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D colorMap;
uniform float time;

const vec2 C = vec2(0.272,0.09);
const float radi = 0.065;

void main()
{   
    vec2 d = vec2(time,0);
    vec2 Cnou = C + d;

    vec2 nouV = vtexCoord;

    if (distance(vtexCoord,Cnou) < radi) nouV.x -= time; 
    else if(distance(vtexCoord,C) < radi) nouV.x += 0.5;
    fragColor = texture(colorMap,nouV);
}
