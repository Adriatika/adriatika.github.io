$(document).ready(function() {
   var margin = 100; 
   $("a").click(function() { 
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top+margin+ "px"
      }, 
      {
         duration: 1600, 
         easing: "swing"
      });
      return false;
   });
});