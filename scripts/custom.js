$(document).ready(function(){
    $(".close").click(function(){
        $(".lgBox").hide();
    });

    $(".galleryX li img").click(function(){
        var x = $(this).attr("src");
        $(".contBox img").attr("src", x);
        $(".lgBox").fadeIn(500);
    });

});