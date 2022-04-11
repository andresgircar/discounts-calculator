function calcularPrecioConDescuento (precio, descuento) {
    const porcentajeDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDescuento)/100;
    return precioConDescuento;
}
function calcularPrecioFinal() {
    const inputPrice = document.getElementById("price-input");
    const priceValue= inputPrice.value;
    const inputDiscount = document.getElementById("discount-input");
    const discountValue= inputDiscount.value;
    const precioFinal = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("output-text");
    resultP.innerText = "El precio que debes pagar después de aplicar el descuento es: $" + precioFinal;
}
const couponsList = [
    
]