#version 330 core

in vec4 frontColor;
out vec4 fragColor;


uniform vec4 lightPosition; //Posició de la llum (EYE SPACE)

uniform vec4 matAmbient; //Ka
uniform vec4 matDiffuse; //Kd
uniform vec4 matSpecular; //Ks
uniform float matShininess; //S

uniform vec4 lightAmbient; //Ia
uniform vec4 lightDiffuse; //Id
uniform vec4 lightSpecular; //Is


vec3 posgreen = vec3(0.0,10.0,0.0);
vec3 posyellow = vec3(0.0,-10.0,0.0);
vec3 posblau = vec3(10.0,0.0,0.0);
vec3 posvermell = vec3(-10.0,0.0,0.0);

uniform bool rotate;
uniform float time;

vec4 light(vec3 V, vec3 N, vec3 P, vec3 lightPos, vec3 lightColor) {
	const float shininess=100.0;
	const float Kd=0.5;
	N=normalize(N);
	vec3 L=normalize(lightPos-P);
	vec3 R=reflect(-L, N);
	float NdotL=max(0.0, dot(N, L));
	float RdotV=max(0.0, dot(R, V));
	float spec=pow(RdotV, shininess);
	return vec4(Kd*lightColor*NdotL+vec3(spec), 0);
}



void main()
{

	vec4 OBS = modelViewMatrixInverse * vec4(0, 0, 0, 1);
	vec3 V = normalize(OBS.xyz - P);
	vec3 light1 = l1;
	vec3 light2 = l2;
	vec3 light3 = l3;
	vec3 light4 = l4;
	if (rotate) {
		mat3 rot = mat3(
			vec3(cos(time), sin(time), 0),
			vec3(-sin(time), cos(time), 0),
			vec3(0, 0, 1));
		light1 = rot * light1;
		light2 = rot * light2;
		light3 = rot * light3;
		light4 = rot * light4;
	}
	
	vec4 L1 = modelViewMatrixInverse * vec4(light1, 1);
	vec4 L2 = modelViewMatrixInverse * vec4(light2, 1);
	vec4 L3 = modelViewMatrixInverse * vec4(light3, 1);
	vec4 L4 = modelViewMatrixInverse * vec4(light4, 1);
    fragColor = light(V, N, P, L1.xyz, c1)
     + light(V, N, P, L2.xyz, c2)
     + light(V, N, P, L3.xyz, c3)
+ light(V, N, P, L4.xyz, c4);
}
