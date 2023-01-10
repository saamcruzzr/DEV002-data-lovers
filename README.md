# Data Lovers

## DESCRIPCIÓN DEL PROYECTO: Ghibli Lover's
Studio Ghibli es un estudio de animación japonés, conocido por sus largometrajes animados considerados grandes éxitos.
Las animaciones tienen gran acogida a nivel mundial y algunas han recibido varias nominaciones y premios. De todo este fandom hay un grupo que desea poder interactuar y ver la información de las animaciones y sus personajes.
Debido a esto, se vio la necesidad de poder elaborar un producto digital en el cual se pueda consolidar la información relacionada a los largometrajes y le permita al usuario obtener  estos datos de forma dinámica y de acuerdo a sus necesidades.
Para este proyecto es necesario completar los objetivos de aprendizaje trabajando de manera colaborativa (dupla).  Para ello fue indispensable realizar prototipos de baja y alta fidelidad, manejo de HTML semántico, JavaScript, CSS, web APIs, control de versiones GIT-GITHUB así como testeos de usabilidad. El conjunto de estas funciones nos llevará a una interfaz donde se mostrará la data del Studio Ghibli de manera organizada y manejable para el usuario final.
 
## OBJETIVOS DEL PROYECTO
### Objetivo general
El objetivo principal de este proyecto es aprender a diseñar y construir una interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el usuario necesita.
### Objetivos específicos
Buscar entender quién es el usuario y qué necesita saber o ver exactamente.
Crear una página web que permita visualizar la data, filtrar, ordenar y hacer algún cálculo agregado.
Realizar test unitarios.
Objetivos de aprendizaje
HTML: Uso de HTML semántico
CSS
Uso de selectores de CSS
Modelo de caja (box model): borde, margen, padding
Uso de flexbox en CSS
Web APIs
Uso de selectores del DOM
Manejo de eventos del DOM (listeners, propagación, delegación)
Manipulación dinámica del DOM
JavaScript
Diferenciar entre tipos de datos primitivos y no primitivos
Arrays (arreglos)
Objetos (key, value)
Variables (declaración, asignación, ámbito)
Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
Uso de bucles/ciclos (while, for, for..of)
Funciones (params, args, return)
Pruebas unitarias (unit tests)
Módulos de ECMAScript (ES Modules)
Uso de linter (ESLINT)
Uso de identificadores descriptivos (Nomenclatura y Semántica)
Diferenciar entre expresiones (expressions) y sentencias (statements)
Control de Versiones (Git y GitHub)
Git 
Instalación y configuración
Control de versiones con git (init, clone, add, commit, status, push, pull, remote)
Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)
GitHub
Creación de cuenta y repos, configuración de llaves SSH
Despliegue con GitHub Pages
Colaboración en Github (branches | forks | pull requests | code review | tags)
user-centricity: Diseñar un producto o servicio poniendo a la usuaria en el centro.
product-design
Crear prototipos de alta fidelidad que incluyan interacciones
Seguir los principios básicos de diseño visual
research: Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad
 
## CONSIDERACIONES GENERALES
Desarrollar en duplas remotamente.
Tiempo de referencia para cumplir OAs: 4 semanas.
 
 
## HISTORIAS DEL USUARIO
### LANDING PAGE
Como: usuario fanático de las animaciones del Studio Ghibli
Quiero: visualizar un menú general donde pueda elegir entre las opciones de: 1: las animaciones; 2: directores y productores; 3: sus personajes; 4: las locaciones y los vehículos utilizados en ellas.
Para: poder explorar  de manera más específica la información, de acuerdo a lo que esté buscando.
 
### HU1 (Películas)
Como: usuario fanático de las animaciones.
Quiero: Saber cuántas y cuáles películas son
Para: Poder diferenciarlas y así obtener la información de lo que estoy buscando de manera ordenada y específica.
Definición de terminado:
Colocar los Dropdowns en el footer que realizan las funciones de filtrado para que muestre pestañas seleccionables de “director”, “lanzamiento” y  “Score” de las películas.
 
### 2HU **

Como: usuario fanático de las animaciones.
Quiero: XXXX
Para: XXX
Definición de terminado:
XXX

### 3HU **

Como: usuario fanático de las animaciones.
Quiero: XXXX
Para: XXX
Definición de terminado:
XXX

### 4HU **

Como: usuario fanático de las animaciones.
Quiero: XXXX
Para: XXX
Definición de terminado:
XXX


## PROTOTIPOS

### Baja fidelidad
Se realizaron varios bocetos a lápiz, los cuales se fueron puliendo mediante feedback de compañeras y coaches. Una vez teniendo el VoBo, y definiendo correctamente las HU se procedió a realizar el prototipo de alta fidelidad.


### Alta fidelidad
Para elaborar el prototipo de alta fidelidad elegimos:

La paleta de color


Las fuentes tipográficas Delius Unicase (para títulos) y Mitr (para textos largos) 


Y decidimos utilizar, en su mayoría, las imágenes que aparecen dentro de la data que nos proporcionó Laboratoria.

Landing page
Aquí el usuario puede elegir qué data quiere explorar. Está dividida en 4 opciones, siendo nuestra primera HU el apartado de películas.


### HU (Películas)

Lo primero que vemos es el total de películas que hay y las películas con algunos datos generales enlistadas hacia abajo en la versión mobile.
Nos encontramos en la parte inferior un menú fijo que nos da la opción de explorar la data por medio de un filtro o regresarnos al menú principal.
Las opciones del desplegado son Directores, Lanzamiento y Score. Cada una de estas desglosa otro menú de opciones para delimitar lo que el usuario necesita como se muestra en las siguientes imágenes.
 

### HU (Directores y Productores)

Determinamos que por los requerimientos del proyecto, nuestra segunda HU sería esta.
Como en la historia anterior, tenemos la cantidad total de personas que se muestran en la página y posteriormente las fichas con foto y datos generales de cada director y productor de Studio Ghibli.
Nuestro menú fijo permanece visible en todas las historias, con excepción de la página de aterrizaje. Dentro de este tenemos el botón para ordenar alfabéticamente de la A-Z y de la Z-A, y el botón de regresar a inicio.


### HU (Personajes)
Mostramos el total de personajes. Estos en versión mobile se muestran en dos columnas. Cada tarjeta de personaje viene con foto y datos. 
En nuestro menú fijo tenemos el botón para filtrar por género, edad y especie (humano, animal y otro), y el botón de regresar a inicio.


### HU (Locaciones y Vehículos)
Mostramos como en las otras historias, el total de elementos que aparecen dentro del apartado de locaciones y vehículos. Cada elemento viene con la foto y sus datos. Estos se muestran volteando la tarjeta una vez que pasa el cursor encima de la foto o se le da click en mobile. 
Dentro del menú fijo tenemos el botón para filtrar por película, mostrar sólo locaciones y mostrar sólo vehículos. Y el botón de regresar a inicio.


Dentro de este enlace se puede explorar el prototipo interactuando con él.
![figma](https://www.figma.com/proto/FWujAfgSdHlNagMyu3dT3O/DL-DEV002-(IMAGENES)?page-id=0%3A1&node-id=7%3A2&viewport=-1668%2C964%2C1&scaling=scale-down&starting-point-node-id=7%3A2)



## TECNOLOGÍAS UTILIZADAS
Visual Studio Code
Figma
Github
Zoom
Slack
Trello
