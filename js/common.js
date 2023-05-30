$(function(){
    //goTop
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        console.log(scroll);
        if(scroll>400){
            $('.goTop').fadeIn();
        };
        if(scroll>0 && scroll<400){
            $('.goTop').fadeOut();
        };
    });
    $('.goTop').click(function(){
        $('html, body').stop().animate({'scrollTop': 0},1500);
    });
})

/*
html
<a href="#" class="goTop">Top</a>
css
.goTop{
    position: fixed; bottom: 30px; right: 30px; display: none; 
    width: 50px; height: 50px; background: #333; color: #fff; 
    border-radius: 50px; text-align: center; line-height: 50px;
    font-size: 1.2em;
}
*/
