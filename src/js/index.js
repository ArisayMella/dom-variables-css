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

const rootStyles = document.documentElement.style;

const setBoxScroll = event => {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const userScroll = window.scrollY;

  const boxWidth = (userScroll * 100) / totalHeight;

  rootStyles.setProperty('--box-width', boxWidth + '%');

  console.log(userScroll);
};

window.addEventListener('scroll', setBoxScroll);

/*- Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.*/

scrollCountElement.textContent = Math.round(userScroll);
const boxWidth = (userScroll * 100) / totalHeight;

rootStyles.setProperty('--box-width', boxWidth + '%');

window.addEventListener('scroll', setBoxScroll);

/*- Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el body y se aplique. 
Haz una función para generarlo en RGB y otra para generarlo en hexadecimal y ejecuta cada una desde un botón*/

const buttonRgbElement = document.getElementById('button-rgb');
const buttonHexaElement = document.getElementById('button-hexa');

const generateRGBColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;

  rootStyles.setProperty('--bg-color', color);
};

const generateHexaColor = () => {
  //0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
  //#000000
  //#FFFFFF
  const hexaValues = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const randomPosition = Math.floor(Math.random() * hexaValues.length - 1);

    const randomCharacter = hexaValues.charAt(randomPosition);
    color += randomCharacter;
  }
  rootStyles.setProperty('--bg-color', color);
};

buttonRgbElement.addEventListener('click', generateRGBColor);
buttonHexaElement.addEventListener('click', generateHexaColor);

/*- Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá quedarse pegado a 
la flecha de tu ratón y moverse junto a él.*/

const setBoxPosition = event => {
  rootStyles.setProperty('--top', event.y + 'px');
  rootStyles.setProperty('--left', event.x + 'px');
};

window.addEventListener('mousemove', setBoxPosition);
