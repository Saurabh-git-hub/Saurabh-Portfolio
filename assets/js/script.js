'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}


// previous Portfolio
function preport(){
  
// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

}
// preport()
// 


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// my code starts 
function magneticurser(){
  // Magnetic Cursor
const cursor = document.getElementById("magnetic-cursor");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    // transform:`scale(1)`,
  });
 });
}
magneticurser()


// my avtar fellow function
function mouseFellow(speedFactor = 1, invertDirection = false) {
  document.addEventListener('mousemove', function (event) {
    const images = document.querySelectorAll('.icon_move'); // Select all images with .icon_move class

    // Control speed and direction
    const directionMultiplier = invertDirection ? -1 : 1;
    const x = ((window.innerWidth - event.pageX * 2) / 100) * speedFactor * directionMultiplier;
    const y = ((window.innerHeight - event.pageY * 2) / 100) * speedFactor * directionMultiplier;

    images.forEach((image) => {
      image.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    });
  });
}
// Call the function with custom parameters
mouseFellow(0.5, false); // Example: slower movement and normal direction


// carde tilt animation
function addTiltEffect() {
  const sidebar = document.querySelector('.sidebar'); // Select the sidebar element

  sidebar.addEventListener('mousemove', function (event) {
    // Get the position of the mouse relative to the sidebar
    const rect = sidebar.getBoundingClientRect();
    const x = event.clientX - rect.left; // X position inside the sidebar
    const y = event.clientY - rect.top;  // Y position inside the sidebar

    // Calculate rotation angles based on mouse position
    const rotateX = ((y / rect.height) - 0.5) * 20; // Adjust 20 for intensity
    const rotateY = ((x / rect.width) - 0.5) * -20; // Negative to invert direction

    // Apply the tilt effect
    sidebar.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  sidebar.addEventListener('mouseleave', function () {
    // Reset the tilt effect when the mouse leaves
    sidebar.style.transform = 'rotateX(0) rotateY(0)';
  });
}

// Call the function to enable tilt effect
addTiltEffect();


// contect form
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

formInputs.forEach(input => {
  input.addEventListener('input', () => {
    const allFilled = [...formInputs].every(input => input.value.trim() !== '');
    formBtn.disabled = !allFilled;
  });
});
