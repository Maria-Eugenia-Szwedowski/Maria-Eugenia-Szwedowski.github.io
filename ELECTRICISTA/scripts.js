function limpiar() {
    document.getElementById('FactorPotencia').reset();  
    document.getElementById('coseno').innerHTM =''; 
    document.getElementById('tangente').innerHTM= ''; 
}


function calcular(){
    var v = parseFloat(document.getElementById('voltaje').value,10);
    var a = parseFloat(document.getElementById('corriente').value,10);
    var pa = parseFloat(document.getElementById('pactiva').value,10);
    var fpUte = document.getElementById("myCheck");
    var fpAdd = document.getElementById("myCheck2");
    var fpAdd2 = parseFloat(document.getElementById('agregado').value,10);

    var fp = pa / (v * a );
    var tg = Math.tan(Math.acos(fp));
    var fpAjuste;
    var tgAjuste;

    if (fpUte.checked == true){
        fpAjuste = 0.92;
        tgAjuste = Math.tan(Math.acos(fpAjuste));
    } else if(fpAdd.checked == true){
        tgAjuste = Math.tan(Math.acos(fpAdd2));
    }

    var qcondensador = pa*(tg-tgAjuste);
    
    document.getElementById('coseno').innerHTML =  fp;
    document.getElementById('tangente').innerHTML =  tg;
    document.getElementById('qcondensador').innerHTML =  qcondensador;
    
}

function valorute() {
    var checkBox = document.getElementById("myCheck");
    var checkBox2 = document.getElementById("myCheck2");
    var checkBoxText2 = document.getElementById("myCheck2Text");

    if (checkBox.checked == true){
        text.style.display = "block";
        myCheck2.style.display = "none";
        myCheck2Text.style.display = "none";
      } else {
        text.style.display = "none";
        myCheck2.style.display = "block";
        myCheck2Text.style.display = "block";
      }
    }

    function valor() {
        var checkBox = document.getElementById("myCheck2");
        var checkBox2 = document.getElementById("myCheck");
        var checkBoxText = document.getElementById("myCheckText");
    
        if (checkBox.checked == true){
            agregado.style.display = "block";
            myCheck.style.display = "none";
            myCheckText.style.display = "none";
          } else {
            agregado.style.display = "none";
            myCheck.style.display = "block";
            myCheckText.style.display = "block";
          }
        }

        
 
        

   
        