#version 330 core

in vec4 frontColor;
in vec3 N;
in vec4 P;
in vec3 L;
in vec3 V;

out vec4 fragColor;


uniform vec4 matAmbient; //Ka
uniform vec4 matDiffuse; //Kd
uniform vec4 matSpecular; //Ks
uniform float matShininess; //S

uniform vec4 lightAmbient; //Ia
uniform vec4 lightDiffuse; //Id
uniform vec4 lightSpecular; //Is
uniform vec3 lightPosition; //Posició de la llum (EYE SPACE)



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

    vec3 L = lightPosition.xyz - P.xyz;  //v unitari de la llum
    vec3 V = vec3(0.0,0.0,0.0) - P.xyz;        //v unitari de la camara

    fragColor = Phong(N,L,V);
}
