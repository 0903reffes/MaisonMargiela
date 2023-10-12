$(function(){

    //카테고리 탭
    const tabBtn = $(".title_box1 > a");
    const tabCont = $(".category_wrap > div");

    tabCont.hide().eq(0).show();

    tabBtn.on("click", function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();

    });   


});
