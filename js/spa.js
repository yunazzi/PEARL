$(function(){
    var list = $("#spa_slider");

    $("#spa_leftArrow").click(function(e){
        e.preventDefault();
        $("#spa_slider li:last").prependTo(list);
        list.css("marginLeft", "-1920px");
        list.animate({"marginLeft":"0px"}, 500);
    });
    $("#spa_rightArrow").click(function(e){
        e.preventDefault();
        $("#spa_slider li:first").appendTo(list);
        list.css("marginLeft", "0px");
        list.animate({"marginLeft":"-1920px"}, 500);
    });
    
    $(".spa_s2_b1_1").slideUp();
    $(".spa_s2_box").mouseenter(function(){
        $(this).children('div').slideDown();
    });
    $(".spa_s2_box").mouseleave(function(){
        $(this).children('div').slideUp();
    });

    
    setInterval(function(){
        $('#spa_rightArrow').trigger('click');
    },5000);
    
});

    