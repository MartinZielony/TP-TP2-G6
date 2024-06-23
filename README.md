# TP Integrador Grupo 6
Este es el trabajo práctico integrador del grupo 6 en TP2, basado en el backend de una página recetario.

## Instrucciones

 - El servidor se puede iniciar con el comando "npm run start"
 - Se recomienda utilizar postman para la ejecución de las acciones crud mediante los endpoints
 - Las rutas son "user" y "recipe" para Usuarios y Recetas correspondientemente
 - Esta es la estructura que deberá seguir el body de un POST de creación de **receta**:
```    
{
        "title": "Titulo de la receta",
        "image": "URL a la Imagen de la receta",
        "description": "Descripcion",
        "steps": [
            "Paso1",
            "Paso2",
            "Etc"
        ],
        "ingredients": [
            {
                "quantity": "cantidad",
                "ingredient": "nombre"
            }
        ]
}
```
 - Esta es la estructura que deberá seguir el body de un POST de creación de **usuario**:
 ```    
{
	"name":  "nombre",
	"password":  "contraseña",
	"mail":  "mail"
}
```
- En ambos casos se repite el formato para los UPDATE mediante el método HTTP PUT