// these lines enable the geometry shader support.
#version 120
#extension GL_EXT_geometry_shader4 : enable

uniform float time;

const vec3 gravity = vec3(0.0, -9.8, 0.0);
uniform float speed;	// eg. 2.0 (glass.obj)

void main( void )
{
	float t = mod(time, 3.0); // repeat every 3 seconds
	t = max(0.0, t - 1.0); // initial delay 1 second
	vec4 center = (gl_PositionIn[0] + gl_PositionIn[1] + gl_PositionIn[2])/3.0;
	vec3 vel = speed * center.xyz;
	vec4 trans = vec4(vel*t + 0.5*gravity*t*t, 0.0);
	// Solve for t: 0.5*Gravity.y*t^2 + vel.y*t + center.y = 0
	float a = 0.5*gravity.y;
	float b = vel.y;
	float c = center.y;
	float t0 = (-b-sqrt(b*b-4.0*a*c))/(2.0*a); 
	if (t > t0) trans=vec4(vel*t0 + 0.5*gravity*t0*t0, 0.0);
   
	for( int i = 0 ; i < gl_VerticesIn ; i++ )
	{
		gl_FrontColor  = gl_FrontColorIn[i];
		gl_Position    = gl_ModelViewProjectionMatrix * (gl_PositionIn[i] + trans);
		EmitVertex();
	}
	EndPrimitive();
}
