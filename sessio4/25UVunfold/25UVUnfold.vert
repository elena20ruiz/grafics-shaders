#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;

uniform vec2 Min=vec2(-1,-1);
uniform vec2 Max=vec2(1,1);

uniform mat4 modelViewProjectionMatrix;

void main()
{
    frontColor = vec4(color,1.0);

    vec2 esc = abs(Max-Min);
   
    vec2 modelo = 2*(texCoord - Min)/esc;
    modelo.x -= 1.0;
    modelo.y -= 1.0;

    gl_Position = vec4(modelo,0.0, 1.0);
}
