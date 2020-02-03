// анімація якоря
$(document).ready(function() {
  $(".anchor").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

//прелоадер
var $preloader = $("#p_prldr"),
  $svg_anm = $preloader.find(".svg_anm");
$svg_anm.fadeOut();
$preloader.delay(500).fadeOut("slow");

function openNav() {
  document.getElementById("mySidenav").style.width = "50%";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}