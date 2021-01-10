$(document).ready(function(){
    console.log("does it work?")

    $('img').click(function(){
        $(this).hide( function(){
        console.log('img hide')
    })
})

    $('button').click(function () {
        console.log("clicked button")

        $('img').show(function () {
            console.log("show img")
        })

    })

});

