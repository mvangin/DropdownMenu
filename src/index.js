const conflictTitle = document.querySelector(".conflictTitle");
const researchTitle = document.querySelector(".researchTitle");
const storeTitle = document.querySelector(".storeTitle");

const conflictDropdown = document.querySelector(".conflict-dropdown");
const researchDropdown = document.querySelector(".research-dropdown");
const storeDropdown = document.querySelector(".store-dropdown");
const navbar = document.querySelector(".navbar");
const allNavDropdowns = document.querySelectorAll(".navDropdown");
const allNavTitles = document.querySelectorAll(".navTitle");


window.addEventListener("click", (e) => {
    if (e.target !== conflictTitle) {
        conflictTitle.nextElementSibling.classList.remove('active')
    }
    if (e.target !== researchTitle) {
        researchTitle.nextElementSibling.classList.remove('active');
    }
    if (e.target !== storeTitle) {
        storeTitle.nextElementSibling.classList.remove('active');
    }
});

function menuDrop(menuItem) {
    menuItem.addEventListener("click", (e) => {
        menuItem.nextElementSibling.classList.toggle("active");
    })
}

menuDrop(conflictTitle);
menuDrop(researchTitle);
menuDrop(storeTitle);



const images = document.querySelectorAll(".image");
let index = 0;


const picCircleNavWrapper = document.querySelector(".picCircleNavWrapper");

function createNavCircles() {
    for (let i = 0; i < images.length; i++) {
        const picCircleButton = document.createElement("div");
        picCircleButton.classList.add("picCircleButton");
        picCircleButton.addEventListener("click", () => {
            currentPic(i);
        })
        picCircleNavWrapper.appendChild(picCircleButton);
    }
}

createNavCircles();

const circleButtons = document.querySelectorAll(".picCircleButton");
const nextButton = document.querySelector(".nextButton");

images[0].style.opacity = "1";
circleButtons[0].style.background = "black";
nextButton.addEventListener("click", nextPic);


function currentPic(newIndex) {
    images[index].style.opacity = "0";
    circleButtons[index].style.background = "white";

    index = newIndex;
    images[index].style.opacity = "1";
    circleButtons[index].style.background = "black";

}

function nextPic() {
    images[index].style.opacity = "0";
    circleButtons[index].style.background = "white";

    index += 1;

    if (index > images.length - 1) {
        index = 0
    }
    images[index].style.opacity = "1";
    circleButtons[index].style.background = "black";
}

const prevButton = document.querySelector(".previousButton");
prevButton.addEventListener("click", prevPic);

function prevPic() {
    images[index].style.opacity = "0";
    circleButtons[index].style.background = "white";

    index -= 1;

    if (index < 0) {
        index = images.length - 1;
    }
    images[index].style.opacity = "1";
    circleButtons[index].style.background = "black";

}

window.setInterval(nextPic, 3000);









