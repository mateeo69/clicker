//Upgrades tela 
function construccionUpgradeTela(){
        var upgradesTela = new Set();
        //Mejoras enfocada a la produccion de tela
        const m1 = new Upgrade(0, 2000, "Mejora de herramientas de recolección",5,"Aumento de un 5% de la eficiencia de los agricultores", false)
        upgradesTela.add(m1);

        const m2 = new Upgrade(0, 2000, "Mejora equipamiento del personal",5,"Aumento de un 5% de la eficiencia de los agricultores", false)
        upgradesTela.add(m2);

        const m3 = new Upgrade(0, 2000, "Bonus para el trabajador por tela recogida",5,"Aumento de un 5% de la eficiencia de los agricultores", false)
        upgradesTela.add(m3);


        //Esto iría mas a la seccion de dinero creo
        const m4 = new Upgrade(0, 2000, "Produccion de cultivos de mas calidad",5,"Aumento el precio de la venta de las camisetas", false)
        upgradesTela.add(m4);

        //Por cada color una mejora????
        const m5 = new Upgrade(0, 2000, "Producción de mas colores",5,"Aumento el precio de la venta de las camisetas", false)
        upgradesTela.add(m5);

        return upgradesTela;
}

    //Upgrades Camisetas
function construccionUpgradeCamisetas(){
    var upgradesCamiseta = new Set();

        //Mejoras enfocada a la produccion de camisetas
        const m1 = new Upgrade(1, 2000, "Curso textil avanzado para trabajadores",5,"Aumento de un 5% de la eficiencia de los trabajadores", false)
        upgradesCamiseta.add(m1);

        const m2 = new Upgrade(1, 2000, "Compra de maquinas de hilar",5,"Aumento de un 5% de la eficiencia de los trabajadores", false)
        upgradesCamiseta.add(m2);

        const m3 = new Upgrade(1, 2000, "Compra de telar mecánico",5,"Aumento de un 5% de la eficiencia de los trabajadores", false)
        upgradesCamiseta.add(m3);

        const m4 = new Upgrade(1, 2000, "Compra de máquina de vapor",5,"Aumento de un 5% de la eficiencia de los trabajadores", false)
        upgradesCamiseta.add(m4);

        const m5 = new Upgrade(1, 2000, "Compra de máquina de coser",5,"Aumento de un 5% de la eficiencia de los trabajadores", false)
        upgradesCamiseta.add(m5);

        const m6 = new Upgrade(1, 2000, "Compra de máquina de teñir y acabado",5,"Aumento de un 5% de la eficiencia de los trabajadores", false)
        upgradesCamiseta.add(m6);

        const m7 = new Upgrade(1, 2000, "Avance en automatización y robótica",5,"Aumento de un 5% de la eficiencia de los trabajadores", false)
        upgradesCamiseta.add(m7);

        const m8 = new Upgrade(1, 2000, "Compra de máquina de impresión en 3D textil",5,"Aumento de un 5% de la eficiencia de los trabajadores", false)
        upgradesCamiseta.add(m8);

        const m9 = new Upgrade(1, 2000, "Bonus para trabajador por camiseta fabricada",5,"Aumento de un 5% de la eficiencia de los trabajadores", false)
        upgradesCamiseta.add(m9);

    return upgradesCamiseta;
}

    //Upgrades Money
function construccionUpgradeMoney(){
    var upgradesMoney = new Set();
        //Mejoras enfocada a la produccion de money

        //Aquí en vez de 1 en general, y yendo en escala de influencers (1 -> 100 seguidores, 99 -> 3 millones)
        const m1 = new Upgrade(2, 2000, "Marketing con influencers",5,"Aumento de un 5% de la eficiencia de los vendedores", false)
        upgradesMoney.add(m1);

        const m2 = new Upgrade(2, 2000, "Subida de videos en tiktok",5,"Aumento de un 5% de la eficiencia de los vendedores", false)
        upgradesMoney.add(m2);

        const m3 = new Upgrade(2, 2000, "Directos en twitch",5,"Aumento de un 5% de la eficiencia de los vendedores", false)
        upgradesMoney.add(m3);

        const m4 = new Upgrade(2, 2000, "Creación de página web y posicionamiento SEO",5,"Aumento de un 5% de la eficiencia de los vendedores", false)
        upgradesMoney.add(m4);

        const m5 = new Upgrade(2, 2000, "Bonus para trabajador por camiseta vendida",5,"Aumento de un 5% de la eficiencia de los vendedores", false)
        upgradesMoney.add(m5);

    return upgradesMoney;
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

  
    constructor(producto, price, name,percentage, description, comprado) {
      this.producto = producto;
      this.price = price;
      this.name = name;
      this.percentage = percentage;
      this.description = description;
      this.comprado = comprado;
    }
  
}