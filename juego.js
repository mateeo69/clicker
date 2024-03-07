var objeto = 0;

var inventario = [0,0,0];
var objetoProduce = [1,5,10];
var precioProducto = [10,50,100];
var porsegundos = 0;

function clickObject(){
    objeto++;
}

function comprar(objetito){
    if (objeto >= precioProducto[objetito]) {
        inventario[objetito]++; 
        objeto -= precioProducto[objetito];

        // Llama a calcularProd para actualizar porsegundos correctamente
        calcularprod();
    }
    else{
        Swal.fire({
            title: 'Error',
            text: 'No tienes suficiente dinero para comprar esto.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    }
}

function producirauto(){
    for(contador = 0; contador < inventario.length; contador++){
        objeto += inventario[contador] * objetoProduce[contador];
    }
}

function calcularprod(){
    porsegundos = 0;
    for (contador = 0; contador < inventario.length; contador++){
        porsegundos += inventario[contador] * objetoProduce[contador];
    }
}
//Esta funcion recoge cada elemento HTML para unirla con el javascript
function render(){
    document.getElementById("contador").innerHTML = objeto, "galletas";
    document.getElementById("inventario").innerHTML = 
    `Cursores: ${inventario[0]}
    Abuelitas: ${inventario[1]}
    Hornos: ${inventario[2]}`;
    document.getElementById("produccion").innerHTML =`Produccion por segundos: ${porsegundos}`;
}



//Función extraña para que vaya refrescando el videojuego
var FPS = 30;

setInterval(function(){
    render();
},1000/FPS);

setInterval(function(){
    producirauto();
},1000)

