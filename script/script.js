const countDownDate = new Date("Nov 5, 2021 9:00:00").getTime();
const x = setInterval(function() {
const now = new Date().getTime(); 
const distance = countDownDate - now;
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
document.getElementById("dias").innerHTML = days; 
document.getElementById("horas").innerHTML = hours;
document.getElementById("minutos").innerHTML = minutes;
document.getElementById("segundos").innerHTML = seconds;
   
if (distance < 0) {
  clearInterval(x);
  document.getElementById("segundos").innerHTML = "EXPIRED";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
var entrada = document.getElementById('textNome');
var entrada2 = document.getElementById('textEmail');
var salvar = document.getElementById('botaoCadastrar');
  
  salvar.addEventListener('click', function(){
     var dados = { "nome": entrada.value, "email": entrada2.value };
     var ls = localStorage.getItem("infos");
     if(entrada2.value.includes('@' ) && (entrada2.value.includes('.com') && (entrada.value.length >= 2))){
      if(ls){
         var json = JSON.parse(ls);
         json.push(dados);
         json = JSON.stringify(json);
         localStorage.setItem("infos", json);
     }else{
         localStorage.setItem("infos", JSON.stringify([dados]));
     }
     var ls_array = JSON.parse(localStorage.getItem("infos"));
     formularioCadastro.reset();
     document.getElementById('alertaEmail').style.visibility = 'hidden';
     abrir();
      }else{
         document.getElementById('alertaEmail').style.visibility = 'visible';
      }
  });

      $(window).scroll(function(){  
      if($(document).scrollTop() > 240){
         $('#freteContainer').hide();     
      } else { 
         $('#freteContainer').show();       
      } 
   });
});

function scrollFunction(num) {
   var body = document.body; 
   var html = document.documentElement; 
   switch (num) {
      case "1":
         body.scrollTop = 220;
         html.scrollTop = 220;
      break;
      case "2":
         body.scrollTop = 730;
         html.scrollTop = 730;
      break;
      case "3":
         body.scrollTop = 1250;
         html.scrollTop = 1250;
      break;
      case "4":
         body.scrollTop = 1665;
         html.scrollTop = 1665;
      break;   
   }
}

function fechar(){
   document.getElementById('popup').style.visibility = 'hidden'
   }
   function abrir(){
   document.getElementById('popup').style.visibility = 'visible';
   }