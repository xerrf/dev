$(document).ready(function (){

    //Makes the height of an element match its width. Used for the figure, h2, and p elements within main
    $(function() {
        var dynamicBox = $(".square");
        var width = dynamicBox.width();

        dynamicBox.css("height", width);
        $("h2.square").css("width", width); //makes it so h2 size is the same as the figure behind it
        $("p.description").css("height", width);    //makes the p a squared
    })
});