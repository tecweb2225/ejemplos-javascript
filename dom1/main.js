//var cajas = document.getElementsByTagName('div')
//var cajas = document.getElementsByClassName('caja')
var caja = document.getElementById('primera')

//cajas[0].textContent = 'Hola Mundo'
//cajas[1].innerHTML = '<b>Hola JavaScript</b>'
caja.textContent = 'Primera Caja';

// No se recomienda agregar elementos con el método write()
// document.write('<div class="caja">Nuevo elemento</div>')

// 5 pasos para agregar un nuevo elemento en el DOM
// Paso 1. Crear el nuevo elemento (createElement())
var elementoNuevo = document.createElement('div')

// Paso 2. Crear el contenido (createTextNode())
var nodoContenido = document.createTextNode('Nuevo elemento')

// Paso 3. Añadir el contenido al elemento (appendChild())
elementoNuevo.appendChild(nodoContenido)

// Paso 4. Agregar atributos al elemento (setAttribute())
elementoNuevo.setAttribute('class', 'caja colorcoral')

// Paso 5. Agregar el elemento al documento (appendChild()) 

// Agrega el nuevo elemento al final
// var contenedor = document.getElementById('contenedor')
// contenedor.appendChild(elementoNuevo)

// Agrega el nuevo elemento al inicio
var contenedor = document.getElementById('contenedor')
var segunda = document.getElementById('segunda')
contenedor.insertBefore(elementoNuevo, segunda)

// Eliminar la caja con el id='tercera'
var tercera = document.getElementById('tercera')
contenedor.removeChild(tercera)




