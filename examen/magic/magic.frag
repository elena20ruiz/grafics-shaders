#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
in vec3 N;
out vec4 fragColor;

uniform sampler2D window;
uniform sampler2D interior1;
uniform sampler2D exterior2;


void main()
{
    vec2 nouT;
    vec4 C = texture(window,vtexCoord);

    if(C.z == 1.0) fragColor = C;

    else if(C.z < 1.0)  {
	nouT = vtexCoord + 0.5*N.xy;
    	vec4 D = texture(interior1,nouT);
	if(D == 1.0) fragColor = D;
	else {
        	nouT = vtexCoord + 0.7*N.xy;
		fragColor = texture(exterior2, nouT);
        } 
     }
}
