const body = document.body;
const wrap = document.getElementById('wrap');

let sx = 0, // For scroll positions
    sy = 0;
let dx = sx, // For container positions
    dy = sy;
  
  body.style.height = wrap.offsetHeight + 'px';
  //body.style.height = document.getElementById('wrap').style.height + 'px';
window.addEventListener('scroll', function(){ 
  body.style.height = wrap.offsetHeight + 'px'}, true);


//body.style.height = wrap.clientHeight + 'px';
//body.style.height = wrap.offsetHeight + 'px';




wrap.style.position = 'fixed';
wrap.style.top = 0;
wrap.style.left = 0;

// Bind a scroll function
window.addEventListener('scroll', easeScroll);


function easeScroll() {
  
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}


window.requestAnimationFrame(render);

function render(){
  //We calculate our container position by linear interpolation method
  dx = li(dx,sx,0.07);
  dy = li(dy,sy,0.07);
  
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 10000) / 10000;

  wrap.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
  
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}

document.getElementById("border").style.width = "100%";

/* Colume link */





