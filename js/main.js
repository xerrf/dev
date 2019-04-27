$(document).ready(function (){
    console.log("In main.js");

    // Initialize the height of an element match its width. Used for the figure, h2, and p elements within main
    dynamifyBoxes();

    // this function matches an element's hieght and width, used for the figure, h2, and p elements within main.
    function dynamifyBoxes() {
        let dynamicBox = $("section.box");
        let length = dynamicBox.width();
        //console.log(length);

        $("figure.square").css("height", length);
        $("figure.square").css("width", length);
        $("h2.square").css("height", length);
        $("h2.square").css("width", length);
    }
    
    // redirectes to argument url
    function redirect(url) {
        window.location = url;
    }

    // NOTE: Since there are two class="square" per section, I only want to isolate the first in each section.
    // This mean that I will be using even numbers starting from 0 (0, 2, 4, 6 ...)
    var sections = document.getElementsByClassName("square");

    // Event listeners used to link to the project pages. 
    // These are used so the user does not need to click the exact <a> tag, 
    // but can click on its parent element. The hover state might signify this.
    // I target only the even sections because each h2 also has a class of "square"
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

    sections[10].addEventListener("click", function() {
        redirect("parallax/index.html");
    });

    sections[12].addEventListener("click", function() {
        redirect("vr-sound/index.html");
    });

    sections[14].addEventListener("click", function() {
        redirect("../index.html");
    });
});