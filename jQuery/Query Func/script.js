$(document).ready(function () {
    console.log("does it work?")

    $('#button1').click(function () {
        console.log("clicked button")

        $('#header1').hide(function () {
            console.log("toggle img")
        });

        if ($("#header1").css("display") == "none") {
            $("#header1").show(function () {
                console.log("Show...");
            })
        }

    });

    $('#button2').click(function () {
        console.log("clicked button")

        $('#header2').toggle(function () {
            console.log("toggle img")
        });
    });


    $('#button3').click(function () {
        console.log("clicked button")

        $('#header3').slideUp(function () {
            console.log("toggle img")
        });

        if ($("#header3").css("display") == "none") {
            $("#header3").slideDown(function () {
                console.log("Show...");
            })
        }

    });

    $('#button4').click(function () {
        console.log("clicked button")
        $('#header4').fadeOut(function () {
            console.log("toggle img")
        });

        if ($("#header4").css("display") == "none") {
            $("#header4").fadeIn(function () {
                console.log("Show...");
            })
        }

    });

    $('#button5').click(function(){
        $('#header5').text('It works!');
    });


    // if ($('#header5').text = 'It works!') {
    //     $('#button5').click(function(){
    //         $('#header5').text('It works!');
    //     });
    // }

});