'use strict'


document.addEventListener('DOMContentLoaded', function() {



    let ball = document.querySelector('#ball');
    let left = 0;
    let stop = false;
    let direction = '';
    let top = 0;
    const angle = Math.PI / 4;
    function animate() {

        requestAnimationFrame(animate);
        console.log(left)
        console.log(window.innerWidth)
        console.log(window.innerHeight)
        if(left === window.innerWidth - 40){
            
            stop = true;
        }
        if(left === 0){
            stop = false;
        }
        if (left <= window.innerWidth - 40 && stop === false) {
            if(top + 50 <= window.innerHeight){
                
              left++;
            top++;
            ball.style.left = left + 'px';
            ball.style.top = top + 'px';  
            }
            else {
                left++;
                direction = -1
            top += direction;
            ball.style.left = left + 'px';
            ball.style.top = top + 'px';  
            }
            
            
        }
        else if(left !== 0 && stop === true)
        {
            direction = -1
            left += direction;
            top += direction;
            console.log(left)
            ball.style.left = left + 'px';
            ball.style.top = top + 'px';
        }

    }


    
    animate();











});
