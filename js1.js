$(document).ready(function(){
   $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
   });
   
   $(window).on('scroll load',function(){
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
   });
   
   $('a[href*="#"]') .on('click',function(e){
      e.preventDefault();
      $('html,body').animate({
         scrollTop: $($(this).attr('href')).offset().top,
      },
        500,
        'linear'
      );
   });
}); 
let yellow=
 document.getElementById('yellow')
 yellow.addEventListener('change',(e)=>{
   document.documentElement.style.setProperty('--yellow',e.target.value)
})





document
  .querySelector("#contact")
  .addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("contact");
  let formData = new FormData(myForm);
  console.log(myForm)
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};