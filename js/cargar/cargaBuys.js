 //Buy Tela
 function contrucionBuyTela(){
  var buyTela = new Set();

  const m1 = new Buy(0, 2000, "Aumento de parcela")
  buyTela.add(m1);

  return buyTela;
}

//Buy Camiseta
function contrucionBuyCamiseta(){

  var buyCamiseta = new Set();

  const m1 = new Buy(1, 5000, "Garaje")
  buyCamiseta.add(m1);

  const m2 = new Buy(1, 10000, "Pequeño taller de costura")
  buyCamiseta.add(m2);

  const m3 = new Buy(1, 25000, "Edificio de fabricación de ropa")
  buyCamiseta.add(m3);

  const m4 = new Buy(1, 50000, "Fábrica")
  buyCamiseta.add(m4);

  const m5 = new Buy(1, 100000, "Parque industrial")
  buyCamiseta.add(m5);

  return buyCamiseta;
}

//Buy Money
function construcionBuyMoney(){

  var buyMoney = new Set();

  const m1 = new Buy(2, 5000, "Carrito ambulante")
  buyMoney.add(m1);

  return buyMoney;
}



class Buy {
    producto; // 0 -> Tela / 1-> Camiseta / 2-> Dinero
    price;
    description;

  
    constructor(producto, price, description) {
      this.producto = producto;
      this.price = price;
      this.description = description;
    }
}