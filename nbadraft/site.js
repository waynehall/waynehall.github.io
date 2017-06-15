

$(document).ready(function(){

    $("#button1").click(function(){
        $("#flex-container").addClass("move", function(){
            $("#card2").fadeToggle(1000, function(){
                $("#card3").fadeToggle(1000, function(){
                    $("#card4").fadeToggle(1000);
            })
        });
    })


});
});