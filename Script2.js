document.getElementById('Lisää').addEventListener("click",lisääPäivä);


function lisääPäivä(){
    var table =document.getElementById('työListaus');
   var row = table.insertRow();
   var cell1 =row.insertCell(0); 
    var cell2 =row.insertCell(1);
    var cell3 =row.insertCell(2);

 var Nro = document.getElementById('työListaus').rows.length-1;
   cell1.innerHTML= Nro; 


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
}
document.getElementById('Lisää').addEventListener('click', function(event){
    event.preventDeafult()
});