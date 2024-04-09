let seconds = 0;
let minutes = 0;
let chronoElement;
let count = 0;
let minutesStock = 0;
let secondesStock = 0;


function updateChrono() {
    seconds++;
    
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }
    
    const minutesDisplay = minutes.toString().padStart(2, '0');
    const secondsDisplay = seconds.toString().padStart(2, '0');

    chronoElement.innerText = `${minutesDisplay} minute(s) ${secondsDisplay} seconde(s)`;

    window.setTimeout(updateChrono, 1000);
    
}

function reset(){
    
    window.clearTimeout(updateChrono);
    seconds = 0;
    minutes = 0;
    
}

function start(){
   count++
  if(count%2 === 0){
      
      window.setTimeout(updateChrono, 1000)
      
  }
  else{
      window.setTimeout(function(){}, 5000000000);
      
      
      
  } 
       

    
}


document.addEventListener('DOMContentLoaded', function() {
    chronoElement = document.querySelector('#chrono');


document.querySelector('#start').addEventListener('click', start);
    
    
    
  document.querySelector('#reset').addEventListener('click', reset);

   
    
});
