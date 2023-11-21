let blackA = false
let eraserA = false

const container = document.querySelector('#container')
;




/* for (let i = 0; i < 1600; i++) {
    console.log('BRUH');
            var cell = document.createElement('div');
            cell.classList.add('cellA');
            cell.setAttribute("id", 'cell');
            cell.style.cssText = 'height: 10px; width: 10px;'
            container.appendChild(cell);


            cell.addEventListener("mouseenter", function( event ) {
                if (blackA === true) {black()}
                else if (eraserA === true) {eraser()}
            }, false); 
        }
*/
function GridF (value = 0) {
if ((((parseInt(value)) % 2) === 0) && value < 101) {
    container.replaceChildren();
    console.log('HELP PLS');
     for (let i = 0; i < (value ** 2); i++) {
        console.log('BRUH');
                var cell = document.createElement('div');
                cell.classList.add('cellA');
                cell.setAttribute("id", 'cell');
                cell.style.cssText = `height: ${400/(value)}px; width: ${400/(value)}px;`
                container.appendChild(cell);
    
    
                cell.addEventListener("mouseenter", function( event ) {
                    if (blackA === true) {black()}
                    else if (eraserA === true) {eraser()}
                }, false); 
            }  
}
else {alert('Put EVEN Number Betwen 2-100')}
}

    for (let i = 0; i < 1600; i++) {
        console.log('BRUH');
                var cell = document.createElement('div');
                cell.classList.add('cellA');
                cell.setAttribute("id", 'cell');
                cell.style.cssText = 'height: 10px; width: 10px;'
                container.appendChild(cell);
    
    
                cell.addEventListener("mouseenter", function( event ) {
                    if (blackA === true) {black()}
                    else if (eraserA === true) {eraser()}
                }, false); 
            }



/* function grid () {
    console.log('help pls')
    container.replaceChildren();
for (let i = 0; i < 400; i++) {
    console.log('BRUH');
            var cell = document.createElement('div');
            cell.classList.add('cellA');
            cell.setAttribute("id", 'cell');
            cell.style.cssText = 'height: 20px; width: 20px;'
            container.appendChild(cell);


            cell.addEventListener("mouseenter", function( event ) {
                if (blackA === true) {black()}
                else if (eraserA === true) {eraser()}
            }, false); 
        }   
    }
*/        




   /* for (let i = 0; i < 1600; i++) {
        console.log('BRUH');
                var cell = document.createElement('div');
                cell.classList.add('cellA');
                cell.setAttribute("id", 'cell');
                cell.style.cssText = 'height: 10px; width: 10px;'
                container.appendChild(cell);
    
    
                cell.addEventListener("mouseenter", function( event ) {
                    if (blackA === true) {black()}
                    else if (eraserA === true) {eraser()}
                }, false); 
            }
*/

function black () {
    event.target.style.backgroundColor = "black";
}

function eraser () {
    event.target.style.backgroundColor = "white";
}



console.log('lol')