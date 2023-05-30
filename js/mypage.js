$(function(){
    var tab = $(".mypage_for_txtbox1").children("div");
    $(tab).click(function(e){
        e.preventDefault();
        if ($(this).attr('id') != ("mypage_for_txtbox2")){
            tab.css({"border": "1px solid #000", "border-left": "none"});
            $(this).css({"border": "1px solid #000", "border-bottom": "none", "border-left": "none"});
            tab.children("a").css({"color": "#aaaba7"});
            $(this).children("a").css({"color": "#000"})
            $(".mypage_for_txtbox1:first-child").css({"border-left": "1px solid #000"});
        }else{
            $(".mypage_for_txtbox1:first-child").css({"border-left": "none"});
            tab.css({"border": "1px solid #000", "border-left": "none"});
            $(this).css({"border": "1px solid #000", "border-bottom": "none"});
            tab.children("a").css({"color": "#aaaba7"});
            $(this).children("a").css({"color": "#000"});
        }

    });
    /*
    var numb = $(".mypage_numberbox").children("div");
    $(numb).click(function(e){
        e.preventDefault();
        $(this).toggleClass("on").siblings().removeClass("on");
    });
    */
});