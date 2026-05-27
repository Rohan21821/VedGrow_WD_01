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
