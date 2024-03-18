//Upgrades tela 
function construccionUpgradeTela(){
        var upgradesTela = new Set();
        //Mejoras enfocada a la produccion de tela
        const m1 = new Upgrade(0, 2000, "Mejora de herramientas de recolección",5,"Aumento de un 5% de la eficiencia de los agricultores", false, "cursor")
        upgradesTela.add(m1);

        const m2 = new Upgrade(0, 2000, "Mejora equipamiento del personal",5,"Aumento de un 5% de la eficiencia de los agricultores", false, "cursor1")
        upgradesTela.add(m2);

        const m3 = new Upgrade(0, 2000, "Bonus para el trabajador por tela recogida",5,"Aumento de un 5% de la eficiencia de los agricultores", false, "cursor1")
        upgradesTela.add(m3);


        //Esto iría mas a la seccion de dinero creo
        const m4 = new Upgrade(0, 2000, "Produccion de cultivos de mas calidad",5,"Aumento el precio de la venta de las camisetas", false, "cursor1")
        upgradesTela.add(m4);

        //Por cada color una mejora????
        const m5 = new Upgrade(0, 2000, "Producción de mas colores",5,"Aumento el precio de la venta de las camisetas", false, "cursor1")
        upgradesTela.add(m5);

        return upgradesTela;
}

    //Upgrades Camisetas
function construccionUpgradeCamisetas(){
    var upgradesCamiseta = new Set();

        //Mejoras enfocada a la produccion de camisetas
        const m1 = new Upgrade(1, 2000, "Curso textil avanzado para trabajadores",5,"Aumento de un 5% de la eficiencia de los trabajadores", false, "cursor2")
        upgradesCamiseta.add(m1);

        const m2 = new Upgrade(1, 2000, "Compra de maquinas de hilar",5,"Aumento de un 5% de la eficiencia de los trabajadores", false, "cursor2")
        upgradesCamiseta.add(m2);

        const m3 = new Upgrade(1, 2000, "Compra de telar mecánico",5,"Aumento de un 5% de la eficiencia de los trabajadores", false, "cursor2")
        upgradesCamiseta.add(m3);

        const m4 = new Upgrade(1, 2000, "Compra de máquina de vapor",5,"Aumento de un 5% de la eficiencia de los trabajadores", false, "cursor2")
        upgradesCamiseta.add(m4);

        const m5 = new Upgrade(1, 2000, "Compra de máquina de coser",5,"Aumento de un 5% de la eficiencia de los trabajadores", false, "cursor2")
        upgradesCamiseta.add(m5);

        const m6 = new Upgrade(1, 2000, "Compra de máquina de teñir y acabado",5,"Aumento de un 5% de la eficiencia de los trabajadores", false, "cursor2")
        upgradesCamiseta.add(m6);

        const m7 = new Upgrade(1, 2000, "Avance en automatización y robótica",5,"Aumento de un 5% de la eficiencia de los trabajadores", false, "cursor2")
        upgradesCamiseta.add(m7);

        const m8 = new Upgrade(1, 2000, "Compra de máquina de impresión en 3D textil",5,"Aumento de un 5% de la eficiencia de los trabajadores", false, "cursor2")
        upgradesCamiseta.add(m8);

        const m9 = new Upgrade(1, 2000, "Bonus para trabajador por camiseta fabricada",5,"Aumento de un 5% de la eficiencia de los trabajadores", false, "cursor2")
        upgradesCamiseta.add(m9);

    return upgradesCamiseta;
}

    //Upgrades Money
function construccionUpgradeMoney(){
    var upgradesMoney = new Set();
        //Mejoras enfocada a la produccion de money

        //Aquí en vez de 1 en general, y yendo en escala de influencers (1 -> 100 seguidores, 99 -> 3 millones)
        const m1 = new Upgrade(2, 2000, "Marketing con influencers",5,"Aumento de un 5% de la eficiencia de los vendedores", false, "cursor3")
        upgradesMoney.add(m1);

        const m2 = new Upgrade(2, 2000, "Subida de videos en tiktok",5,"Aumento de un 5% de la eficiencia de los vendedores", false, "cursor3")
        upgradesMoney.add(m2);

        const m3 = new Upgrade(2, 2000, "Directos en twitch",5,"Aumento de un 5% de la eficiencia de los vendedores", false, "cursor3")
        upgradesMoney.add(m3);

        const m4 = new Upgrade(2, 2000, "Creación de página web y posicionamiento SEO",5,"Aumento de un 5% de la eficiencia de los vendedores", false, "cursor3")
        upgradesMoney.add(m4);

        const m5 = new Upgrade(2, 2000, "Bonus para trabajador por camiseta vendida",5,"Aumento de un 5% de la eficiencia de los vendedores", false, "cursor3")
        upgradesMoney.add(m5);

    return upgradesMoney;
}

// Funcion que carga en el html los upgrades
function cargaUpgrades(upgradeTelas, upgradeCamisetas, upgradeMoney){
    // Recorremos el conjunto de objetos Upgrade
    upgradeTelas.forEach(function(upgrade) {
        // Creamos un div con clase 'caja'
        var caja = document.createElement('div');
        caja.className = 'caja';

        // Creamos una imagen y la agregamos a la 'caja'
        var imagen = document.createElement('img');
        imagen.src = 'img/upgrades/' + upgrade.img + ".png";
        caja.appendChild(imagen);

        // Creamos un div con clase 'informacion'
        var informacion = document.createElement('div');
        informacion.className = 'informacion';

        // Creamos párrafos con la información del upgrade y los agregamos a 'informacion'
        var productoInfo = document.createElement('p');
        productoInfo.textContent = 'Producto: ' + upgrade.producto;
        var priceInfo = document.createElement('p');
        priceInfo.textContent = 'Precio: ' + upgrade.price;
        var nameInfo = document.createElement('p');
        nameInfo.textContent = 'Nombre: ' + upgrade.name;
        var percentageInfo = document.createElement('p');
        percentageInfo.textContent = 'Porcentaje: ' + upgrade.percentage + '%';
        var descriptionInfo = document.createElement('p');
        descriptionInfo.textContent = 'Descripción: ' + upgrade.description;

        informacion.appendChild(productoInfo);
        informacion.appendChild(priceInfo);
        informacion.appendChild(nameInfo);
        informacion.appendChild(percentageInfo);
        informacion.appendChild(descriptionInfo);

        // Agregamos 'informacion' a la 'caja'
        caja.appendChild(informacion);

        // Finalmente, agregamos la 'caja' al documento
        document.querySelector('section.upgrades').appendChild(caja);
    });

    upgradeCamisetas.forEach(function(upgrade) {
        // Creamos un div con clase 'caja'
        var caja = document.createElement('div');
        caja.className = 'caja';

        // Creamos una imagen y la agregamos a la 'caja'
        var imagen = document.createElement('img');
        imagen.src = 'img/upgrades/' + upgrade.img + ".png";
        caja.appendChild(imagen);

        // Creamos un div con clase 'informacion'
        var informacion = document.createElement('div');
        informacion.className = 'informacion';

        // Creamos párrafos con la información del upgrade y los agregamos a 'informacion'
        var productoInfo = document.createElement('p');
        productoInfo.textContent = 'Producto: ' + upgrade.producto;
        var priceInfo = document.createElement('p');
        priceInfo.textContent = 'Precio: ' + upgrade.price;
        var nameInfo = document.createElement('p');
        nameInfo.textContent = 'Nombre: ' + upgrade.name;
        var percentageInfo = document.createElement('p');
        percentageInfo.textContent = 'Porcentaje: ' + upgrade.percentage + '%';
        var descriptionInfo = document.createElement('p');
        descriptionInfo.textContent = 'Descripción: ' + upgrade.description;

        informacion.appendChild(productoInfo);
        informacion.appendChild(priceInfo);
        informacion.appendChild(nameInfo);
        informacion.appendChild(percentageInfo);
        informacion.appendChild(descriptionInfo);

        // Agregamos 'informacion' a la 'caja'
        caja.appendChild(informacion);

        // Finalmente, agregamos la 'caja' al documento
        document.querySelector('section.upgrades').appendChild(caja);
    });

    upgradeMoney.forEach(function(upgrade) {
        // Creamos un div con clase 'caja'
        var caja = document.createElement('div');
        caja.className = 'caja';

        // Creamos una imagen y la agregamos a la 'caja'
        var imagen = document.createElement('img');
        imagen.src = 'img/upgrades/' + upgrade.img + ".png";
        caja.appendChild(imagen);

        // Creamos un div con clase 'informacion'
        var informacion = document.createElement('div');
        informacion.className = 'informacion';

        // Creamos párrafos con la información del upgrade y los agregamos a 'informacion'
        var productoInfo = document.createElement('p');
        productoInfo.textContent = 'Producto: ' + upgrade.producto;
        var priceInfo = document.createElement('p');
        priceInfo.textContent = 'Precio: ' + upgrade.price;
        var nameInfo = document.createElement('p');
        nameInfo.textContent = 'Nombre: ' + upgrade.name;
        var percentageInfo = document.createElement('p');
        percentageInfo.textContent = 'Porcentaje: ' + upgrade.percentage + '%';
        var descriptionInfo = document.createElement('p');
        descriptionInfo.textContent = 'Descripción: ' + upgrade.description;

        informacion.appendChild(productoInfo);
        informacion.appendChild(priceInfo);
        informacion.appendChild(nameInfo);
        informacion.appendChild(percentageInfo);
        informacion.appendChild(descriptionInfo);

        // Agregamos 'informacion' a la 'caja'
        caja.appendChild(informacion);

        // Finalmente, agregamos la 'caja' al documento
        document.querySelector('section.upgrades').appendChild(caja);
    });
}


/* CLASE */
class Upgrade {
    // Cuando se compre esta mejora se cogerá el producto y se le aplicará el porcentaje
    // Se cambiará el booleano de false a true, y desaparecerá de la vista

    producto; // 0 -> Tela / 1-> Camiseta / 2-> Dinero Producto al que se dirige la mejora
    price; //Precio que costará comprar este upgrade
    name; //Nombre de la mejora
    percentage; // Porcentaje que influirá en la fabricación del producto
    description; // Descripcion de en que consiste la mejora
    comprado; //Booleano para saber si esta mejora ya se ha comprado o no
    img; //Imagen que se utilizará para la mejora
  
    constructor(producto, price, name,percentage, description, comprado, img) {
      this.producto = producto;
      this.price = price;
      this.name = name;
      this.percentage = percentage;
      this.description = description;
      this.comprado = comprado;
      this.img = img;
    }
  
}