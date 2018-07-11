// connection good

// check off specific todos by clicking
$("ul").on("click", "li", (function () {
  $(this).toggleClass("completed");
}));

//remove todos when the 'X' is clicked
$("ul").on("click", "span", (function (event) {
  $(this).parent().fadeOut(500,function () {
    $(this).remove();
  });
  event.stopPropagation();
}));

//create new todos
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //grab new todo text form input
    var todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

//fade input in and out
$("#toggle-form").click(function () {
  $("input[type='text']").fadeToggle();
})
