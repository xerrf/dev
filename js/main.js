$(document).ready(function (){

    //Makes the height of an element match its width. Used for the h2 elements
    $(function() {
        var dynamicBox = $(".square");
        var width = dynamicBox.width();

        dynamicBox.css("height", width);
    })
});