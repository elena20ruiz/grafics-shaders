#version 330 core

in vec4 frontColor;
in vec3 N;
in vec4 P;

out vec4 fragColor;


uniform vec4 matAmbient; //Ka
uniform vec4 matDiffuse; //Kd
uniform vec4 matSpecular; //Ks
uniform float matShininess; //S

uniform vec4 lightAmbient; //Ia
uniform vec4 lightDiffuse; //Id
uniform vec4 lightSpecular; //Is
uniform vec3 lightPosition; //Posició de la llum (EYE SPACE)

uniform mat4 modelViewMatrixInverse;

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

uniform bool world;

vec4 light(vec3 N, vec3 V, vec3 L)
{
	N=normalize(N); 
        V=normalize(V); 
        L=normalize(L);
	vec3 R = normalize( 2.0*dot(N,L)*N-L );
	float NdotL = max( 0.0, dot( N,L ) );
	float RdotV = max( 0.0, dot( R,V ) );
	float Idiff = NdotL;
	float Ispec = 0;

	if (NdotL>0) Ispec=pow( RdotV, matShininess );
		return	matAmbient * lightAmbient +
		matDiffuse * lightDiffuse * Idiff+
		matSpecular * lightSpecular * Ispec;
}



void main()
{
    if(world) {
        vec4 light = modelViewMatrixInverse * lightPosition;
        vec3 L = light.xyz - P;  //v unitari de la llum
        vec4 puntIni = modelViewMatrixInverse*vec4(0.0,0.0,0.0,1.0);
        vec3 V = puntIni.xyz - P.xyz;  //v unitari de la camara
    }
    else {
           vec3 L = lightPosition.xyz - P.xyz;  //v unitari de la llum
           vec3 V = vec3(0.0,0.0,0.0) - P.xyz;  //v unitari de la camara
    }

  

    fragColor = light(N,L,V);
}
