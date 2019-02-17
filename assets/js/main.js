// LOADER
$(window).load(function() {
  $(".loader").fadeOut("slow");
});
// MENU
$(document).ready(function(){
  $(".menu > .drop").click(function(){
    $(".menu > .drop").toggleClass("open");
    $(".menu > nav").toggleClass("open");
  });
});
//SCROLL MENU CHANGE
var scrollpos = window.scrollY;
var header = document.getElementById("menu");
var headerheight = document.getElementById("menu").offsetHeight;
function add_class_on_scroll() {
  header.classList.add("scroll-menu");
}
function remove_class_on_scroll() {
  header.classList.remove("scroll-menu");
}
window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;
  if (scrollpos > (headerheight)) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});
// EASE MOVEMENT ID CHANGE
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
// MODAL
$('.img-work').on('click', function(){
	$('#'+$(this).data('modal')).show('slow');	
});
$('.close').on('click', function(){
  $('.modal').hide('slow');
});
window.onclick = function(event) {
  if (event.target.className == 'modal') {
    $('.modal').hide('slow');
  }
}

