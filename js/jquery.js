
const main = document.getElementById("main");
const colume = document.getElementById("colume");
let mainHeight = main.offsetHeight;
let columeHeight = $(".colume").offsetHeight;

(function ($) {
        "use strict";

        //Parallax            

        function scrollBanner() {
            $(document).on('scroll', function () {
                var scrollPos = $(this).scrollTop();
                $('.text_section').css({
                    'top': (scrollPos * 1.07) + 60 + 'px',
                    'opacity': 1 - (scrollPos / 600)
                });
                $('.text_right').css({
                    'bottom': - (scrollPos * 0.2) + 'px',
                    'opacity': 0.1 + (scrollPos / 600)
                });
                $('.text_right-00').css({
                    'top': (scrollPos / -2.5) + 'px'
                });
            });
        }
        scrollBanner();
        
        
        //let columeHeight = colume.offsetWidth;
        const scrollY = window.pageYOffset;
        $(window).on("scroll", function(){
            
            if (window.pageYOffset > mainHeight) {

                $('.grid_horizontal').css('width', "100%");
                $('.grid_vertical').css('height', "100%");
                $('.colume').css('opacity', '1', 2000);
                console.log(mainHeight);
                console.log(columeHeight);
            } else {
                $(".grid_horizontal").css('width', "0%");
                $('.colume').css('opacity', '0');
                $('.grid_vertical').css('height', "0%");
            }; 

          /*  if (window.pageYOffset > mainHeight) {
                $('.h_2').css('width', "100%");
                console.log(mainHeight);
            } else {
                $('.h_2').css('width', "0%");
            };*/
        });
    /*$(window).addEventListener('scroll', function() {
        
      });*/
      
    
	//Page cursors
/*
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }              
              
  */
//Scroll back to top
        /*      
$(document).ready(function() {	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').addClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			}
		});				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
  
  		
		
		
  
  });            
       */       
})
(jQuery); 