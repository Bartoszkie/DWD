$('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop:true,
    slideMargin: 0,
    thumbItem: 9
});

$('#goToPrevSlide').click(function(){
    slider.goToPrevSlide(); 
});
$('#goToNextSlide').click(function(){
    slider.goToNextSlide(); 
});