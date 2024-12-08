let slideIndex = 0;

function showSlides(n) {
    let slides = document.getElementsByClassName("grid_item");
    if (n >=slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex = slideIndex + n);
}

showSlides(slideIndex);
