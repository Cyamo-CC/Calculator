//the calendars scripst

/* const date = new Date();

const renderCalendar =() =>{
date.setDate(1);

// set 31 as deafult value for days(in a month)
const monthDays = document.querySelector('.days');

//last day of current month is assigned with (+1)
const lastDay =new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

// the index number of the weekday that starts sthe month (mon=0, tue=1, ect)
const firstDayIndex= date.getDay();

//checks what was the last months last days weekday index number
const prevLastDay= new Date(date.getFullYear(),date.getMonth(),0).getDate();

//defines the index number of last day of current month
//simplu repplase the (getDate with GetDay)
const lastDayIndex=new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

const nextDays = 7 - lastDayIndex ;


const months = [
    "Tammikuu",
    "Helmikuu",
    "Maaliskuu",
    "Huhtikuu",
    "Toukokuu",
    "Kesäkuu",
    "Heinäkuu",
    "Elokuu",
    "Syyskyy",
    "Lokakuu",
    "Marraskuu",
    "Joulukuu"];

    document.querySelector('.date h2').innerHTML
    =months[date.getMonth()];

document.querySelector('.date p').innerHTML
=new Date().toDateString();

let days ="";

// makes sure the dates match weekdays
//counts how many days of previous month should show
for(let x=firstDayIndex; x>1; x--){
days += `<div class="MenneetPv">${prevLastDay-x+2}</div>`;
}

//automates the day input in calendar
for(let y=1; y<=lastDay; y++){
    if(y===new Date().getDate() && date.getMonth()=== new Date().getMonth()){
        days+=`<div class="today">${y}</div>`;
    }
    else{
    days+=`<div>${y}</div>`;
    }
}

//counts and outputs how many days of upcoming month should be shown
for(let c=1; c<= nextDays; c++){
    days+= `<div class="SeuraavatPv">${c}</div>`; 
    monthDays.innerHTML = days;
}
}


document.querySelector('.prev').addEventListener('click',() =>{
 date.setMonth(date.getMonth()-1);
 renderCalendar();
});

document.querySelector('.next').addEventListener('click',() =>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});

renderCalendar() */

//END OF CALENDAR



//forms and counting

//var TPMäärä = document.getElementByID('hpalkka').value;
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



   //VALINTOJEN LOPPU

   //Taulukon ALKU

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

