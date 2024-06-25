# TP Integrador Grupo 6
Este es el trabajo práctico integrador del grupo 6 en TP2, basado en el backend de una página recetario.

## Instrucciones

 - El servidor se puede iniciar con el comando "npm run start"
 - Se recomienda utilizar postman para la ejecución de las acciones crud mediante los endpoints
 - Las rutas son "user" y "recipe" para Usuarios y Recetas correspondientemente
 - Esta es la estructura que deberá seguir el body de un POST de creación de **receta**:
```    
{
  "title": "Título de la receta",
  "image": "URL a la Imagen de la receta",
  "description": "Descripción de la receta",
  "steps": [
    "Paso 1: Descripción del paso 1",
    "Paso 2: Descripción del paso 2",
    "Etc."
  ],
  "ingredients": [
    { "quantity": "cantidad", "ingredient": "nombre del ingrediente" },
    { "quantity": "cantidad", "ingredient": "nombre del ingrediente" },
    { "quantity": "cantidad", "ingredient": "nombre del ingrediente" }
  ],
  "authorId": numero_de_id_usuario
}


 - Esta es la estructura que deberá seguir el body de un POST de creación de **usuario**:
 ```    
{
	"name":  "nombre",
	"password":  "contraseña",
	"mail":  "mail",
  "roleId": numero
}
```

```
 - Esta es la estructura que deberá seguir el body de un POST de creación de **rol**:
 ```    
{
	"name":  "nombre"
}
```
- En todos los casos se repite el formato para los UPDATE mediante el método HTTP PUT
```