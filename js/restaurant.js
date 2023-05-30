$(function(){
    var list = $(".section2_five_box");
    $(".section2_left").click(function(e){
        e.preventDefault();
        $(".section2_five_box li:last-child").prependTo(list);
        list.css({"marginLeft": "-245px"});
        list.animate({"marginLeft":"0px"}, 500);
    });

    $(".section2_right").click(function(e){
        e.preventDefault();
        $(".section2_five_box li:first-child").appendTo(list);
        list.css("marginLeft", "0px");
        list.animate({"marginLeft":"-245px"}, 500);
    });

    setInterval(function(){
        $(".section2_right").trigger("click");
    },5000);


    var list1 = $(".section4_five_box");
    $(".section4_left").click(function(e){
        e.preventDefault();
        list1.css({"marginLeft": "-245px"});
        list1.animate({"marginLeft":"0px"}, 500);
        $(".section4_five_box li:last-child").prependTo(list1);
    });
    $(".section4_right").click(function(e){
        e.preventDefault();
        list1.css({"marginLeft": "0px"});
        list1.animate({"marginLeft":"-245px"}, 500);
        $(".section4_five_box li:first-child").appendTo(list1);
    });

    setInterval(function(){
        $(".sectoin4_right").trigger('click');
    },5000);



    var list2 = $(".section6_five_box");
    $(".section6_left").click(function(e){
        e.preventDefault();
        console.log("adf")
        $(".section6_five_box li:last-child").prependTo(list2);
        list2.css("marginLeft", "-245px");
        list2.animate({"marginLeft":"0px"}, 500);
    });
    $(".section6_right").click(function(e){
        e.preventDefault();
        $(".section6_five_box li:first-child").appendTo(list2);
        list2.css("marginLeft", "0px");
        list2.animate({"marginLeft":"-245px"}, 500);
    });




    var list3 = $(".section8_five_box");
    $(".section8_left").click(function(e){
        e.preventDefault();
        console.log("adf")
        $(".section8_five_box li:last-child").prependTo(list3);
        list3.css("marginLeft", "-245px");
        list3.animate({"marginLeft":"0px"}, 500);
    });
    $(".section8_right").click(function(e){
        e.preventDefault();
        $(".section8_five_box li:first-child").appendTo(list3);
        list3.css("marginLeft", "0px");
        list3.animate({"marginLeft":"-245px"}, 500);
    });
});