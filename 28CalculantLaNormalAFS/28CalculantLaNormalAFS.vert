#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;


out vec4 P;
out vec4 frontColor;

uniform mat4 modelViewProjectionMatrix;
uniform mat4 modelViewMatrix;






void main()
{
	//2. Càlcul de la P (EN EYE SPACE)
	P = modelViewMatrix*vec4(vertex,1.0);
    frontColor = vec4(color,1.0);


    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
