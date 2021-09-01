$(function () {
  $(".question li").click(function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).next().slideUp("fast");
      $(this)
        .children(".angle")
        .html('<span class="angle"><i class="fa fa-angle-down"></i></span>');
    } else {
      $(this).addClass("open");
      $(this).next().slideDown("fast");
      $(this)
        .children(".angle")
        .html('<span class="angle"><i class="fa fa-angle-up"></i></span>');
    }
  });

  var mediaQuery = matchMedia('(max-width: 798px)');

  handle(mediaQuery);

  mediaQuery.addListener(handle);

  function handle(mq){
    if(mq.matches){
      $(".flow-box-left").click(function(){
        if ($(this).hasClass("open")) {
          $(this).removeClass("open");
          $(this).next().slideUp("fast");
          $(this)
            .children(".flow-left-angle")
            .html('<span class="flow-left-angle"><i class="fa fa-angle-down"></i></span>');
        } else {
          $(this).addClass("open");
          $(this).next().slideDown("fast");
          $(this)
            .children(".flow-left-angle")
            .html('<span class="flow-left-angle"><i class="fa fa-angle-up"></i></span>');
        }
      });
    }else{
      return false;
    }
  }

  $(".header-btn,.header-btn2").click(function(){
    const position=$(".form").offset().top-$("header").height();
    const speed=300;
    
    $("html,body").animate({scrollTop:position},speed);
  })

  $(".nav-icon").click(function () {
    $("body, html").animate({ scrollTop: 0 }, 300, "linear");
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".nav-icon").fadeIn();
    } else {
      $(".nav-icon").fadeOut();
    }
  });
});
