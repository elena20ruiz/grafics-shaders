# Resum Textures:

## Carregar textura predefinida:
	
- 1. *Vertex Shader*: Agafa coordenada de textura en:
		
		vtexCoord = texCoord;
		
- 2. *Fragment Shader*: 
Se usa la función **texture** para coger la posición de la textura a partir
del vertice de coordenada.
		
		texture(colorMap, vtexCoord);

Asignarle al color la imagen de textura:
	
		fragColor = frontColor*texture(colorMap,vtexCoord);
		
## Movimiento en la textura:

- Modificar coordenada de textura

	Ejemplo tiempo:
	vtexCoord = vec2(texCoord.x+time*speed,texCoord.y);
 
## Diferentes posiciones textura:
Recorrer un sampler2D con estructura matriz, cada 1/30 s. estar en una 
posición diferente:

Matriz 8x8;

	- Slice 1: M[0][0]
	- Slice 2: M[0][1]
	- Slice 3: M[0][3] 
	- ...
	- Slice 8: M[1][0]
	- Slice 9: M[1][1]
	- ...
	- Slice 56: M[7][7] 

- 1. *Vertex Shader:* vtexCoord = texCoord
- 2. *Fragment Shader:* 
