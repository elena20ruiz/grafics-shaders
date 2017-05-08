#version 330 core

in vec4 frontColor;
in vec4 vtexCoord;
out vec4 fragColor;

void main()
{
    float d=length(vec2(vtexCoord.x-0.5, vtexCoord.y-0.5));
    fragColor = vec4(1.0,vec2(step(0.2,d)),1.0);
}
