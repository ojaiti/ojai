(function(){
    var win = $(window);
    var pos = 200;
    win.scroll(function (e) {
        if (win.scrollTop() > pos){
           $('#navbar').addClass('styckyNav');
        }
        else {
          $('#navbar').removeClass('styckyNav');
        }
      });

      $('#bs4-slide-carousel').carousel({
        interval: 3000
      });
      
})();

      
    