#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

uniform float amplitude=0.1;
uniform float freq = 1;
uniform float time;
const float PI = 3.14;
 

void main()
{
    vec3 N = normalize(normalMatrix * normal);
    frontColor = vec4(N.z);
//    vtexCoord = vec2();
	float val = 1+amplitude*(sin(2*PI*freq*time));
	gl_Position = modelViewProjectionMatrix * vec4(vertex*val, 1.0);

}
