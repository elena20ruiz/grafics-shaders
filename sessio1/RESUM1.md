# Entorn del Viewer

## Variables entrada

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

## Uniforms

**Sobre intercanvi entre espais**

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelViewProjectionMatrix;

uniform mat4 modelMatrixInverse;
uniform mat4 viewMatrixInverse;
uniform mat4 projectionMatrixInverse;
uniform mat4 modelViewMatrixInverse;
uniform mat4 modelViewProjectionMatrixInverse;

**Sobre la llum**

uniform vec4 lightPosition; //Posició de la llum (EYE SPACE)

uniform vec4 matAmbient; //Ka
uniform vec4 matDiffuse; //Kd
uniform vec4 matSpecular; //Ks
uniform float matShininess; //S

uniform vec4 lightAmbient; //Ia
uniform vec4 lightDiffuse; //Id
uniform vec4 lightSpecular; //Is

**Sobre interacció**

uniform vec3 boundingBoxMin; // cantonada mínima de la capsa englobant
uniform vec3 boundingBoxMax; // cantonada màxima de la capsa englobant

uniform vec2 mousePosition;  // coordenades del cursor (window space)
                              // origen a la cantonada inferior esquerra
