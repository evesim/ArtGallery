var interval = 500;

var slide;

$('section.back').click(function(){
  var slide = $('.slideshow div:last-child').remove();
  $('.slideshow').prepend(slide);
});