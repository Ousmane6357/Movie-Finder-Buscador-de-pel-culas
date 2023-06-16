let eventos = document.getElementById('miBoton');
let div = document.getElementById('miDiv');
let enlace = document.getElementById('miEnlace');

function EvitarEnlace(event){
    event.preventDefault();
    alert('Mensaje no habilitado')
}

function mostrarMensaje(event){
    alert(event.target);
    alert(event.currentTarget);

}


div.addEventListener('click', mostrarMensaje)

enlace.addEventListener('click', EvitarEnlace)
