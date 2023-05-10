const valor_compra_dolar_oficial = 227.97
const valor_venta_dolar_oficial = 235.89
const valor_compra_dolar_blue = 466
const valor_venta_venta_blue = 471



// 1) monto
// 2) compra/venta
// 3) 

const Bienvenida = alert("Bienvenido, vamos a cotizar en dolar su monto.")

function compra_dolar_blue(monto) {
    return monto * valor_compra_dolar_blue
};

function venta_dolar_blue(monto) {
    return monto * valor_venta_venta_blue
};

function compra_dolar_oficial(monto) {
    return monto * valor_compra_dolar_oficial
};

function venta_dolar_oficial(monto) {
    return monto * valor_venta_dolar_oficial
};

for (let i = 0; i < 1000; i++) {
    let monto_operacion = parseInt(prompt("¿Cuanto desea cotizar?"))
    let monto_inicial = monto_operacion
    let tipo_moneda = prompt("Desea cotizar al valor OFICIAL o BLUE").toLowerCase()
     if (tipo_moneda == "oficial") {
        let tipo_operacion = prompt("Desea cotizar COMPRA o VENTA").toLowerCase()
          if (tipo_operacion == "compra") {
            let cotizacion_compra_oficial = compra_dolar_oficial(monto_inicial);
            alert(`El monto total es ${cotizacion_compra_oficial}`)
          }
          if (tipo_operacion == "venta") {
            let cotizacion_venta_oficial = venta_dolar_oficial(monto_inicial);
            alert(`El monto total es ${cotizacion_venta_oficial}`)
          }
          
     }
     if (tipo_moneda == "blue") {
        let tipo_operacion = prompt("Desea cotizar COMPRA o VENTA").toLowerCase()
          if (tipo_operacion == "compra") {
            let cotizacion_compra_blue = compra_dolar_blue(monto_inicial);
            alert(`El monto total es ${cotizacion_compra_blue}`)
          }
          if (tipo_operacion == "venta") {
            let cotizacion_venta_blue = venta_dolar_blue(monto_inicial);
            alert(`El monto total es ${cotizacion_venta_blue}`)
          }
          
     }
}

