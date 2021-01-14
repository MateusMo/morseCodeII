'use strict'

const btnTranslate = document.querySelector('.getBtn1');
const btnShineOn = document.querySelector('.getBtn2');
const btnWriteAgain = document.querySelector('.getBtn3');
const hidden = document.querySelector('.hiddenDiv');
const showedDiv = document.querySelector('.showedDiv')
let formText = '';
let formName = '';
let getString = '';
let body = document.querySelector('body');



function displayCode(newString,formName){

  
  hidden.classList.remove('hiddenDiv');
  showedDiv.classList.add('hiddenDiv');
  document.querySelector('.textBox').textContent =`${formName} a tradução do seu código é: ${newString} `;
  console.log(newString,formName);

   getString = newString;

}

function morseCode(formText=[],formName){
  
  let newString = '';

  for(let i = 0 ; i < formText.length; i++){

    if( formText[i] === ' '){
      newString += ' / ';
    }

    if( formText[i] === ','){
      newString += ' / ';
    }

    if( formText[i] === 'a' || formText[i] === 'A' || formText[i] === 'Á' || formText[i] === 'á' || formText[i] === 'ã' || formText[i] === 'Ã' ){
      newString += '.- ';
    }

    if( formText[i] === 'b' || formText[i] === 'B' ){
      newString += '-... ';
    }

    if( formText[i] === 'c' || formText[i] === 'C' ){
      newString += '-.-. ';
    }

    if( formText[i] === 'd' || formText[i] === 'D' ){
      newString += '-.. ';
    }

    if( formText[i] === 'e' || formText[i] === 'E' || formText[i] === 'é' || formText[i] === 'É' ){
      newString += '. ';
    }

    if( formText[i] === 'f' || formText[i] === 'F' ){
      newString += '..-. ';
    }

    if( formText[i] === 'g' || formText[i] === 'G' ){
      newString += '--. ';
    }

    if( formText[i] === 'h' || formText[i] === 'H' ){
      newString += '.... ';
    }

    if( formText[i] === 'i' || formText[i] === 'I' || formText[i] === 'í' || formText[i] === 'Í' ){
      newString += '.. ';
    }

    if( formText[i] === 'j' || formText[i] === 'J' ){
      newString += '.--- ';
    }

    if( formText[i] === 'k' || formText[i] === 'K' ){
      newString += '-.- ';
    }

    if( formText[i] === 'l' || formText[i] === 'L' ){
      newString += '.-.. ';
    }

    if( formText[i] === 'm' || formText[i] === 'M' ){
      newString += '-- ';
    }

    if( formText[i] === 'n' || formText[i] === 'N' ){
      newString += '-. ';
    }

    if( formText[i] === 'o' || formText[i] === 'O' || formText[i] === 'ó' || formText[i] === 'Ó' || formText[i] === 'õ' || formText[i] === 'Õ' ){
      newString += '--- ';
    }

    if( formText[i] === 'p' || formText[i] === 'P' ){
      newString += '.--. ';
    }

    if( formText[i] === 'q' || formText[i] === 'Q' ){
      newString += '--.- ';
    }

    if( formText[i] === 'r' || formText[i] === 'R' ){
      newString += '.-. ';
    }

    if( formText[i] === 's' || formText[i] === 'S' ){
      newString += '... ';
    }

    if( formText[i] === 't' || formText[i] === 'T' ){
      newString += '- ';
    }

    if( formText[i] === 'u' || formText[i] === 'U' || formText[i] === 'ú' || formText[i] === 'Ú' ){
      newString += '..- ';
    }

    if( formText[i] === 'v' || formText[i] === 'V' ){
      newString += '...- ';
    }

    if( formText[i] === 'w' || formText[i] === 'W' ){
      newString += '.-- ';
    }

    if( formText[i] === 'x' || formText[i] === 'X' ){
      newString += '-..- ';
    } 

    if( formText[i] === 'y' || formText[i] === 'Y' ){
      newString += '-.-- ';
    }

    if( formText[i] === 'z' || formText[i] === 'Z' ){
      newString += '--.. ';
    }
  }

  displayCode(newString,formName);
}

btnTranslate.addEventListener('click',function(){
  formText = document.querySelector('.text').value;
  formName = document.querySelector('.name').value;
  morseCode(formText,formName);
});

btnShineOn.addEventListener('click',function(){
  
  for(let x = 0; x < getString.length; x++){
        
    if(getString[x] === '.'){
      
      $("body").fadeToggle(200);
      $("body").fadeIn(200);
      //console.log('1');
    } else if(getString[x] === '-'){
      
      $("body").fadeToggle(800);
      $("body").fadeIn(800);
      //console.log('2');
    } else if(getString[x] === ' / '){
      $("body").fadeIn(800);
      //console.log('3');
    }
  }
  console.log(getString);
});

btnWriteAgain.addEventListener('click',function(){
  hidden.classList.add('hiddenDiv');
  showedDiv.classList.remove('hiddenDiv');  
  document.querySelector('.textBox2').value = '';
  document.querySelector('.name').value = '';
});
