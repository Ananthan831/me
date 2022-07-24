$(document).ready(function(){
   $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
   });
   
   $(window).on('scroll load',function(){
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
   });
   
   $('a[href*="#]') .on('click',function(e){
      e.preventDefult();
      $('html,body').animate({
         scrollTop:$($(this).attr('href')).offset().top,
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