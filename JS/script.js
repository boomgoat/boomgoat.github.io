$(document).ready(function(){
  $(function() {
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('.container, .scrollable').animate({
          scrollTop: $('.scrollable').scrollTop() + target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
});
