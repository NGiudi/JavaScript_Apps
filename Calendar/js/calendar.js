const nombreMeses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
                     'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const arrowLeft = document.getElementById ('arrowLeft'),
      arrowRigth = document.getElementById ('arrowRigth');

let mesMostrar = moment ();

generarDias (mesMostrar);

arrowRigth.addEventListener ('click', mesSigiente);
arrowLeft.addEventListener ('click', mesAnterior);

/************************************************************************************************
                           FUNCIONES DE PROCESAMIENTO DE LAS FECHAS
          *************************************************************************/
function generarDias (fecha) {
    let primerDia = moment (fecha).startOf('Month'); // Guardo el primer dia del mes.
    // Voy retrocediendo dias hasta llegar al domingo.
    while (primerDia.day())
        primerDia.subtract (1, 'days');
    // Imprimo todos los dias en pantalla.
    for (let i=0; i<42; i++){
        imprimirDiasHTML (primerDia, fecha.month());
        primerDia.add (1, 'days');
    }

    imprimirMesYAnio (fecha);
}

/************************************************************************************************
                    FUNCIONES DE LOS EVENTOS DE CLICK PARA CAMBIAR EL MES
          *************************************************************************/
function mesAnterior (){
    mesMostrar.subtract (1, 'month');
    gridBody.innerHTML = ''; // Elimino todo el contenido del mes presentado anteriormente.
    generarDias (mesMostrar);
}

function mesSigiente (){
    mesMostrar.add (1, 'month');
    gridBody.innerHTML = ''; // Elimino todo el contenido del mes presentado anteriormente.
    generarDias (mesMostrar);
}

/************************************************************************************************
                    FUNCIONES DE PRESENTACION DE INFORMACION EN EL DOM
          *************************************************************************/
function imprimirDiasHTML (fecha, mesActual){
    const gridBody = document.getElementById ('gridBody'),
          elemento = document.createElement ('span'),
          hoy = moment ();
    
    if (fecha.month() === mesActual)
        elemento.classList.add ('enable');
    else
        elemento.classList.add ('disable');  
    
    elemento.textContent = fecha.date ();
    gridBody.appendChild (elemento);
}

function imprimirMesYAnio (fecha){
    const anio = document.getElementById ('year'),
          mes = document.getElementById ('month');

    anio.textContent = fecha.year();
    mes.textContent = nombreMeses[fecha.month()];
}   