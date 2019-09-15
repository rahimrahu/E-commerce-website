$(document).ready(function(){
    $('#header').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
     });
  });

  var count = 0;

  $('.add').click(function (){
    count ++;
    $('#count').html(count).css('display', 'block');
  }); 