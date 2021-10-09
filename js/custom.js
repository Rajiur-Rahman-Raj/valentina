$(function(){
// feedback js
$('.feedback-slide').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: '.left',
  nextArrow: '.right',
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,      
      slidesToShow: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,      
      slidesToShow: 1
      }
    }
  ]    
});    

});