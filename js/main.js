$(document).ready(function (){

    //Makes the height of an element match its width. Used for the figure, h2, and p elements within main
    $(function() {
        var dynamicBox = $(".square");
        var width = dynamicBox.width();

        dynamicBox.css("height", width);
        $("h2.square").css("width", width); //makes it so h2 size is the same as the figure behind it
    })

    // NOTE: Since there are two class="square" per section, I only want to isolate the first in each section.
    // This mean that I will be using even numbers starting from 0 (0, 2, 4, 6 ...)
    var sections = document.getElementsByClassName("square");
    

    function redirect(url) {
        window.location = url;
    }

    // Event listeners used to link to the project pages. 
    // These are used so the user does not need to click the exact <a> tag, 
    // but can click on its parent element. The hover state might signify this.
    sections[0].addEventListener("click", function() {
        redirect("bash-me.html");
    });

    sections[2].addEventListener("click", function() {
        // console.log("El 2: love.");
        redirect("love-letters/index.html");
    });

    sections[4].addEventListener("click", function() {
        // console.log("El 4: corpse.");
        redirect("corpse/index.html");
    });

    sections[6].addEventListener("click", function() {
        // console.log("El 6: sprite.");
        redirect("spriteSheets/index.html");
    });

    sections[8].addEventListener("click", function() {
        // console.log("El 6: sprite.");
        redirect("sheetAnimation/index.html");
    });
});