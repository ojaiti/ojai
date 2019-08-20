/*( function(){
    var win = $(window);
    var pos = 300;
    win.scroll(function (e) {
        if (win.scrollTop() > pos){
           $('#navbar').addClass('styckyNavDown');
          $("#navbar").removeClass('styckyNavUp');

        }
        else {
          $('#navbar').removeClass('styckyNavDown');
          $("#navbar").addClass('styckyNavUp');
        }
      });

      $('#bs4-slide-carousel').carousel({
        interval: 3000
      });

  
})();
 */

      
var lastScrollTop = 0;
var navbar = document.getElementById("navbar");
var espacio92 = document.querySelector('.espacio92');
window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop && st > 300){
        espacio92.style.display = 'none';
        navbar.classList.add("styckyNavDown");
   } else {
    espacio92.style.display = 'block';
    navbar.classList.remove("styckyNavDown");
   }
   if(st < 200){
     navbar.position = 'relative';
   }
   lastScrollTop = st;
   espacio92.style.display = 'none';

}, false);