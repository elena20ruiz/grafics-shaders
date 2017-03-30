void main()
{
	gl_FrontColor  = gl_Color;	
	gl_Position = vec4(gl_Vertex.x, gl_Vertex.y+1.0, gl_Vertex.z, 1.0);
	
}
