 $(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
 });
 $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
 });
 let yellow=
 document.getElementById('yellow')
 yellow.addEventListener('change',(e)=>{

   document.documentElement.style.setProperty('--yellow',e.target.value)
})
