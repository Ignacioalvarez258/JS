// ejecercicio 1
function piramide(numero){ 
   let rs=[]
    for(let i=1;i<=numero;i++){
        rs.push(i)
        console.log(rs)
    }
}
piramide(6)

//ejercicio 2

function comparaarray(arra1, arra2) {
    let arr = [];
    for (let i = 0; i < arra1.length; i++) {
      if (arra2.includes(arra1[i])){
        arr.push(arra1[i]);
      }
    }
    return arr;
  } 
  

console.log(comparaarray(["mono","marioneta","casa",12,true],[true,"vaca","perro",132,"marioneta"]))

// ejercicio 3


class carrito{
   

    constructor(){
      
      this.totalcarrito = 0
      this.productos=[]
    }
    agregarProducto(producto, monto,unidades) {
        this.totalcarrito= this.totalcarrito + (monto * unidades)
        if(this.productos.includes(producto)){
          console.log(`el ${producto} ya esta en el carrito con ${unidades}`)
        }
        else{
            this.productos.push(producto)
        }

    } 
}

let carrito2 =new carrito()
 carrito2.agregarProducto("casa",12,2)
 carrito2.agregarProducto("mono",3,2)
 carrito2.agregarProducto("mono",4,5) 
console.log(carrito2)


