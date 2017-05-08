#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform vec3 boundingBoxMin;
uniform vec3 boundingBoxMax;
uniform mat4 modelViewProjectionMatrix;

vec3 r, g, b , y, c;

void main()
{
    // Colores 
    r = vec3(1.0, 0, 0);
    g = vec3(0, 1.0, 0);
    b = vec3(0, 0, 1.0);
    c = vec3(0,1.0,1.0); 
    y = vec3(1.0,1.0,0);
   
    //Proporciones
    vec4 V = modelViewProjectionMatrix * vec4(vertex, 1.0);
    float fact = 2*(V.y / V.w) + 2;  // Intervalo [-2,2]

    vec3 inter;    

    if (fact == 0) inter = r;
    else if (fact < 1) inter = mix (r, y, fract(fact));
    else if (fact < 2) inter = mix (y, g, fract(fact));
    else if (fact < 3) inter = mix (g, c, fract(fact));
    else if (fact < 4) inter = mix ( c, b , fract(fact));
    else inter = b;
    frontColor = vec4(inter,1.0);
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);

}
