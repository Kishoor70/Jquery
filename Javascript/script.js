// Jquery

$("document").ready(function() {
    $("#btn1").click(function(){
        $("#roos1").hide(4000); 
        $("#p1").css('color','red');
    })

    $("#btn2").click(function(){
        $("#roos1").show(4000);
        $("#p1").css('color','black');
    })

    $("#btn3").click(function(){
        $("#roos2").slideUp(4000);
        $("#p1").css('color','blue');
    })

    $("#btn4").click(function(){
        $("#roos2").slideDown(4000);
        $("#p1").css('color','black');
    })
});

// Einde Jquery

