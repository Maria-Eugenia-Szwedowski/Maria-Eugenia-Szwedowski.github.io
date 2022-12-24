
function calcular() {   
    
  const feriados = [
      [1], //Enero
      [],  // Febrero
      [], // Marzo
      [], // Abril
      [1], // Mayo
      [], //Junio
      [18], //Julio
      [25], // Agosto
      [], //Septiembre
      [], //Octubre
      [], //Noviembre
      [25] //Diciembre
  ];
  var fInicial = document.getElementById('fInicial').value;
  var dHabilSiguiente = new Date(Date.parse(fInicial));
  const diaInicial = calculaHabilesTotales(dHabilSiguiente, 0, feriados);

  const diasTramite = parseInt(document.getElementById('dias').value);
  const resultado = calculaHabilesTotales(diaInicial, diasTramite, feriados);
  
  resulta = resultado.getDate() + '/' +
          (resultado.getMonth() + 1) + '/' + 
           resultado.getFullYear();

  document.getElementById('fFinal').innerHTML = resulta;
  var caja = document.getElementById("mostrar");
  mostrar.style.display = "block";

  }

function calculaHabiles(dInicio, nDias, dFeriados) {
  let diaPropuesto = new Date(dInicio.getFullYear(), dInicio.getMonth(), dInicio.getDate());
  let i = 1;
  while (nDias > 0 ) {
      let festivo = false;
      diaPropuesto = new Date(dInicio.getFullYear(), dInicio.getMonth(), dInicio.getDate() + i);
      if (diaPropuesto.getDay() > 0 && diaPropuesto.getDay() < 6) {

          let m = diaPropuesto.getMonth();
          let dia = diaPropuesto.getDate();

          for (let d in dFeriados[m]) {
              if (dia === dFeriados[m][d]) {
                  festivo = true;
                  break;
              }
          } 

          if (!festivo) {
              nDias--;
          }
      }
      i++;
  } 
  return diaPropuesto;
} 




