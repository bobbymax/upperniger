// horizontal arrowss
var view = $("#mainnav");
var move = "500px";
var leftsideLimit = -500;

// get wrapper width
var getMenuWrapperSize = function () {
  return $(".sidebar-wrapper").innerWidth();
};
var menuWrapperSize = getMenuWrapperSize();

if (menuWrapperSize >= "1660") {
  var sliderLimit = -3000;
} else if (menuWrapperSize >= "1440") {
  var sliderLimit = -3600;
} else {
  var sliderLimit = -4200;
}

$("#left-arrow").addClass("disabled");
$("#right-arrow").click(function () {
  var currentPosition = parseInt(view.css("marginLeft"));
  if (currentPosition >= sliderLimit) {
    $("#left-arrow").removeClass("disabled");
    view.stop(false, true).animate(
      {
        marginLeft: "-=" + move,
      },
      {
        duration: 400,
      }
    );
    if (currentPosition === sliderLimit) {
      $(this).addClass("disabled");
      console.log("sliderLimit", sliderLimit);
    }
  }
});

$("#left-arrow").click(function () {
  var currentPosition = parseInt(view.css("marginLeft"));
  if (currentPosition < 0) {
    view.stop(false, true).animate(
      {
        marginLeft: "+=" + move,
      },
      {
        duration: 400,
      }
    );
    $("#right-arrow").removeClass("disabled");
    $("#left-arrow").removeClass("disabled");
    if (currentPosition >= leftsideLimit) {
      $(this).addClass("disabled");
    }
  }
});

// page active
$(".main-navbar").find("a").removeClass("active");
$(".main-navbar").find("li").removeClass("active");

// $(".custom-scrollbar").animate(
//   {
//     scrollTop: $("a.nav-link.menu-title.active").offset().top - 500,
//   },
//   1000
// );
