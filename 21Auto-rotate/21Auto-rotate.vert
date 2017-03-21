#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform float speed;
uniform float time;

void main()
{

    frontColor = vec4(color,1.0);
    vtexCoord = texCoord;
    float alpha = time*speed;
    
    vec3 v1 = vec3(cos(alpha),0.0, -sin(alpha));
    vec3 v2 = vec3(0,1.0,0);
    vec3 v3 = vec3(sin(alpha),0,cos(alpha));

    mat3 rot = mat3(v1, v2, v3);

    vec3 nou_vertex = rot * vertex.xyz;
  
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(nou_vertex,1);
}
