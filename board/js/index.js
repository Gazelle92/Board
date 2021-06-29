
/* Colume link */

$(".item_button").on("click", function(){
    $('.item_cover').css({
        'opacity': 0,
        'zIndex': -1
    });
    $(body).css({'overflowY' : "auto"});
});


/*
  other.addEventListener('click', linkOn);
*/

$(".item_button").on("click", function(){
    $('.item_cover').css({
        'opacity': 0,
        'zIndex': -1
    });
    $(body).css({'overflowY' : "auto"});
});
const button = document.querySelector('#item_button'),
other = document.querySelector('.link_1'),
itemCover = document.getElementsByClassName('item_cover');


function linkOn() {
button.style.opacity = 1,
button.style.zIndex = 2,
  document.body.style.overflowY = "hidden";
}
document.querySelector('.link_1').addEventListener('click', function(){
    document.querySelector('#item_cover1').style.opacity = 1, 
    document.querySelector('#item_cover1').style.zIndex = 1,
    linkOn();
  });
  
  document.querySelector('.link_2').addEventListener('click', function(){
    document.querySelector('#item_cover2').style.opacity = 1,
    document.querySelector('#item_cover2').style.zIndex = 1,
    linkOn();
  });
  
  document.querySelector('.link_3').addEventListener('click', function(){
    document.querySelector('#item_cover3').style.opacity = 1,
    document.querySelector('#item_cover3').style.zIndex = 1,
    linkOn();
  });
  
  document.querySelector('.link_4').addEventListener('click', function(){
    document.querySelector('#item_cover4').style.opacity = 1,
    document.querySelector('#item_cover4').style.zIndex = 1,
    linkOn();
  });
  
  document.querySelector('.link_5').addEventListener('click', function(){
    document.querySelector('#item_cover5').style.opacity = 1,
    document.querySelector('#item_cover5').style.zIndex = 1,
    linkOn();
  });
  
  document.querySelector('.link_6').addEventListener('click', function(){
    document.querySelector('#item_cover6').style.opacity = 1,
    document.querySelector('#item_cover6').style.zIndex = 1,
    linkOn();
  });
