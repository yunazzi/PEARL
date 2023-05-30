//main slider
$(function(){
    var s1 =0;
    var s2 =0;
    
    slider_move1();
    function slider_move1(){
        s1=1;
        s2=0;
        
        $('#index_visual_slider1').animate({'left':'0px'},1000);
        $('#index_visual_slider2').animate({'left':'1920px'},1000);
    }
    function slider_move2(){
        s1=0;
        s2=1;

        $('#index_visual_slider1').animate({'left':'-1920px'},1000);
        $('#index_visual_slider2').animate({'left':'0px'},1000);
    }
    $('#visual_arrow #leftArrow').click(function(){
        if(s1 == 1){
            slider_move2();
        }else if(s2==1){
            slider_move1();
        }
    })
    $('#visual_arrow #rightArrow').click(function(){
        if(s1 == 1){
            slider_move2();
        }else if(s2==1){
            slider_move1();
        }
    });

    //s2 slider
    var list = $("#s2_slider_wrap");
    $("#index_leftArrow").click(function(e){
        e.preventDefault();
        $("#s2_slider_wrap li:last").prependTo(list);
        //위치변경 : animate(-400 -> 0);
        list.css("marginLeft", "-860px");
        list.animate({"marginLeft":"0px"}, 500);
    });
    $("#index_rightArrow").click(function(e){
        e.preventDefault();
        $("#s2_slider_wrap li:first").appendTo(list);
        list.css("marginLeft", "0px");
        list.animate({"marginLeft":"-860px"}, 500);
    });

    
    
});


setInterval(function(){
    $('#visual_arrow #rightArrow').trigger('click');
},3000);

setInterval(function(){
    $('#index_rightArrow').trigger('click');
},3000);






