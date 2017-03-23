#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

void main()
{
	//Iluminació sencila Similar a Lambert
	//1. Normalitza normalMatrix per passar de OS a ES
    vec3 N = normalize(normalMatrix * normal);
	//2. Multiplica per la Z
    frontColor = vec4(color,1.0) * N.z;

    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
