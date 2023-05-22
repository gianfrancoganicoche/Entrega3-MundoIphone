let productList = [];

productList.push(new Producto('Iphone 13 Mini', 709));
productList.push(new Producto('Iphone 13', 809));
productList.push(new Producto('Iphone 14', 909));
productList.push(new Producto('Iphone 14 Max', 1059));
productList.push(new Producto('Iphone 14 Pro', 1219));
productList.push(new Producto('Iphone 14 Pro Max', 1369));
productList.push(new Producto('Iphone 12', 809));
productList.push(new Producto('Iphone 11 ProMax', 1329));
productList.push(new Producto('Iphone 11 Pro', 1229));


let productSelect = document.getElementById('listaProductos');
productList.forEach((producto) => {
    let option = document.createElement('option');
    option.innerText = `${producto.nombre}: $${producto.precio}`;
    option.value = producto.nombre;
    productSelect.appendChild(option);
});

document.getElementById('add-item').addEventListener('click', () => {
    let nombreProducto = document.getElementById('listaProductos').value;
    let cantidad = parseInt(document.getElementById('quantity').value);

    if (nombreProducto && cantidad && cantidad > 0) {
        producto = productList.find((item) => {
            return item.nombre === nombreProducto;
        });

        if (producto) {
            agregarItemAlCarrito(producto.nombre, producto.precio, cantidad);
            document.getElementById('product-list').value = '';
            document.getElementById('quantity').value = '';
        }
    }
});

document.getElementById('vaciarCarrito').addEventListener('click', () => {
    vaciarCarrito();
});

document.getElementById('ordenarCarrito').addEventListener('click', () => {
    ordenarCarritoPorPrecio();
});

actualizarItemsDelCarrito();
