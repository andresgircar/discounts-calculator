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
    {
        name: "10%OFF",
        discount: 10,
    },
    {
        name: "15%OFF",
        discount: 15,
    },
    {
        name: "30%OFF",
        discount: 30,
    },
    {
        name: "50%OFF",
        discount: 50,
    },
    {
        name: "75%OFF",
        discount: 75,
    },
]

function calcularPrecioFinalConCupon() {
    const inputPrice = document.getElementById("price-input");
    const priceValue= inputPrice.value;
    const inputCoupon = document.getElementById("coupons");
    const couponValue= inputCoupon.value;
    if (couponValue === "list-info") {
        swal("Selecciona un cupón de la lista");
    }
    const couponValidation = function(coupon) {
        return coupon.name === couponValue;
    }
    const userCoupon = couponsList.find(couponValidation);
    const userCouponValue = userCoupon.discount;
    const precioFinalCupon = calcularPrecioConDescuento(priceValue, userCouponValue);
    const resultP = document.getElementById("output-text");
    resultP.innerText = "El precio que debes pagar después de aplicar el descuento es: $" + precioFinalCupon;
}