#version 330 core

in vec3 N;
in vec4 P;
out vec4 fragColor;


uniform vec4 lightPosition; //Posició de la llum (EYE SPACE)

uniform vec4 matAmbient; //Ka
uniform vec4 matDiffuse; //Kd
uniform vec4 matSpecular; //Ks
uniform float matShininess; //S

uniform vec4 lightAmbient; //Ia
uniform vec4 lightDiffuse; //Id
uniform vec4 lightSpecular; //Is


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

    vec3 L;
	if (lightPosition.w == 1) L = lightPosition.xyz - P.xyz;
	else L = lightPosition.xyz;

    fragColor = BlinnPhong(N,P.xzy,L);
}
