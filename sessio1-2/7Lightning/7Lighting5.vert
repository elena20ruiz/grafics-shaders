#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec3 N;
out vec4 P;

uniform mat4 modelViewProjectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;
uniform mat3 normalMatrix;

uniform bool world;

void main()
{

    if(world) {
    	N = normal;
    	P = vec4(vertex , 1.0);
    }
    else {
        N = normalMatrix*normal;
    	P = modelViewMatrix*vec4(vertex , 1.0);
    }
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
