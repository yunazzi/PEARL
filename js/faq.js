$(function(){
    $('.question').click(function(){
        var addOn = $(this).hasClass('on');//참
        if(addOn){
            $(this).removeClass('on');
            $(this).siblings('.answer').slideUp(500);
        }else{
            $('.question').removeClass('on');
            $(this).addClass('on');
            $('.answer').slideUp(500);
            $(this).siblings('.answer').slideDown(500);
        }
    });
    /*
    $('.question').click(function(){
        $('.iconQ').animate({'color':'#f00'})
    })
    */
});