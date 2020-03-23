// $('#lightSlider').lightSlider({
//     gallery: true,
//     item: 1,
//     loop:true,
//     slideMargin: 0,
//     thumbItem: 9,
//     pager: true,
//     enableDrag: true,
//     controls: true
// });

let change = false;

function showGalleryDots() {
  if ($(window).width() < 600) {
    change = false;
  } else {
    change = true;
  }
  $("#lightSlider").lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 9,
    enableDrag: true,
    pager: true,
    gallery: change
  });
}

window.onload = showGalleryDots();

$("#goToPrevSlide").click(function() {
  slider.goToPrevSlide();
});
$("#goToNextSlide").click(function() {
  slider.goToNextSlide();
});
