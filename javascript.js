let blackA = false
let eraserA = false






const container = document.querySelector('#container')
;

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


function black () {
    event.target.style.backgroundColor = "black";
}

function eraser () {
    event.target.style.backgroundColor = "white";
}



console.log('lol')