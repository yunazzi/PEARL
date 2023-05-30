$(function(){
    var ticket = $(".season_s4_boxes").children("li");
    $(ticket).click(function(e){
        e.preventDefault();
        var par = $(this).children("div");
        $(par).toggleClass("on_ticket");
    });
});