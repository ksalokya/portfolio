//typing text function
var typed = new Typed(".typing1",{
    strings:["I'm Salokya Kumar."],
    typeSpeed:100,
    backSpeed:60,
    loop: false,
    startDelay: 500,
    smartBackspace: true,
});

//close navbar when nav item is clicked
$(document).ready(function() {
  $(document).click(function(event) {
    var click = $(event.target);
    var _open = $(".navbar-collapse").hasClass("show");
    if (_open === true && !click.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  });
});
