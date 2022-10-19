
class Inventory {
    constructor(productos){
        this.productos = productos;
        this.next=null;
    }
}
    class Lista{
        constructor(){
            this.primero=null;
        }
        addProduct(nuevo){
            if (this.primero==null){
                this.primero=nuevo;
            }
            else{
                let temp=this.primero;
                while (temp.next!=null)
                temp=temp.next;
                temp.next=nuevo;
            }
        }


        foundProduct(codigo){
            if(this.primero == null){
                return false;
            }
            let temp = this.primero;
            while(temp != null){
                if(temp.codigo == codigo){
                    return temp;
                }
                temp = temp.next;
            }
            return null;
        }

        deleteProduct(codigo){
            if(this.primero == null){
                return false;
            }else if(this.primero.codigo == codigo){
                this.primero = this.primero.next;
                return true;
            }
            let temp = this.primero;
            while(temp != null){
                if(temp.next.codigo != codigo){
                    temp = temp.next;
                }else{
                    temp.next = temp.next.next;
                    return true;
                }
            }
            return false;
        }

        insertProduct(nuevo, posicion){
            if(this.primero == null){
                return false;
            }
            if(this.primero == null){
                this.primero = nuevo;
                return true;
            }
            let temp = this.primero;
            let count = 1;
            while(temp != null){
                if(count == posicion && posicion == 1){
                    this.primero = nuevo;
                    nuevo.next = temp;
                    return true;
                } else if(count+1 == posicion){
                    nuevo.next = temp.next;
                    temp.next = nuevo;
                    return true;
                } else if(temp.next == null && count < posicion){
                    temp.next = nuevo;
                    nuevo.next = null;
                    return true;
                }
                temp = temp.next;
                count++;
            }
            return false;
        }

        list(){
            let listaData=" ";
            let temp = this.primero;
            while (temp!=null) {
                listaData+=temp.data();
                temp=temp.next;
            }
            return listaData;
        }

        inverseList(){
            let dato = '';
            let aux = this.primero;
            while (aux!=null) {
                dato = aux.data() + dato;
                aux=aux.next;
            }
            return dato;
        }

    }



class Productos {
    constructor(codigo,nombre,cantidad,costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;

    }

    data(){
        return `El Codigo del producto es: ${this.codigo}, 
                El Nombre del producto es: ${this.nombre}, 
                La Cantidad del producto es: ${this.cantidad}, 
                El Costo del producto es: ${this.costo} 
                </br>`;
        
    }
}






let lista = new Lista();
const addProducto = document.getElementById('btnAgregar');

addProducto.addEventListener('click',()=>{
    let codigo = parseInt(document.getElementById('codigo').value);
    let nombre = document.getElementById('nombre').value;
    let cantidad = document.getElementById('cantidad').value;
    let costo = document.getElementById('costo').value;

    let producto = new Productos(codigo, nombre, cantidad, costo);

    let saveProduct = lista.addProduct(producto);

    document.getElementById('inventario').innerHTML = '<ul>El producto ha sido añadido con éxito!.</ul>'
})


const removeProduct = document.getElementById('eliminar');

removeProduct.addEventListener('click',()=>{
    let codigo = document.getElementById('found-product').value;
    lista.deleteProduct(codigo);
    document.getElementById('inventario').innerHTML = '<ul>El producto ha sido eliminado con éxito!.</ul>'
})


const inversoProduct = document.getElementById('listar-inverso');

inversoProduct.addEventListener('click',()=>{
    document.getElementById('inventario').innerHTML += lista.inverseList();
})

const listarProduct = document.getElementById('listar-invent');

listarProduct.addEventListener('click',()=>{

    document.getElementById('inventario').innerHTML = '';
    document.getElementById('inventario').innerHTML += lista.list();

})


const foundProduct = document.getElementById('found');

foundProduct.addEventListener('click',()=>{
    let codigo = document.getElementById('found-product').value;
    let productoFound = lista.foundProduct(codigo);
    // inventario.buscarProducto(codigo);
    //document.getElementById('inventario').innerHTML += productoFound.data();
    if(productoFound){
        document.getElementById('inventario').innerHTML  = '<ul>El producto ha sido encontrado con éxito!.</ul>'
        //FUNCIONO DEVOLVER LA DESCRIPCION DEL PRODUCTO
        document.getElementById('inventario').innerHTML += productoFound.data();
    } else {
        document.getElementById('inventario').innerHTML  = '<ul>El producto no ha sido encontrado!.</ul>'
    }
})


const posiProduct = document.getElementById('insertar-prod');

posiProduct.addEventListener('click',()=>{
    let codigo = parseInt(document.getElementById('codigo').value);
    let nombre = document.getElementById('nombre').value;
    let cantidad = document.getElementById('cantidad').value;
    let costo = document.getElementById('costo').value;
    let posicion = document.getElementById('posicion').value;

    let producto = new Productos(codigo, nombre, cantidad, costo);

    let saveProduct = lista.insertProduct(producto,posicion);

    document.getElementById('inventario').innerHTML = '<ul>El producto ha sido insertado en la posición con éxito!.</ul>'
})




