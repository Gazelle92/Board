const main = document.getElementById("main");
let mainHeight = main.offsetHeight;
const bodyHeight = body.offsetHeight;
(function ($) {
        "use strict";

        //Parallax            

        function scrollBanner() {
            $(document).on('scroll', function () {
                var scrollPos = $(this).scrollTop();

                $('.text_section_parallex1').css({
                    'top': (scrollPos * 1) + 'px',
                    'opacity': 1 - (scrollPos / 420)
                });
                $('.text_section_parallex2').css({
                    'top': (scrollPos * 0.6) + 150 + 'px',
                    'opacity': 1 - (scrollPos / 420)
                });
                $('.text_section_parallex3').css({
                    'top': (scrollPos * 0.2) + 300 + 'px',
                    'opacity': 1 - (scrollPos / 420)
                });


                $('.text_pa_1').css({
                    'bottom':  100 + (scrollPos * 0.1) + 'px',
                    'opacity': 0.1 + (scrollPos / 400)
                });

                $('.text_pa_2').css({
                    'bottom': -200 + (scrollPos * 0.25) + 'px',
                    'opacity': 0.1 + (scrollPos / 700)
                });

                $('.text_pa_3').css({
                    'bottom': -500 + (scrollPos * 0.4) + 'px',
                    'opacity': 0 + (scrollPos / 1000)
                });

            });
        }
        scrollBanner();

        const scrollY = window.pageYOffset;
        $(window).on("scroll", function(){
        console.log($(window).scrollTop());    
        console.log($(document).height() - $(window).height());
            if (window.pageYOffset > mainHeight) {
                $('.sec2_h').css('width', "100%");
                $('.sec2_v').css('height', "100%");
        
                setTimeout(function() {
                    $('.colume').css('opacity', '1');
                  }, 2000);
                  
                
            } else {
                $(".sec2_h").css('width', "0%");
                $('.colume').css('opacity', '0');
                $('.sec2_v').css('height', "0%");
            }; 
            if ($(window).scrollTop() + 200 >= $(document).height() - $(window).height()) {
                $('.footer_h').css('width', "100%");
                $('.footer_v').css('height', "100%");
            } else {
                $('.footer_h').css('width', "0%");
                $('.footer_v').css('height', "0%");
            };

        });

})

(jQuery); 