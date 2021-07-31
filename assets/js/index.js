//typing text function
var typed = new Typed(".typing1",{
    strings:["I'm Salokya Kumar."],
    typeSpeed:100,
  	backSpeed:60,
  	loop:true
});



//Close navbar when nav item is clicked

$(".scrollTo").on('click', function(e) {
   e.preventDefault();
   var target = $(this).attr('href');
    setTimeout(function(){
      $('html, body').animate({
        scrollTop: ($(target).offset().top)
      }, 50);
    },300)
});
