document.getElementById('Lisää').addEventListener("click",lisääPäivä);


function lisääPäivä(){
/*    var table =document.getElementById('työListaus');
   var row = table.insertRow();
   var cell1 =row.insertCell(0); */
  // var cell2 =row.insertCell(0);
 /*   var Nro = document.getElementById('työListaus').rows.length-1;
   cell1.innerHTML= Nro; */


  /*  var päivä = document.getElementsByClassName('päiväValinta');
  
   if(päivä[0].checked){
      var val1=päivä[0].value;
      cell2.innerHTML= val1;
      alert(val1);
      }

  else if(päivä[1].checked){
   var val2=päivä[1].value;
   cell2.innerHTML= val2;
   alert(val2);
   }
   else if(päivä[2].checked){
      var val3=päivä[2].value;
      alert(val3);
      cell2.innerHTML= val3;
} */
   
 

  
/* function LakeTunnit(alku, loppu) {
       alku = alku.split(":");
       loppu = loppu.split(":");
       var startDate = new Date(0, 0, 0, start[0], start[1], 0);
       var endDate = new Date(0, 0, 0, end[0], end[1], 0);
       var LaskeTunnit = endDate.getTime() - startDate.getTime();
       var hours = Math.floor(diff / 1000 / 60 / 60);
       diff -= hours * 1000 * 60 * 60;
       var minutes = Math.floor(diff / 1000 / 60);
   
       // If using time pickers with 24 hours format, add the below line get exact hours
       if (hours < 0)
          hours = hours + 24;
   
       return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes; */
 //  } 


 var alku = document.getElementById('alku');
 var loppu = document.getElementById('loppu');
 var alkuA = alku.value;
var loppuA =loppu.value;
alert(alkuA);
alert(loppuA);
 
var tunnit = Math.abs(loppuA-alkuA);

alert (tunnit);

}

