// js de Tiempo Dojo


//eventos
const msg_alerta = (elem) => {
    //mostrando la alerta 
    alert("pulso boton " + elem.target.innerText);
}

const elim_cuadro = (elem) => {    
    elem.path[1].remove();
}

function muestra_temperatura (opc) {
    let arr_tmax = [24, 27, 21, 26 ];
    let arr_tmin = [18, 19, 16, 21 ];
    let opcion = parseInt(opc);
    let colec_max = document.querySelectorAll(".temp_max");
    let colec_min = document.querySelectorAll(".temp_min");
    let calculo=0;
    
    if (opcion == 1) {
        for (let index = 0; index < colec_max.length; index++) {
            colec_max[index].innerText = arr_tmax[index]+"°";
        }
        for (let index = 0; index < colec_min.length; index++) {
            colec_min[index].innerText = arr_tmin[index]+"°";
        }
    } if (opcion ==2) {
        //(5 °C × 9/5) + 32 = 41 °F
        for (let index = 0; index < colec_max.length; index++) {
            calculo = ( arr_tmax[index] * (9/5) ) + 32;
            calculo = Math.round(calculo);
            colec_max[index].innerText = calculo +"°";
        }
        for (let index = 0; index < colec_min.length; index++) {
            calculo = ( arr_tmin[index] * (9/5) ) + 32;
            calculo = Math.round(calculo);
            colec_min[index].innerText = calculo +"°";
        }

    } 
}
//cargando el evento click en los link
var elements = document.querySelectorAll('li');

//para que boton eliminee el bloque coockid
var el_cook = document.querySelector('.buton_coockie');
for (let index = 0; index < elements.length; index++) {
    elements[index].addEventListener("click", msg_alerta);
}

//para seleccion el elemento select
var el_select = document.querySelector('select');
el_select.addEventListener('change', (event) => {
    muestra_temperatura (event.target.value);
});

//carga la temperatura por defecto, celsius
muestra_temperatura(1);
