window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

const textArray = [
    "Frontend Web Developer",
    "Web Designer",
    "JavaScript Learner",
    "Responsive Website Creator"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    const typingElement = document.querySelector(".typing");

    currentText = textArray[index];

    if(!isDeleting){

        typingElement.textContent =
        currentText.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentText.length){
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
        currentText.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){
            isDeleting = false;
            index++;

            if(index === textArray.length){
                index = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

document.addEventListener("DOMContentLoaded", typeEffect);

const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {

    hiddenElements.forEach((el) => {

        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < window.innerHeight - 100){
            el.classList.add("show");
        }

    });

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});