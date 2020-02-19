$(document).ready(function ()
{ $(".sw").click(function () {
        $("#menu").fadeOut();
        $(".sw").fadeOut();
});
    $(".hd").click(function () {
        $("#menu").fadeIn();
        $(".sw").fadeIn();
    });

});
$(document).ready(function () {
$(".ser").click(function () {
    $(".menu-itm").fadeToggle();

});
});
$(document).ready(function () {
    $(".srv").click(function () {
        $("#opacity").fadeIn();
    });
    $(".srv").click(function () {
        $("#plug").hide();
    });
    $(".srv").click(function () {
        $("#menu").hide();
    });
   $(".error").click(function () {
       $("#opacity").fadeOut();

   });
    $(".error").click(function () {
        $("#plug").show();

    });
    $(".error").click(function () {
        $("#menu").show();

    });
});


