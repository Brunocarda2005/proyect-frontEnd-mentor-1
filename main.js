// vars form

const names = document.getElementById('nameForm');
const number = document.getElementById('numberForm');
const MM = document.getElementById('data-form-mm');
const YY = document.getElementById('data-form-yy');
const CVC = document.getElementById('CVC');
const buton = document.querySelector('.main-form-content-buton');


// vars card

let nameCard = document.getElementById('name');
let numberCard = document.getElementById('number-card');
let cvc = document.getElementById('cvcCard');
let MMCard = document.getElementById('data-mm');
let YYCard = document.getElementById('data-yy');
let content = document.querySelector('.main-form');


let correct = '';
let correctNumber = '';

let contentCorrect = `
    <section class="main-correct">
      <div class="main-correct-text">
        <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
        <h3>THANK YOU</h3>
        <p>We've added your card details</p>
      </div>
    </section>`;




buton.addEventListener('click' , (e) => {
  
  e.preventDefault();
  input(names , nameCard);
  inputNumber(number , numberCard , 18);
  inputNumber(MM , MMCard , 3);
  inputNumber(YY , YYCard , 3);
  inputNumber(CVC , cvc , 4);
  
  if (correct && correctNumber) {
    
    content.innerHTML = contentCorrect;
    
  }
  
  
})


input(names , nameCard);
inputNumber(number , numberCard , 18);
inputNumber(MM , MMCard , 3);
inputNumber(YY , YYCard , 3);
inputNumber(CVC , cvc , 4);



function inputNumber(type , typeCard , length) {
  
  
  type.addEventListener('keyup' , () => {
    
    if (type.value.length >= length) {
      
      typeCard.innerText = 'largo';
      correct = false;
      
    }else {
      
      typeCard.innerText = type.value;
      correct = true;
      
    }
    
  })
  
  
}


function input(type , typeCard) {
  
  type.addEventListener('keyup' , () => {
    
   if (isNaN(type.value)) {
      
     typeCard.innerText = type.value;
     correctNumber = true;
      
   } else if (type.value == '') {
      
     typeCard.innerText = ''
     correctNumber = false;
      
   } else {
      
     typeCard.innerText = 'no puede ser un numero';
     correctNumber = false;
     
   } 
    
  })
  
}

