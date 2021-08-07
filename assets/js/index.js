//typing text function
window.addEventListener("load",function(){
  var typed = new Typed(".typing1",{
      strings:["I'm Salokya Kumar."],
      typeSpeed:100,
    	backSpeed:60,
      startDelay:2000
  });
})

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


//back to TOP
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('.back-to-top').fadeIn(200);
    } else {
        $('.back-to-top').fadeOut(200);
    }
});

$('.back-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 50);
});
