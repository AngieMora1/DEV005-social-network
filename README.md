# Creando una Red Social

## Índice

- [Creando una Red Social](#creando-una-red-social)
  - [Índice](#índice)
  - [1. Prototipado de Baja Fidelidad](#1-prototipado-de-baja-fidelidad)
  - [2. Prototipado de Alta Fidelidad](#2-prototipado-de-alta-fidelidad)
  - [3. Resumen sobre Food Match](#3-resumen-sobre-food-match)
    - [Descripción del producto](#descripción-del-producto)
    - [Principales usuarios del producto](#principales-usuarios-del-producto)
    - [Qué problema resuelve el producto](#qué-problema-resuelve-el-producto)
  - [4. Gráfica de las necesidades de los usuarios](#4-gráfica-de-las-necesidades-de-los-usuarios)
  - [5. Historias de Usuario](#5-historias-de-usuario)
    - [Historia de Usuario 1.](#historia-de-usuario-1)
    - [Historia de Usuario 2.](#historia-de-usuario-2)
    - [Historia de Usuario 3.](#historia-de-usuario-3)
    - [Histora de Usuario 4.](#histora-de-usuario-4)
    - [Historia de Usuario 5.](#historia-de-usuario-5)
  - [6. Colaboradores](#6-colaboradores)
  - [7. Deploy](#7-deploy)
  - [8. Test de usabilidad](#8-test-de-usabilidad)


## 1. Prototipado de Baja Fidelidad

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos
vivir sin ellas.

## 2. Prototipado de Alta Fidelidad

En este proyecto construirás una Red Social sobre lo que decidan tú y tu equipo.
Podría ser, por ejemplo, sobre alimentación saludable, feminismo, educación,
salud, energías renovables, amantes de las [Empanadas](https://es.wikipedia.org/wiki/Empanada)
o de los [Tacos de Canasta](https://es.wikipedia.org/wiki/Taco),
de la [Feijoada](https://es.wikipedia.org/wiki/Feijoada), o de lo que sea.

Tu Red Social tendrá que permitir a cualquier usuario crear una cuenta de acceso
y loguearse con ella; crear, editar, borrar y _"likear"_ publicacciones.

Por lo tanto, en este proyecto construirás una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](https://curriculum.laboratoria.la/es/topics/css/02-responsive) (con más de una vista / página)
en la que podamos **leer y escribir datos**.

## 3. Resumen sobre Food Match

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### Descripción del producto

- [ ] **Ruteado (History API, evento hashchange, window.location)**

  <details><summary>Links</summary><p>

  * [Manipulando el historial del navegador - MDN](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
</p></details>

### Principales usuarios del producto

- [ ] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

### Qué problema resuelve el producto

## 4. Gráfica de las necesidades de los usuarios

* Este proyecto se debe trabajar en equipos de tres.

* El rango de tiempo estimado para completar el proyecto es de 4 a 5 Sprints.

* La lógica del proyecto debe estar implementada completamente en JavaScript
  (ES6+), HTML y CSS :smiley:. Para este proyecto **no está permitido** utilizar
  _frameworks_ o librerías de CSS y JS.

* La división y organización del trabajo debe permitir, sin excepciones, que
  **cada integrante** del equipo practique el aprendizaje de todo lo involucrado
  en **cada historia**. _No se dividan el trabajo como en una fábrica._
  - ¿Hasta acá has avanzado en tus proyectos con cierta fluidez y sin mayores
    problemas? Sé generosa con tus compañeras, permíteles aprender y practicar
    sin restricciones, aunque tome un poco más de tiempo. Aproveha de
    _coachearlas_, de hacer _pair programming_, una de las mejores maneras de
    aprender es explicando verbalmente.

  - ¿Se te está haciendo difícil y te cuesta un poco más avanzar? No te quedes
    con las partes "fáciles" del proyecto, conversa, negocia, exige tu oportunidad
    para practicar y aprender lo que se te hace más difícil.

* Solamente pueden trabajar en una única historia por vez, no pueden avanzar a
  la siguiente sin haber completado la anterior. La historia se completa cuando
  se cumplen **todos** sus Criterios de Aceptación + **toda** su Definición
  de Terminado.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este repositorio.

## 5. Historias de Usuario

Para iniciar con el desarrollo de la página web, se realizó una encuesta a un grupo de posibles usuarios con la finalidad de conocer sus preferencias o expectativas. Para ello se les pidió que completaran el siguiente [formulario](https://docs.google.com/forms/d/11WD-pyQ8Pbt1IWbCLrPGsr8i3mJLl3ZJSg9AfV1HJe8/edit#responses). A partir de ella y teniendo en cuenta los principales requerimientos del proyecto, creamos las siguientes historias de usuario. 

Características que se cubren en todas las historias de usuario:

* **Criterios de Aceptación.**
  - [ ] *Que la vista sea responsive*
  - [ ] *Que los diseños sigan las pautas del prototipado de alta fielidad*

### Historia de Usuario 1.

Yo como usuario de Food Match quiero poder loguearme en la red social para poder ingresar a la plataforma.

### Historia de Usuario 2.

HU02: Yo como usuario de Food Match quiero poder registrarme en la red social para interactuar con otros usuarios

* **Criterios de Aceptación.**
  - [ ] *Que el correo ingresado por el usuario sea válido*
  - [ ] *Que la contraseña posea como mínimo 6 caracteres*
  - [ ] *Que este conectado a Firebase*

### Historia de Usuario 3.

Yo como usuario de Food Match quiero poder ingresar a la página con el correo, con google, twitter y Github

* **Criterios de Aceptación.**
  - [ ] *Que los íconos de gmail, twitter y github sigan el diseño de marca de cada uno*
  - [ ] *Que estén conectados a Firebase y permitan el ingreso con las cuentas*
  - [ ] *Que permita la entrada con un nuevo correo*

### Histora de Usuario 4. 

Yo como usuario de Food Match quiero poder hacer publicaciones, que se vean en pantalla, tengan la opcion de editar y eliminar, todo en el muro de la red social para que mas usuarios del aplicativo lo vean.

* **Criterios de Aceptación.**
  - [ ] *Que la publicación se quede guardada en la base de datos*

### Historia de Usuario 5.

Yo como usario de Food Match quiero darle like a las publicaciones.
* **Criterios de Aceptación.**
  - [ ] *Que esté conectado con Firebase*
  - [ ] *Que se guarde el conteo de los like y se visualicen*

## 6. Colaboradores

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Permite crear posts con imágenes.
* Permite buscar usuarios, agregar y eliminar "amigos".
* Permite definir la privacidad de los _posts_ (público o solamente para amigos).
* Permite ver su muro de cualquier usuario "no-amigo" (solamente los
  posts _públicos_).
* Permite comentar o responder una publicación.
* Permite editar perfil.

## 7. Deploy

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting
(Firebase, Netlify, Vercel, etc) que puedas haber encontrado en el camino.
Revisa la [documentación de Vite](https://vitejs.dev/guide/static-deploy.html)
para guiarte con eso.

***

## 8. Test de usabilidad

Se realizaron test de usabilidad para saber la opinión de los usuarios sobre la página, obteniendo los siguientes resultados: 
  
* **Usuario 1**
  Después de que el usuario revisara la aplicación, sugirió los siguiente cambios:
  - [ ] Que la palabra "Registrar ahora" resalte cuando el puntero pase sobre ella
  - [ ] Que el botón Guardar e Ingresar, así como los espacios para colocar el Correo Electrónico y la Contraseña generen alguna reacción cuando el puntero pase sobre ellos
  - [ ] Solicitó que en los post aparezcan los nombres o alias de los usuarios en vez de los correos, debido a que pueden ser información sensible
  - [ ] Que los post incluyan la hora de su publicación y el lugar
  
* **Usuario 2**
  Después de que el usuario revisara la aplicación, sugirió los siguiente cambios:
  - [ ] Cuando le de guardar en el cuadro de publicar seria bueno que el cuadro se cerrara
  - [ ] En el momento de eliminar un test, deberia de aparecer un mensaje para asegurarse de querer borrar la publicacion
  - [ ] Cuando estaba editando y le di al boton guardar, como el cuadro seguia mostrandose pense que no habia guardado, seria bueno que cuando se de click se cierre ese cuadro.
  - [ ] En el like, seria bueno que el corazon cambiara de color para saber que le di like

* **Usuario 3**
  Después de que el usuario revisara la aplicación, sugirió los siguiente cambios:
   - [ ] Cuando se va a publicar por segunda vez, la informacion de la primera publicacion sigue en el cuadro
   - [ ] Cuando se va a editar una publicacion y luego se guarda el cuadro sigue puesto y no se cierra
  
* **Usuario 4**
  Después de que usuario revisara la aplicación, sugirió los siguiente cambios:
  - [ ] Corregir alineación de los iconos del logueo de las redes sociales
  - [ ] Que los mensajes de error se muestren debajo de los casillas donde se ingresa el correo y la contraseña
  - [ ] Agregar un botón de retorno a la página de login y registro hacia la página de bienvenida
  