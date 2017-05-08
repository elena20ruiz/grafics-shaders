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
    float dim =  boundingBoxMax.y - boundingBoxMin.y;
    float dist = vertex.y - boundingBoxMin.y;

    float fact = 4 * dist/dim; // Intervalo [0,1]

    //Maximo cuando minY=vertex.y
    //Minimo cuando maxY=vertex.y

    if (fact < 1) frontColor = vec4(mix (r, y, fract(fact)),1.0);
    else if (fact < 2) frontColor = vec4(mix (y, g, fract(fact)), 1.0);
    else if (fact < 3) frontColor = vec4(mix (g, c, fract(fact)), 1.0);
    else if (fact < 4) frontColor = vec4(mix ( c, b , fract(fact)), 1.0);
    else frontColor = vec4(b,1.0);
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
