document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('id-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const cantidad = parseInt(document.getElementById('cantidad').value);
        const fecha = document.getElementById('fecha').value;
        const metodoPago = document.getElementById('metodo-pago').value;

        const compra = {
            nombre: nombre,
            apellido: apellido,
            cantidad: cantidad,
            fecha: fecha,
            metodoPago: metodoPago
        };

        // Obtener las compras anteriores del localStorage
        let compras = JSON.parse(localStorage.getItem('compras')) || [];
        compras.push(compra);

        // Guardar en el localStorage
        localStorage.setItem('compras', JSON.stringify(compras));

        alert('¡Compra realizada con éxito!');

        // Redireccionar a la página principal
        window.location.href = 'index.html';
    });
});
