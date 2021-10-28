var Thinta = document.getElementById('hpalkka'.valueOf());
var ILMäärä = document.getElementsByClassName('SummaField')[0].value;
var LLMäärä = document.getElementsByClassName('SummaField')[1].value;
var YöMäärä = document.getElementsByClassName('SummaField')[2].value;
var SuMäärä = document.getElementsByClassName('SummaField')[3].value;

//tämä sälä näyttää lisät
document.getElementById('lisät').addEventListener("change", näytäLisät);

function näytäLisät(){
   document.getElementsByClassName('lisävalinnat')[0].style.display ="block";
}
//yritä saada katoamaankin kun ehdit
//document.getElementById('lisät').addEventListener("change", piilotaLisät);
//function piilotaLisät(){
 //   document.getElementsByClassName('lisävalinnat')[0].style.display ="none";
//}
document.getElementById('iLisä').addEventListener("change", näytäI);

function näytäI(){
 document.getElementsByClassName('SummaField')[0].style.display ="block";
}

document.getElementById('YLisä').addEventListener("change", näytäY);

function näytäY(){
 document.getElementsByClassName('SummaField')[1].style.display ="block";
}

document.getElementById('LLisä').addEventListener("change", näytäL);

function näytäL(){
 document.getElementsByClassName('SummaField')[2].style.display ="block";
}

document.getElementById('SLisä').addEventListener("change", näytäS);

function näytäS(){
    document.getElementsByClassName('SummaField')[3].style.display ="block";
   }
   
   document.getElementById('iLisä').addEventListener("change", näytäI);



document.getElementById('Lisää').addEventListener("click",lisääPäivä);



function lisääPäivä(){
    var table =document.getElementById('työListaus');
   var row = table.insertRow();
   var cell1 =row.insertCell(0)
    var cell2 =row.insertCell(1);
    var cell3 =row.insertCell(2);

    var Nro = document.getElementById('työListaus').rows.length;
    var ThisRow = Nro-1;
    cell1.innerHTML= ThisRow; 


  var päivä = document.getElementsByClassName('päiväValinta');
  
   if(päivä[0].checked){
      var val1=päivä[0].value;
      cell2.innerHTML= val1;
      
      }

  else if(päivä[1].checked){
   var val2=päivä[1].value;
   cell2.innerHTML= val2;

   }
   else if(päivä[2].checked){
      var val3=päivä[2].value;
    
      cell2.innerHTML= val3;
    } 

    var Hs =document.getElementById('Tunnit');
   var TehdytH =Hs.value;
   cell3.innerHTML=TehdytH;
   //console.log(TehdytH);
}

document.getElementById('laskeP').addEventListener('click',laske);

function laske(){
  var tarkastaja = document.getElementById('hpalkka').value;
  
  if (tarkastaja == ""){
     alert("Ole hyvä ja täytä tiedot");
     document.getElementById('hpalkka').style.borderColor = "red";
   }
  else if (tarkastaja <= 6){
      alert("Et saa edes lakisääteistä minimi palkkaa");
      document.getElementById('hpalkka').style.borderBlockColor="red";
   }
   else{

   var Thinta = document.getElementById('hpalkka').value;
   var Hs = document.getElementById('Tunnit').value;
   var Ppalkka = Thinta*Hs;
   console.log (Thinta);
   console.log(Hs);
   console.log(Ppalkka);
   document.getElementById('yhteensä').innerHTML=Ppalkka.toString()+"€";
   document.getElementById('hpalkka').style.borderColor ='';

   
   localStorage.setItem("Tallenna", Ppalkka.toString());
   document.getElementById('demo').innerHTML = localStorage.getItem("Tallenna");
   }
}



