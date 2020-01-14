/* var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

var d = new Date();
console.log("date",d);
console.log("dias",d.getDay());
console.log("mes",d.getMonth());
console.log("year",d.getFullYear());

var fecha =  dias[d.getDay()] +' ' + d.getDate()+' '+ meses[d.getMonth()] + ' del ' +d.getFullYear();
document.getElementById("fecha").innerHTML = fecha; */

function recursiva(num){ 
    num -= 1 
    if (num > 0 ){
         recursiva(num)
    }else{
        console.log("fin de la funcion")
    }
}