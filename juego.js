var objeto = 0;
var objetoVista = 0;

var inventario = [0,0,0];
var objetoProduce = [0.1,5,10];
var precioProducto = [10,50,100];
var porsegundos = 0;


function clickObject(){
    objeto++;
    objetoVista++;
}

function clickUpgrade(objetito){
    inventario[objetito]++;
}

function comprar(objetito){
    if (objeto >= precioProducto[objetito]) {
        inventario[objetito]++; 
        objeto -= precioProducto[objetito];

        // Llama a calcularProd para actualizar porsegundos correctamente y la cantidad
        calcularprod();
        producirauto()
    }

    else{
        Swal.fire({
            position: 'bottom',
            title: 'No tienes suficiente dinero para comprar esto.',
            icon: 'error',
            toast: true,
            showConfirmButton: false,
            width:500,
            timer: 1500,
            timerProgressBar: true,
            color: "#000000",
            background: "#EAEAEA",
            customClass: {
                title: 'tituloAlerta'   
            },
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
    }
}

function producirauto(){
    for(contador = 0; contador < inventario.length; contador++){
        objeto += inventario[contador] * objetoProduce[contador];
        // Truncamos el objeto de la vista para que sea un numero entero sin decimales
        objetoVista = Math.trunc(objeto)
    }
}

function calcularprod(){
    porsegundos = 0;
    for (contador = 0; contador < inventario.length; contador++){
        porsegundos += inventario[contador] * objetoProduce[contador];
    }
    // Lo limitamos a un decimal
    porsegundos = porsegundos.toFixed(1)
}


//Esta funcion recoge cada elemento HTML para unirla con el javascript
function render(){
    document.getElementById("contador").innerHTML = `${objetoVista} telas`;
    document.getElementById("inventario").innerHTML = 
    `Tela: ${inventario[0]}\n
    Camisetas: ${inventario[1]}\n
    €: ${inventario[2]}`;
    document.getElementById("produccion").innerHTML =`Produccion por segundos: ${porsegundos}`;
    document.getElementById("costoCursor").innerHTML = precioProducto[0];
    document.getElementById("produccionCursor").innerHTML = objetoProduce[0];
    document.getElementById("costoGasolina").innerHTML = precioProducto[1];
    document.getElementById("produccionGasolina").innerHTML = objetoProduce[1];
    document.getElementById("costoEngine").innerHTML = precioProducto[2];
    document.getElementById("produccionEngine").innerHTML = objetoProduce[2];
}

//Función extraña para que vaya refrescando el videojuego
var FPS = 30;

setInterval(function(){
    render();
},1000/FPS);

setInterval(function(){
    producirauto();
},1000)

