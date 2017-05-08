#version 330 core

in vec4 frontColor;
in vec3 N;
in vec3 PV;
out vec4 fragColor;

uniform mat4 modelViewMatrixInverse;

uniform mat3 normalMatrix;

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


//1. Calcul a OBJECT SPACE


    //vec3 N = normalMatrix * normal;
    //vec4 P = modelViewMatrix * vec4(vertex , 1.0);

    //vec3 L = lightPosition.xyz - P.xyz;  //v unitari de la llum
    //vec3 V = vec3(0.0,0.0,0.0) - P.xyz;        //v unitari de la camara

    





void main()
{ 

     vec4 l1,l2,l3,l4;
     vec3 vertex = PV;


     if(rotate) {
        vec3 x = vec3(cos(time),sin(time),0);
        vec3 y = vec3(-sin(time), cos(time), 0);
        vec3 z = vec3(0,0,1);
        mat3 rot = mat3(x,y,z);
        posgreen = rot*posgreen;
        posyellow = rot*posyellow;
        posblau = rot*posblau;
        posvermell = rot*posvermell;
     }



    //1. Calcular la normal al framento -> (N)
	vec3 N = normalMatrix*N;
    //2. P posicio fragment en object space -> P V
    //3. Vector unitario camara(L) -> (V)
        //V= observador - P (en object space)
        vec4 obs = modelViewMatrixInverse*vec4(0,0,0,1.0);
        vec3 V = normalize(obs.xyz - vertex);

    //4. Les llums esta en EYE space pero les volem en object
        l1 = modelViewMatrixInverse*vec4(posgreen,1.0);
        l2 = modelViewMatrixInverse*vec4(posyellow,1.0);
        l3 = modelViewMatrixInverse*vec4(posblau,1.0);
        l4 = modelViewMatrixInverse*vec4(posvermell,1.0);

        fragColor = light(V,N,vertex,l1.xyz,vec3(0.0,1.0,0.0)) + 
		    light(V,N,vertex,l2.xyz,vec3(1.0,1.0,0.0)) +
		    light(V,N,vertex,l3.xyz,vec3(0.0,0.0,1.0)) +
		    light(V,N,vertex,l4.xyz,vec3(1.0,0.0,0.0));

}
