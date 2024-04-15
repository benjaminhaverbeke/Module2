import Request from './Request.js'


const myRequest = new Request();

document.addEventListener('DOMContentLoaded', function(){
    
    let input = document.querySelectorAll('.input');
    let submit = document.querySelector('.submit');
    
    submit.addEventListener('click', function(){
        event.preventDefault();
        console.log(myRequest.getInputs(input));
        
        
        
    });
    
    
    
    
    
    
});