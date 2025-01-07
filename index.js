document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("form-reponse").textContent = "Tous les champs sont requis.";
        document.getElementById("form-reponse").style.color = "red";
    } else {
        document.getElementById("form-reponse").textContent = "Message envoyé !";
        document.getElementById("form-reponse").style.color = "green";
    }
});


let currentIndex = 0;  
let images = document.querySelectorAll(".carrousel-image");  

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

function updateCarousel() {
    let carousel = document.querySelector(".carrousel");
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;  
}

document.querySelector(".carrousel-next").addEventListener("click", nextSlide);
document.querySelector(".carrousel-prev").addEventListener("click", prevSlide);

let timer = setInterval(nextSlide, 3000);

function stopCarrousel(){
    clearInterval(timer);
}

function startCarrousel(){
    timer = setInterval(nextSlide, 3000);
}

document.querySelector(".carrousel").addEventListener("mouseover", stopCarrousel);
document.querySelector(".carrousel").addEventListener("mouseout", startCarrousel);