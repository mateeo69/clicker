// Definicion de variables
    //Tela
var tela = 0;
var telaVista = 0;
var telaPorSegundo = 0;
    //Camisetas
var camiseta = 0;
var camisetaVista = 0;
var camisetaPorSegundo = 0;
    //Dinero
var dinero = 0;
var dineroVista = 0;
var dineroPorSegundo = 0;

var inventario = [0,0,0];
var objetoProduce = [0.1,5,10];
var precioProducto = [10,50,100];



function clickTela(){
    tela++;
    telaVista++;
}

function clickCamiseta(){
    if(tela>=5){
        telaVista -= 5;
        tela -=5;
        camiseta++;
        camisetaVista++;
        //Hay que mejorar esto para que se actualice automático
    }
    else{
        Swal.fire({
            position: 'bottom',
            title: 'No tienes suficiente tela para hacer una camiseta.',
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

function clickDinero(){
    if(camiseta >= 1){
        camiseta -= 1;
        dinero +=5;
        dineroVista +=5;
        //Hay que mejorar esto para que se actualice automático
    }
    else{
        Swal.fire({
            position: 'bottom',
            title: 'No tienes suficientes camisetas para venderlas.',
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


function clickUpgrade(objetito){
    inventario[objetito]++;
}

function comprar(objetito){
    if (tela >= precioProducto[objetito]) {
        inventario[objetito]++; 
        tela -= precioProducto[objetito];

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
        tela += inventario[contador] * objetoProduce[contador];
        // Truncamos el objeto de la vista para que sea un numero entero sin decimales
        telaVista = Math.trunc(tela)
    }
}

function calcularprod(){
    //Calcular tela por segundos
    telaPorSegundo = 0;
    for (contador = 0; contador < inventario.length; contador++){
        telaPorSegundo += inventario[contador] * objetoProduce[contador];
    }
    // Lo limitamos a un decimal
    telaPorSegundo = telaPorSegundo.toFixed(1)
}


//Esta funcion recoge cada elemento HTML para unirla con el javascript
function render(){

    //Tela
    document.getElementById("contadorTela").innerHTML = `${telaVista} telas`;
    document.getElementById("produccionTela").innerHTML =`${telaPorSegundo} tela / segundo`;

    //Camisetas
    document.getElementById("contadorCamiseta").innerHTML = `${camiseta} camisetas`;
    document.getElementById("produccionCamiseta").innerHTML =`${camisetaPorSegundo} camiseta / segundo`;
    //Dinero
    document.getElementById("contadorDinero").innerHTML = `${dinero} €`;
    document.getElementById("produccionDinero").innerHTML =`${dineroPorSegundo} € / segundo`;

    //Costos
    document.getElementById("costoCursor").innerHTML = precioProducto[0];
    document.getElementById("produccionCursor").innerHTML = objetoProduce[0];
    document.getElementById("costoGasolina").innerHTML = precioProducto[1];
    document.getElementById("produccionGasolina").innerHTML = objetoProduce[1];
    document.getElementById("costoEngine").innerHTML = precioProducto[2];
    document.getElementById("produccionEngine").innerHTML = objetoProduce[2];

    //Informacion productos
    document.getElementById("inventario").innerHTML = 
    `Cursores: ${inventario[0]}\n
    Gasolina: ${inventario[1]}\n
    Motores: ${inventario[2]}`;
}

//Función extraña para que vaya refrescando el videojuego
var FPS = 30;

setInterval(function(){
    render();
},1000/FPS);

setInterval(function(){
    producirauto();
},1000)

