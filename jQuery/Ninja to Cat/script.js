$(document).ready(function(){
    console.log("does it work?");

    $("img").click(function (){
        console.log("Img click");
        var altImg = $(this).attr("data-alt-img");
        var sourceImg = $(this).attr("src");

        $(this).attr("data-alt-img", sourceImg);
        $(this).attr("src", altImg);
    });
})
