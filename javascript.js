let blackA = false
let eraserA = false
let randomA = false
let shadingA = false
let selectA = false


const container = document.querySelector('#container')
;




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
                    else if (randomA === true) {random()}
                }, false); 
            }  
}
else {alert('Put EVEN Number Betwen 2-100')}
}

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
                    else if (randomA === true) {random()}
                    else if (selectA === true) {select()}
                    else if (shadingA === true) {shading()}
                }, false); 
            }



function black () {
    event.target.style.backgroundColor = "black";
}

function eraser () {
    event.target.style.backgroundColor = "white";
}

function random () {
    event.target.style.backgroundColor = getRandomColor();
}

function getRandomColor () {
    var letters = '012345789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function select () {



}
function shading (OPP = 1) {
     OPP = OPP - 0.1
    event.target.style.opacity = OPP
}


function Reset () {
    container.replaceChildren();
    for (let i = 0; i < 400; i++) {
        console.log('BRUH');
                cell = document.createElement('div');
                cell.classList.add('cellA');
                cell.setAttribute("id", 'cell');
                cell.style.cssText = 'height: 20px; width: 20px;'
                container.appendChild(cell);
    
    
                cell.addEventListener("mouseenter", function( event ) {
                    if (blackA === true) {black()}
                    else if (eraserA === true) {eraser()}
                    else if (randomA === true) {random()}
                }, false); 
            }
}



console.log('lol')