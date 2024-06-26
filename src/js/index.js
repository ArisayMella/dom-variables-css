// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//const rootStyles = document.documentElement.style;

//rootStyles.setProperty('--primary-color', 'green');

//const inputColorElement = document.getElementById('input-color');

//inputColorElement.addEventListener('input', event => {
  //rootStyles.setProperty('--primary-color', event.target.value);
//});


//# Ejercicios

//## VARIABLES CSS

/*- Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height 
de 500vh para generar scroll. El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y 
si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas.*/
 function changeWidth (){
  var scroll = (window.pageXOffset / 5);
  var width = Math.min(100 - scroll)

  document.getElementById('box').style.width = width + '%';
 }

 window.addEventListener('scroll', function ()){
  requestAnimationFrame(changeWidth);
 }
//crear un evento de scroll 
//cuanto scroll he hecho 

/*- Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.*/

/*- Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el body y se aplique. 
Haz una función para generarlo en RGB y otra para generarlo en hexadecimal y ejecuta cada una desde un botón*/

/*- Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá quedarse pegado a 
la flecha de tu ratón y moverse junto a él.*/