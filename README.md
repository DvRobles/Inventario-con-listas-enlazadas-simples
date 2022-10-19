Utilizando el mismo ejercicio de Inventario con que se ha venido trabajando se va a implementar un cambio en la estructura de datos para utilizar listas enlazadas simples, se va a considerar un ejemplo similar al primer ejercicio en donde los productos se acomodaban de acuerdo al orden en que llegaran (no es necesario ordenar) y por lo tanto si existe la opción de insertar un nuevo producto en determinada posición.
Es decir, los métodos de Inventario deben permitir:
Agregar, Buscar, Eliminar, Insertar, Listar y Listar Inverso 
Para insertar lo harán poniendo la posición en que quieren que quede.
ejemplo:
primero:3->4->7->1->2->9
insertar(posicion,nuevo)
insertar(2,{5})//el 5 quedo en la posicion 2
primero:3->5->4->7->1->2->9

Recordar que se deben usar por lo menos las clases del Producto, la del Inventario y la de la Aplicación (interacción con el DOM HTML)
