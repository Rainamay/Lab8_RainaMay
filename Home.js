
$(function () {
    //parent()
    //parents()
    //find()
    //siblings()
    //children()
    // $("#wrapperSection1") will be used as a frame of reference
    $("#btn1").on("click", function () {
        console.log($("#wrapperSection1").parent().attr("id"));
        $("#wrapperSection1").parent().css({ "color": "pink" });
    });
    
    $("#btn2").on("click", function () {
        $("#wrapperSection1").siblings().css({ "color": "red" });
    });

    $("#btn3").on("click", function () {
        $("#wrapperSection1").children().css({ "color": "lightblue" })
    });

    $("#btn4").on("click", function () {
        $("#wrapperSection1").find("*").css({ "color": "orange" })
    });

    $("#btn5").on("click", function () {
        $("#wrapperSection1").parents("#content").css({ "color": "green" })
    });

   
    //Additional Sibling Methods
//next
//nextAll
//nextUntil
//closest
    // $("#wrapperSection1") will be used as a frame of reference
    $("#btn6").on("click", function () {
        $("#wrapperSection1").next().css({ "color": "cyan" });
    });

    $("#btn7").on("click", function () {
        $("#wrapperSection1").nextAll().css({ "color": "yellow" });
    });

    $("#btn8").on("click", function () {
        $("#wrapperSection1").nextUntil("h3").css({ "color": "lightgreen" })
    });

    $("#btn9").on("click", function () {
        $("#wrapperSection1").closest("*").css({"color": "red", "border": "2px solid red"})
    });

//prev
//prevAll
//prevUntil

    $("#btn10").on("click", function () {
        $("#wrapperSection1").prev().css({ "color" : "maroon"})
    });

    $("#btn11").on("click", function () {
        $("#wrapperSection1").prevAll().css({ "color": "Olive", "border": "2px solid olive" })
    });

    $("#btn12").on("click", function () {
        $("#wrapperSection1").prevUntil("#until").css({ "color": "fuchsia"})
    });

//first
//last
//filter
//not

    $("#btn13").on("click", function () {
        $("p").first().css({ "font-size": "14px" , "color" : "lime"})
    });

    $("#btn14").on("click", function () {
        $("p").last().css({ "font-size": "20px" , "color" : "aquamarine"})
    });

    $("#btn15").on("click", function () {
        $("p").filter(".para").css({"color" : "orange"})
    });

    $("#btn16").on("click", function () {
        $("p").not(".para").css({ "color": "red" , "font-size" : "30px" })
    });

    //slice

    $("#btn17").on("click", function () {
        $("p").slice(3).css({ "color": "pink", "font-size": "20px" })
    });

})

function reset()
{
    $("#wrapperSection").parent().css("color","black");
    $("#wrapperSection").siblings().css("color","black");
    $("#wrapperSection").children().css("color","black");
    $("#wrapperSection").find("*").css("color","black");
}