$(function(){
    var s1 = 0;
    var s2 = 0;
    var s3 = 0;

    slide_move1();

    function slide_move1(){
        s1 = 1;
        s2 = 0;
        s3 = 0;

        $('.room_slide1').animate({'left':'0'},1000);
        $('.room_slide2').animate({'left':'1200px'},1000);
        $('.room_slide3').animate({'left':'2400px'},1000);
    }
    function slide_move2(){
        s1 = 0;
        s2 = 1;
        s3 = 0;

        $('.room_slide1').animate({'left':'-1200px'},1000);
        $('.room_slide2').animate({'left':'0'},1000);
        $('.room_slide3').animate({'left':'1200px'},1000);
    }
    function slide_move3(){
        s1 = 0;
        s2 = 0;
        s3 = 1;

        $('.room_slide1').animate({'left':'-2400px'},1000);
        $('.room_slide2').animate({'left':'-1200px'},1000);
        $('.room_slide3').animate({'left':'0'},1000);
    }

    $('.room_family_left_btn').click(function(){
        if(s1 == 1){
            slide_move3();
        }else if(s2 == 1){
            slide_move1();
        }else if(s3 == 1){
            slide_move2();
        }
    })
    $('.room_family_right_btn').click(function(){
        if(s1 == 1){
            slide_move2();
        }else if(s2 == 1){
            slide_move3();
        }else if(s3 == 1){
            slide_move1();
        }
    })
})
setInterval(function(){
    $('.room_family_right_btn').trigger('click');
},3000);