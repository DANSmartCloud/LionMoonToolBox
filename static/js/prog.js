// index 事件
$(document).ready(function(){
    $(".nav li").click(function(){
        $(".content-one iframe").attr("src",$(this).attr("url"));
        $(".nav li").each(function(){$(this).attr("class","nosel");})
        $(this).attr("class","sel");
    })
    
    $(".close").click(function(){
        eCallFunction('close')
    });
    $(".min").click(function(){
        eCallFunction('min')
    });
    $(".max").click(function(){
        eCallFunction('max')
    });
});


// 公用
function open_web(url){
    eCallFunction('open_web',url);
}

