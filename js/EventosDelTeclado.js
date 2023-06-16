let campo = document.getElementById('miCampo');

function Verificar(event){
    if(event.keyCode < 48 || event.keyCode > 57 ){
        event.preventDefault();
    };
};

campo.addEventListener('keydown', Verificar);
campo.addEventListener('keyup', Verificar){
    alert('Bienvenido al mundo real')
};