$(document).ready(function(){
    console.log("does it work?");

    $("img").hover(function (){
        console.log("Img hover");
        var altImg = $(this).attr("data-alt-img");
        var sourceImg = $(this).attr("src");

        $(this).attr("data-alt-img", sourceImg);
        $(this).attr("src", altImg);
    });
})
