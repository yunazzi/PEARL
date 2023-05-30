$(function(){
    var button = $("#ski_button");
    var n = 0;
    $(button).click(function(e){
        
        e.preventDefault();
        if(n==1){
            button.text("-");
            n = 0;
            $(".ski_vb3").removeClass("on");
            $("#ski_vb3").removeClass("on");
        }else if(n==0){
            n = 1;
            button.text("+");
            $(".ski_vb3").addClass("on");
            $("#ski_vb3").addClass("on");
        };
    });

    $("#ski_a1").mouseenter(function(){
        $('#ski_a1 p').css({"width": "800px", "height": "435px"})
    });
    $("#ski_a1").mouseleave(function(){
        $('#ski_a1 p').css({"width": "200px", "height": "40px"})
    });
    $("#ski_a2").mouseenter(function(){
        $('#ski_a2 p').css({"width": "370px", "height": "435px"})
    });
    $("#ski_a2").mouseleave(function(){
        $('#ski_a2 p').css({"width": "200px", "height": "40px"})
    });
    $("#ski_a3").mouseenter(function(){
        $('#ski_a3 p').css({"width": "530px", "height": "435px"})
    });
    $("#ski_a3").mouseleave(function(){
        $('#ski_a3 p').css({"width": "200px", "height": "40px"})
    });
    $("#ski_a4").mouseenter(function(){
        $('#ski_a4 p').css({"width": "640px", "height": "435px"})
    });
    $("#ski_a4").mouseleave(function(){
        $('#ski_a4 p').css({"width": "200px", "height": "40px"})
    });
});