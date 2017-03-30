#version 330 core

layout (location = 0) in vec3 vertex; //Object SPACE
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;

out vec4 frontColor;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;
uniform mat4 modelViewMatrixInverse;
uniform vec4 lightPosition;

uniform float n = 4;

void main()
{

    //Passar de EYE el lightPosition a OBJECT
    vec4 F = modelViewMatrixInverse* lightPosition;
    vec4 V = vec4(vertex , 1.0);   


    //Calcular distancia V F 
    float d = distance(V, F);
    float w = clamp(1/pow(d,n),0,1); 
    
    vec4 V2 = (1.0 - w)*V + w*F;
    
    frontColor = vec4(normalize(normalMatrix * normal).z);

    gl_Position = modelViewProjectionMatrix * V2;
}
