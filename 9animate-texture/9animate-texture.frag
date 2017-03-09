#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D colorMap;
uniform float time;
uniform float speed=2;

void main()
{
   fragColor = frontColor*texture(colorMap,vtexCoord)*vec4(0.5*(sin(2*speed*time)+1.0));

}
