var jQuery = require('../node_modules/jquery/dist/jquery.min.js');
var $ = require('../node_modules/jquery/dist/jquery.min.js');

// Plugin @RokoCB :: Return the visible amount of px
// of any element currently in viewport.
// stackoverflow.com/questions/24768795/
;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));



$("h1").inViewport(function(px){
  if(px) $(this).addClass("fade-down") ;
});

$(".highlight-image").inViewport(function(px){
  if(px) $(this).addClass("fade-down") ;
});

$(".left").inViewport(function(px){
  if(px) $(this).addClass("fade-down") ;
});

$(".middle").inViewport(function(px){
  if(px) $(this).addClass("fade-down") ;
});

$(".right").inViewport(function(px){
  if(px) $(this).addClass("fade-down") ;
});

$(".v-line").inViewport(function(px){
  if(px) $(this).addClass("stretch") ;
});

$(".bar-chart-h").inViewport(function(px){
  if(px) $(this).addClass("stretch-h") ;
});

$(".text").inViewport(function(px){
  if(px) $(this).addClass("fade-down") ;
});
