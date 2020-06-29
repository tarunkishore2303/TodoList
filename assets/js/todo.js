// Function to add a click event with jQuery to perform strike through
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");    
});


$("ul").on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // A variable to store the new todo item into the list
        var todoText = $(this).val();
        // Replace the typed input into a empty one
        $(this).val("");
        // The item is to be added into the new list
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
}
     
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
});