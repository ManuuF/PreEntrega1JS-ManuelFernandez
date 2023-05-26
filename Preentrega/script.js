const valor_compra_dolar_oficial = 227.97
const valor_venta_dolar_oficial = 235.89
const valor_compra_dolar_blue = 466
const valor_venta_venta_blue = 471


const Bienvenida = alert("Bienvenido, vamos a cotizar en dolar su monto.")



function validar_num(numero, mensaje){
  while(isNaN(numero)){
    alert("Por favor ingresar un dato numerico")
    numero = parseInt(prompt(mensaje))
  }
  return numero;
}

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


  class Divisa{
    constructor(id, moneda){
      this.id = id,
      this.moneda = moneda
    }
  }
  
  const divisa1 = new Divisa(1,"Dolar Oficial")
  const divisa2 = new Divisa(2,"Dolar Blue")
  
  const DIVISAS = [divisa1,divisa2]

function pregunta_1(){
  let primera_pregunta = "Elija que moneda desea cotizar:  \n";

  DIVISAS.forEach(e => {
    primera_pregunta += `${e.id} - ${e.moneda} \n`
  })
  
  let respuesta_user = parseInt(prompt(primera_pregunta));
  respuesta_user = validar_num(respuesta_user, primera_pregunta);
  return DIVISAS.find(elem => elem.id === respuesta_user );
  
}

const divisa_elegida = pregunta_1()

class Operacion{
  constructor(id, accion){
    this.id = id,
    this.accion = accion
  }
}

const operacion1 = new Operacion(1,"Compra")
const operacion2 = new Operacion(2,"Venta")

const OPERACIONES = [operacion1,operacion2]

function pregunta_2(){
  let segunda_pregunta = "Elija que operacion desea realizar:  \n";

  OPERACIONES.forEach(e => {
    segunda_pregunta += `${e.id} - ${e.accion} \n`
  })
  
  let respuesta_user2 = parseInt(prompt(segunda_pregunta));
  respuesta_user2 = validar_num(respuesta_user2, segunda_pregunta)
  return OPERACIONES.find(elem => elem.id === respuesta_user2 );
}

const operacion_elegida = pregunta_2()
  
function pregunta_3 (){
  let monto_operacion = parseInt(prompt("¿Cuanto desea cotizar?"))
  let monto_inicial = monto_operacion
  if ((divisa_elegida == 1) & (operacion_elegida == 1)){
    let cotizacion_compra_oficial = compra_dolar_oficial(monto_inicial);
    alert(`El monto total es ${cotizacion_compra_oficial}`)
  }
  if ((divisa_elegida == 1) & (operacion_elegida == 2)) {
    let cotizacion_venta_oficial = venta_dolar_oficial(monto_inicial);
    alert(`El monto total es ${cotizacion_venta_oficial}`)
  }
  if ((divisa_elegida == 2) & (operacion_elegida == 1)) {
    let cotizacion_compra_blue = compra_dolar_blue(monto_inicial);
    alert(`El monto total es ${cotizacion_compra_blue}`)
  }
  if ((divisa_elegida == 2) & (operacion_elegida == 2)) {
    let cotizacion_venta_blue = venta_dolar_blue(monto_inicial);
    alert(`El monto total es ${cotizacion_venta_blue}`)
  }
}

    
  






