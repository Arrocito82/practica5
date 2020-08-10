// swal("God Job Andre👌😘😎", "I'm Working...!!YEi", "info");

$("h1").click(function() {
    $("h1").addClass("clicked-heading");
    $("h1").after('<p><em>Hi there, How are ya!</em></p>');
    setTimeout(function() {
        $("h1").removeClass("clicked-heading");
    }, 500);

});

// $("h1").click(function() {
//     $("h1").after("<p><em>Hi there, How are ya!</em></p>");
// });