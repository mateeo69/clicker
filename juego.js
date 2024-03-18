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
var objetoProduce = [0.1,2,4];
var precioProducto = [10,50,100];
    // TabPanel
var option1 = null;
var option2 = null;
var content1 = null;
var content2 = null;
    //Almacenamiento Buy
var buyTela = new Set();
var buyCamiseta = new Set();
var buyMoney = new Set();
    //Almacenamiento Upgrades
var upgradesTela = new Set();
var upgradesCamiseta = new Set();
var upgradesMoney = new Set();

document.addEventListener("DOMContentLoaded", function() {
    //Construimos los upgrades
    upgradesTela = construccionUpgradeTela();
    upgradesCamiseta = construccionUpgradeCamisetas();
    upgradesMoney = construccionUpgradeMoney();

    //Llamamos a la funcion que cargue los set de upgrades en el HTML
    cargaUpgrades(upgradesTela, upgradesCamiseta, upgradesMoney)

    //Cargamos las buys
    buyTela = contrucionBuyTela();
    buyCamiseta = contrucionBuyCamiseta();
    buyMoney = construcionBuyMoney();

    //Función extraña para que vaya refrescando el videojuego
        var FPS = 30;

        setInterval(function(){
            render();
        },1000/FPS);

        setInterval(function(){
            producirAutoTela();
        },1000)

    // Tu código aquí se ejecutará cuando la página esté completamente cargada
    option1 = document.getElementById('option1');
    option2 = document.getElementById('option2');
    content1 = document.getElementById('content1');
    content2 = document.getElementById('content2');

});

// Cuando haces click en la tela
function clickTela(){
    tela++;
    telaVista++;
}

// Cuando haces click en la camiseta
function clickCamiseta(){
    if(tela>=5){
        tela -= 5;
        //Llamo a la funcion que actualiza la tela
        actualizarTela();

        camiseta++;
        camisetaVista++;

    }else{
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

// Cuando haces click en el dinero
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

//Funcion que depende de la mejora que compre te actualiza la produccion por segundo de tela
function comprarTela(objetito){
    if (tela >= precioProducto[objetito]) {
        inventario[objetito]++; 
        tela -= precioProducto[objetito];

        // Llama a la funcion que actualiza la tela
        actualizarTela();

    }else{
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

//Funcion que se ejecuta cada 1 segundo para producir automaticamente tela
function producirAutoTela(){
    for(contador = 0; contador < inventario.length; contador++){
        tela += inventario[contador] * objetoProduce[contador];
        // Truncamos el objeto de la vista para que sea un numero entero sin decimales
        telaVista = Math.trunc(tela)
    }
}

// Calculamos la produccion de tela por segundo que tenemos actualmente
function calcularprod(){

        //Calcular tela por segundos
        telaPorSegundo = 0;
        for (contador = 0; contador < inventario.length; contador++){
            telaPorSegundo += inventario[contador] * objetoProduce[contador];
        }
        // Lo limitamos a un decimal
        telaPorSegundo = telaPorSegundo.toFixed(1)

        //Actualiza la tela
        
    
}

/* Funcion para actualizar la tela */

function actualizarTela(){
    calcularprod();
    telaVista = Math.trunc(tela)
}


//Esta funcion recoge cada elemento HTML para unirla con el javascript
function render(){

    //Tela
    document.getElementById("contadorTela").innerHTML = `${telaVista} telas`;
    document.getElementById("produccionTela").innerHTML =`${telaPorSegundo} tela/s`;

    //Camisetas
    document.getElementById("contadorCamiseta").innerHTML = `${camiseta} camisetas`;
    document.getElementById("produccionCamiseta").innerHTML =`${camisetaPorSegundo} camiseta/s`;
    
    //Dinero
    document.getElementById("contadorDinero").innerHTML = `${dinero} €`;
    document.getElementById("produccionDinero").innerHTML =`${dineroPorSegundo} €/s`;

    //Costos
    /*
    document.getElementById("costoCursor").innerHTML = precioProducto[0];
    document.getElementById("produccionCursor").innerHTML = objetoProduce[0];
    document.getElementById("costoGasolina").innerHTML = precioProducto[1];
    document.getElementById("produccionGasolina").innerHTML = objetoProduce[1];
    document.getElementById("costoEngine").innerHTML = precioProducto[2];
    document.getElementById("produccionEngine").innerHTML = objetoProduce[2];
*/
}