// Agregar un item al carrito
function agregarItemAlCarrito(nombre, precio, cantidad) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ nombre: nombre, precio: precio, cantidad: cantidad });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarItemsDelCarrito();
}

// Quitar un item del carrito
function quitarItemDelCarrito(index) {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarItemsDelCarrito();
}

// Vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    actualizarItemsDelCarrito();
}

// Ordenar el carrito por precio total
function ordenarCarritoPorPrecio() {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.sort((a, b) => {
        let precioTotalA = a.precio * a.cantidad;
        let precioTotalB = b.precio * b.cantidad;
        return precioTotalA - precioTotalB;
    });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarItemsDelCarrito();
}

// Actualizar la lista de items en el carrito
function actualizarItemsDelCarrito() {
    let listaItems = document.getElementById('item-list');
    listaItems.innerHTML = '';
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;
    carrito.forEach((item, index) => {
        listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        let nombreDiv = document.createElement('div');
        nombreDiv.textContent = item.nombre;
        listItem.appendChild(nombreDiv);

        let cantidadDiv = document.createElement('div');
        cantidadDiv.textContent = 'Cantidad: ' + item.cantidad;
        listItem.appendChild(cantidadDiv);

        let precioTotalDiv = document.createElement('div');

        let precioTotal = item.precio * item.cantidad;
        precioTotalDiv.textContent = 'Precio Total: $' + precioTotal;
        listItem.appendChild(precioTotalDiv);

        let botonQuitar = document.createElement('button');
        botonQuitar.textContent = 'Quitar';
        botonQuitar.className = 'btn btn-danger btn-sm float-right';
        botonQuitar.addEventListener('click', () => {
            quitarItemDelCarrito(index);
        });

        listItem.appendChild(botonQuitar);
        listaItems.appendChild(listItem);
        total += precioTotal;
    });

    document.getElementById('total-price').textContent = total;
}