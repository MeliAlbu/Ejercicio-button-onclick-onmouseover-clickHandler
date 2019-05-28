// lista de eventos  onchange. onclick-onmouseover


var pasarConElMouse = function () {
    console.log("me pasaste con el mouse")
}

var buttonElement = document.querySelector('button');
buttonElement.onclick = function () {
    console.log("APRETAME")
}






// buttonElement.onmouseover = pasarConElMouse()


//var divElement = document.querySelector


var boton = document.querySelector('button');
boton.onclick = function(){
 console.log('holi')
}


var pasarConElMouse = function(){
   console.log('me pasaste con el mouse')
}

var divElement = document.querySelector('div');
divElement.onmouseover = pasarConElMouse

boton.onmouseover = pasarConElMouse


//---------------------
var button = document.querySelector("button");
button.addEventListener("click", function(){
button.classList.add("rojo")
console.log(this)
});


//-----------------

function clickHandler() {
    console.log(this)   //this apunta al elemento que 
}

var button = document.querySelector("button");
button.addEventListener("click", clickHandler);
button.removeEventListener("click", clickHandler);



var body = document.querySelector("body");
body.addEventListener("keypress", function(evento) {
    console.log(evento.charCode);
    console.log(String.fromCharCode(evento.charCode)); //string.fromcharcodeesunmetodo
});