$(function () {
  // 교보
  $("#kyobo_box")
    .mouseenter(function () {
      $("#kyobo > li").stop().animate({ marginTop: "-2730px" }, 5000);
    })
    .mouseleave(function () {
      $("#kyobo > li").stop().animate({ marginTop: "0px" }, 3000);
    });

  // MLB
  $("#casamia_box")
    .mouseenter(function () {
      $("#casamia > li").stop().animate({ marginTop: "-3520px" }, 5000);
    })
    .mouseleave(function () {
      $("#casamia > li").stop().animate({ marginTop: "0px" }, 3000);
    });

  // CAFE
  $("#cafe_box")
    .mouseenter(function () {
      $("#cafe > li").stop().animate({ marginTop: "-2570px" }, 5000);
      $("#cafe_mobile > li").stop().animate({ marginTop: "-3500px" }, 12000);
    })
    .mouseleave(function () {
      $("#cafe > li").stop().animate({ marginTop: "0px" }, 3000);
      $("#cafe_mobile > li").stop().animate({ marginTop: "0px" }, 3000);
    });

  // vittz
  $("#tenbyten_box")
    .mouseenter(function () {
      $("#tenbyten > li").stop().animate({ marginTop: "-3380px" }, 5000);
    })
    .mouseleave(function () {
      $("#tenbyten > li").stop().animate({ marginTop: "0px" }, 3000);
    });
});

$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 700) {
      $("#menu").show();
      if (scrollTop > 700 && scrollTop <= 1000) {
        $("#menu > li").eq(1).find("i").addClass("active_menu");
        $("#menu > li").eq(1).siblings("li").find("i").removeClass("active_menu");
      }
      if (scrollTop > 1500 && scrollTop <= 2500) {
        $("#menu > li").eq(2).find("i").addClass("active_menu");
        $("#menu > li").eq(2).siblings("li").find("i").removeClass("active_menu");
      } 
      if (scrollTop > 2500 && scrollTop <= 3000) {
        $("#menu > li").eq(3).find("i").addClass("active_menu");
        $("#menu > li").eq(3).siblings("li").find("i").removeClass("active_menu");
      } 
      if (scrollTop > 3000 && scrollTop <= 4000) {
        $("#menu > li").eq(4).find("i").addClass("active_menu");
        $("#menu > li").eq(4).siblings("li").find("i").removeClass("active_menu");
      }
      if (scrollTop > 4000 && scrollTop <= 4500) {
        $("#menu > li").eq(5).find("i").addClass("active_menu");
        $("#menu > li").eq(5).siblings("li").find("i").removeClass("active_menu");
      }        
    }
    if (scrollTop < 700) {
      $("#menu").hide();
    }
  });

