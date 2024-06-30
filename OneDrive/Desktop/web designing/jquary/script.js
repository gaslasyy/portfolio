$(document).ready(function() {
    $('#testbtn').click(function() {
       // alert('this website is for adult 18+');
       $('.box').fadeToggle(3000);
    });
    $('.box').mouseenter(function() {
        $(this).css({"background-color":"pink"});
    })
    $('.box').mouseleave(function() {
        $(this).css({"background-color":"blue"})
    })
    $('#name').blur(function() {
        var userInput = $(this).val();
        if(userInput.length < 4){
            $('.error').show();
        }
    })

});