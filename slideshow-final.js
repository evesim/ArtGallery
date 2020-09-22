setInterval(function(){
  let slide = $('.slideshow div:last-child').remove();
  $('.slideshow').prepend(slide);
}, 3000);