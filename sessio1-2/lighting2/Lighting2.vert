#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

uniform vec3 lightPosition; //Posició de la llum (EYE SPACE)

uniform vec4 matAmbient; //Ka
uniform vec4 matDiffuse; //Kd
uniform vec4 matSpecular; //Ks
uniform float matShininess; //S

uniform vec4 lightAmbient; //Ia
uniform vec4 lightDiffuse; //Id
uniform vec4 lightSpecular; //Is


out vec4 frontColor;
out vec2 vtexCoord;


uniform mat4 modelViewProjectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;




vec4 Phong(vec3 N, vec3 L, vec3 V) {
	
	N = normalize( N );
	L = normalize( L );
	V = normalize( V );

	vec3 R = 2 * max( 0.0 , dot(N,L) )* N - L; //Reflexió de la llum

	vec4 one = matAmbient * lightAmbient;
	vec4 two = matDiffuse * lightDiffuse * max( 0.0 , dot(N,L) );
	vec4 three = matSpecular * lightSpecular * pow( max(0.0 , dot(R,V) ), matShininess);
	
	return one + two + three;
}


void main()
{
    vec3 N = normalMatrix * normal;
    vec4 P = modelViewMatrix * vec4(vertex , 1.0);

    vec3 L = lightPosition.xyz - P.xyz;  //v unitari de la llum
    vec3 V = vec3(0.0,0.0,0.0) - P.xyz;        //v unitari de la camara

    

    frontColor = vec4(color,0.0)*Phong(N,L,V);
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
