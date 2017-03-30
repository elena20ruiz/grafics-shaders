// these lines enable the geometry shader support.
#version 120
#extension GL_EXT_geometry_shader4 : enable

uniform float time;

const vec3 gravity = vec3(0.0, -9.8, 0.0);
uniform float speed;	// eg. 2.0 (glass.obj)

float timeToNextCollision(float y0, float v0, float g)
{
	// Solve for t: 0.5*Gravity.y*t^2 + vel.y*t + center.y = 0
	float a = 0.5*g;
	float b = v0;
	float c = y0;
	return (-b-sqrt(b*b-4.0*a*c))/(2.0*a); 
} 

vec3 computeTrans(vec3 r0, vec3 v0, vec3 g, float t)
{
    const int MAX_ITER = 30; // max bounces
	vec3 accum = vec3(0.0); 
	float t0 = timeToNextCollision(r0.y, v0.y, g.y);
	int i=0;
	while (t > t0 && i<MAX_ITER)
	{	
		++i;
		accum += v0*t0 + 0.5*g*t0*t0;
		t-=t0;
		v0=reflect(v0, vec3(0.0, 1.0, 0.0));
		r0 = vec3(0.0);
		t0 = timeToNextCollision(r0.y, v0.y, g.y);
	}
	if (i<MAX_ITER) accum += v0*t + 0.5*g*t*t;
	return accum;
}

void main( void )
{
	float t = mod(time, 20.0); // repeat every 3 seconds
	t = max(0.0, t - 1.0); // initial delay 1 second
	vec3 center = (gl_PositionIn[0] + gl_PositionIn[1] + gl_PositionIn[2]).xyz/3.0;
	vec3 v0 = speed * center.xyz;
    vec3 trans = computeTrans(center, v0, gravity, t);
	for( int i = 0 ; i < gl_VerticesIn ; i++ )
	{
		gl_FrontColor  = gl_FrontColorIn[i];
		gl_Position    = gl_ModelViewProjectionMatrix * (gl_PositionIn[i] + vec4(trans,0.0));
		EmitVertex();
	}
}
