$(document).ready(function(){
  $(function() {
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('.container-fluid, .main_scroll').animate({
          scrollTop: $('.main_scroll').scrollTop() + target.offset().top -100
        }, 1000);
        return false;
      }
    }
  });
});
});
