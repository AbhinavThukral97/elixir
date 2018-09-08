$(document).ready(function(){
  $('.logo').css('transform','scale(1)');
  setTimeout(function(){
    $('h1').css('top','0px');
    $('h1').css('opacity','1');
  },500);
  setTimeout(function(){
    $('h2').css('top','0px');
    $('h2').css('opacity','1');
  },750);

  a = $('.activities-panel').offset().top;
  j = $('.join-panel').offset().top;
  h = $(window).height();
  console.log(a,j,h);
  $(window).scroll(function(){
   i = $(window).scrollTop();
   if(i>0)
    $('header').addClass('shadow');
  else
    $('header').removeClass('shadow');
    // $('.activities-panel').css('background-position','center ' + (a-i-h)/5 +'px');
    // $('.join-panel').css('background-position','center ' + (j-i-h)/5 +'px');
  });

  $('.home-link').click(function(){
    var  i = 0;
    $('body, html').animate({scrollTop: i - 70}, 1000);
    $('nav').css('right','-200px');
      $('body').css('right','0px');
      $('header').css('right','0px');
      nav = false;
  });
  $('.about-link').click(function(){
    var  i = $('.about').offset().top;
    $('body, html').animate({scrollTop: i - 70}, 1000);
    $('nav').css('right','-200px');
      $('body').css('right','0px');
      $('header').css('right','0px');
      nav = false;
  });
  $('.activities-link').click(function(){
    var  i = $('.activities-panel').offset().top;
    $('body, html').animate({scrollTop: i - 70}, 1000);
    $('nav').css('right','-200px');
      $('body').css('right','0px');
      $('header').css('right','0px');
      nav = false;
  });
  $('.join-link').click(function(){
    var  i = $('.join-panel').offset().top;
    $('body, html').animate({scrollTop: i - 70}, 1000);
    $('nav').css('right','-200px');
      $('body').css('right','0px');
      $('header').css('right','0px');
      nav = false;
  });
  $('.connect-link').click(function(){
    var  i = $('.contact').offset().top;
    $('body, html').animate({scrollTop: i - 70}, 1000);
    $('nav').css('right','-200px');
      $('body').css('right','0px');
      $('header').css('right','0px');
      nav = false;
  });

  nav = false;
  $('.mobile-menu').click(function(){
    if(nav){
      $('nav').css('right','-200px');
      $('body').css('right','0px');
      $('header').css('right','0px');
      nav = false;
    }
    else{
      $('nav').css('right','0');
      $('body').css('right','200px');
      $('header').css('right','200px');
      nav = true;
    }
  });
});
