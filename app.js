$(function(){


  $('.large-window').hover(function(){
    $('.in-large-window').css({'opacity':'0.6'});
  });
  $('.large-window').mouseleave(function(){
    $('.in-large-window').css({'opacity':'0'});
  });



  $(window).scroll(function(){

    var scroll = $(this).scrollTop();

    $('h1').css({
    'transform':'translate(0px,'+ scroll/6+'%)'
  })

  $('h2').css({
  'transform':'translate(0px,-'+ scroll/2+'%)'
  })

    $('header').css({
    'transform':'translate(0px,'+ scroll/10+'%)'
  })

  if(scroll > 900 ) {
    $('#social').css({
    'margin-top':'80px'
  })
  }

  if(scroll < 880) {
    $('#social').css({
    'margin-top':'160px'
  })
  }
  })


  var audio1 = $('#first')[0];
  var audio2 = $('#second')[0];
  $('.options').on('mouseover',function(){
    audio1.play();
  })
  $('.options').on('click', function(){
    audio2.play();
  })

  $('#pics').on('click', function(){
    $('#carousel').animate({left:'55%'}, 1200);
    $('#close').animate({left:'52%'}, 1200);

  })

  $('#close').on('click', function(){
    console.log('its here');
    $('#carousel').animate({left:'220%'}, 1200);
    $('#close').animate({left:'220%'}, 1200);
  })

})


$(function(){
  var box = document.querySelector('.carousel');
  var prev = box.querySelector('.prev');
  var next = box.querySelector('.next');
  var lists = box.querySelectorAll('.pane');
  var amount = lists.length;
  var current = lists[0];
  var counter = 0;
  function slide(value){

    current.classList.remove('current');
    counter = counter+value;
    if(value === -1 && counter<0){
      counter = amount -1;
    }
    if(value === 1 && !lists[counter]){
      counter = 0;
    }
    current = lists[counter];
    current.classList.add('current');
  }
  prev.addEventListener('click', function(){
    slide(-1);
  })

  next.addEventListener('click', function(){
    slide(1);
  })
  slide(0);

}());
