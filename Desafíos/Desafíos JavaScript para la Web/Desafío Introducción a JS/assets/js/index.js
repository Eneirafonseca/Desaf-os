const precio = 10000

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0

});

document.getElementById("calcularTotal").addEventListener("click", function () {
    const cantidad = document.getElementById("cantidad").value;
    const precioFinal = cantidad * precio;
    const color = document.getElementById("eligeColor").value

    document.getElementById("precioTotal").innerText = (formatter.format(precioFinal))
    document.getElementById("cantidadTotal").innerText = cantidad
    document.getElementById("circle").style.backgroundColor = color


})


