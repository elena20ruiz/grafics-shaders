#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform float time;
uniform sampler2D sampler;
const float radi = 0.025;
const vec2 eye = vec2(0.45,0.48);
void main()
{ 
  
   if(fract(time) <= 0.5) fragColor = texture(sampler,vtexCoord);
   else {

	if( distance(vtexCoord,eye) < radi) {
		vec2 nou = vtexCoord + vec2(0.057,-0.172); 
		fragColor = texture(sampler,nou);
	}
        else  fragColor = texture(sampler,vtexCoord);
   }
}
