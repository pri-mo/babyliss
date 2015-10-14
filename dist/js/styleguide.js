jQuery(document).ready(function($) {

  $('h3[id="-"]').remove();

  var $headers = $('h2[id]');
  $headers.each(function(index, el) {
    var cont = $(this).text();
    var id = $(this).attr('id');
    $('.sg-nav ul').append('<li><a href="#' + id + '">' + cont + '</a></li>');
  });

  var $nav = $('.sg-nav');
  var navOffset = $nav.offset().top;
  var scrolled = $(window).scrollTop();

  $(window).scroll(function() {
    scrolled = $(window).scrollTop();
    if (scrolled >= navOffset) {
      $nav.addClass('fixed');
    } else {
      $nav.removeClass('fixed');
    }
  });

  var $navLinks = $('.sg-nav a');
  $navLinks.each(function(index, el) {
    $(this).click(function(event) {
      event.preventDefault();
      var dest = $(this).attr('href');
      $('body,html').animate({
        scrollTop: $(dest).offset().top - 70,
      }, 1000);
    });
  });

});
