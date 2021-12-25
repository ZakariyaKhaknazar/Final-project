window.onload = function menuF() {
var menu = document.getElementById('myTopnav');
menu.onclick = function myFunction() {
 if (menu.className === 'topnav') {
  menu.className += ' responsive';
 } else {
  menu.className = 'topnav';
 }
}
}
var slideIndex = 1;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
  function show(state)
  {
  document.getElementById('window').style.display = state;  
  document.getElementById('gray').style.display = state;    
  } 
  var day = new Date().getDate();
  var month = new Date().getMonth()+1;
  var year = new Date().getFullYear();
  if(day<10){
    day="0"+day;
  }
   document.getElementById("date").max=year + "-" + month + "-" + day

        


        function change_size(){
             document.getElementsByTagName("vid")[0].style.width="1080px";
             document.getElementsByTagName("vid")[0].style.height="720px";
                }

                var vm1 = new Vue({
  el: "#app",
  methods:{
    change: function(){
      this.$refs.header.innerText = "Welcome to Vue.js";
    }
  }
});