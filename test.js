function displayImage(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.getElementById("cards-el").appendChild(img);
}

displayImage('Cards-Images/Ace_of_spades.svg.png', 30, 50)