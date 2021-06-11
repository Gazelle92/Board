const body = document.body;
const wrap = document.getElementById('wrap');

let sx = 0, // For scroll positions
    sy = 0;
let dx = sx, // For container positions
    dy = sy;
  
  body.style.height = wrap.offsetHeight + 'px';
  //body.style.height = document.getElementById('wrap').style.height + 'px';
window.addEventListener('resize', function(){ 
  console.log(body.style.height),body.style.height = wrap.offsetHeight + 'px'}, true);


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

/*Swipper Section*/
/**
 * 슬라이드 요소 관리
 */
 /*new Swiper('#main .swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
  })*/
  new Swiper('#main .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
      delay: 200000 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 00, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용 여부
      el: '#main .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '#main .swiper-prev', // 이전 버튼 선택자
      nextEl: '#main .swiper-next' // 다음 버튼 선택자
    }
  })

  
  
  /**
   * Promotion 슬라이드 토글 기능
   */
  // 슬라이드 영역 요소 검색!
  const promotionEl = document.querySelector('#main')
  // 슬라이드 영역를 토글하는 버튼 검색!
  const promotionToggleBtn = document.querySelector('#toggle-main')
  // 슬라이드 영역 숨김 여부 기본값!
  let isHidePromotion = false
  // 토글 버튼을 클릭하면,
  /*promotionToggleBtn.addEventListener('click', function () {
    // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
    isHidePromotion = !isHidePromotion
    // 요소를 숨겨야 하면,
    if (isHidePromotion) {
      promotionEl.classList.add('hide')
    // 요소가 보여야 하면,
    } else {
      promotionEl.classList.remove('hide')
    }
  })*/


document.getElementById("border").style.width = "100%";
