var flag = true;
var todolist=[];
var vendidos=[];
var stockcero=[];

function agregar(codigo,descripcion,tipo,preciocompra,precioventa,stock){
    var producto={
        codigo:codigo,
        descripcion:descripcion,
        tipo:tipo,
        preciocompra:preciocompra,
        precioventa:precioventa,
        stock:stock
    }
    todolist.push(producto);
    return 0;
}
function modificar(codigo,stock){
    for(var i in todolist){
        if(todolist[i].codigo=codigo){
            todolist[i].stock=stock;
            break;
        }    
    }
    return 0;
}
function vender(codigo){
    for(var i in todolist){
        if(todolist[i].codigo=codigo){
            todolist[i].stock-=1;
            vendidos.push(todolist[i]);
            break;
        }    
    }
    return 0;
}
function promedio(){
    let suma=0;
    for(let vendido of vendidos){
        suma+=vendido.precioventa;   
    }
    console.log("promedio de ventas: "+suma/vendidos.length);
    return 0;
}
function stockx(){
    for(let producto of todolist){
        if(producto.stock==0){
            stockcero.push(producto);
        }
    }
    console.log(stockcero);
    return 0;
}

while(flag)
{
  var opcion = prompt("1.Agregar producto.\n2.Modificar Stock\n3.Registrar venta y reducir stock.\n4.Mostrar promedio de ventas\n5.Mostrar productos con stock.\n6.Salir.");

  switch(opcion)
  {
      case "1":
        var codigo=prompt("codigo");
        var descripcion=prompt("descripcion");
        var tipo=prompt("tipo");
        var preciocompra=prompt("preciocompra");
        var precioventa=prompt("precioventa");
        var stock=prompt("stock");
        agregar(codigo,descripcion,tipo,preciocompra,precioventa,stock);
        break;
      case "2":
        var codigo=prompt("codigo");
        var stock=prompt("stock nuevo");
        modificar(codigo,stock);
        break;
      case "3":
        var codigo=prompt("codigo de venta");
        vender(codigo);
        break;
      case "4":
        promedio();
        break;
      case "5":
        stockx();
        break;
      case "6":
        flag = false;
        break;
        case null:
        flag = false;
        break;
      default:
        alert("Elija una opcion valida");
        break;
  }
}