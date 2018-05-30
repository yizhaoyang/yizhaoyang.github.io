console.log("my code is loaded and running ");
setTimeout(function(){
    setInterval(function(){
        document.querySelector("h3").style.color="#c06c84";
        document.querySelector("h3").style.top="100px";
    },3000);
},1500);

setInterval(function(){
    document.querySelector("h3").style.color="#005eff";
    document.querySelector("h3").style.top="200px";
},3000);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



  $(".see-more").nextUntil(".see-less").wrapAll("<div class='see-more-content'></div>");


  $(".see-less").hide();
  var count= 1
  $(".see-more-content").slideUp(0);



$(".see-more").click(function(){

    $(".see-more-content").slideToggle();
    $(".see-more").hide();
    $(".see-less").show();

});
$(".see-less").click(function(){
    $(".see-more-content").slideToggle();
    $(".see-less").hide();
    $(".see-more").show();
});
