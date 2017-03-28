#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;


uniform vec4 lightPosition; //Posició de la llum (EYE SPACE)

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




vec4 BlinnPhong( vec3 N, vec3 P, vec3 L)  {
	N = normalize( N );
	P = normalize( P );
	L = normalize( L );

	vec3 H = vec3(0.0,0.0,0.0)- P;
	
	vec4 one = matAmbient * lightAmbient;
	vec4 two = matDiffuse * lightDiffuse * max( 0.0 , dot(N,L) );	
	vec4 three = matSpecular*lightSpecular * pow( max( 0.0, dot( N, H )), matShininess);

	return (one + two + three);
}

void main()
{
	//1. Càlcul de la N
	vec3 N = normalMatrix * normal;

	//2. Càlcul de la P (EN EYE SPACE)
	vec4 P = modelViewMatrix*vec4(vertex,1.0);

	//3. Càlcul de la L
	vec3 L;
	if (lightPosition.w == 1) L = lightPosition.xyz - P.xyz;
	else L = lightPosition.xyz;
		

	frontColor = vec4(0.7,0.0,0.7,1.0)*BlinnPhong(N,P.xyz,L);


    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
