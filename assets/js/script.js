'use strict';

// Function to toggle element visibility
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar functionality for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Testimonials modal functionality
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Function to toggle testimonials modal
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Open modal when testimonial is clicked
testimonialsItem.forEach((item) => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

// Close modal when clicking close button or overlay
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Portfolio filter functionality
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]"); // Fixed typo
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

// Function to filter portfolio projects
const filterFunc = function (selectedValue) {
  filterItems.forEach((item) => {
    if (selectedValue === "all") {
      item.classList.add("active");
    } else if (item.dataset.category.toLowerCase() === selectedValue) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Dropdown menu functionality
select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Dropdown filter selection
selectItems.forEach((item) => {
  item.addEventListener("click", function () {
    let selectedValue = this.innerText.trim().toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Filter buttons functionality
let lastClickedBtn = filterBtn[0];

filterBtn.forEach((button) => {
  button.addEventListener("click", function () {
    let selectedValue = this.innerText.trim().toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Enable/disable form submit button based on validation
formInputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    pages.forEach((page) => {
      if (this.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        link.classList.remove("active");
      }
    });
  });
});

// Filter Skills Function
function filterSkills(category) {
  const buttons = document.querySelectorAll('.button');
  const skillBoxes = document.querySelectorAll('.skill-box');

  buttons.forEach((button) => {
    if (button.dataset.category === category) {
      if (button.classList.contains('highlight')) {
        button.classList.remove('highlight');
        skillBoxes.forEach((box) => box.classList.remove('filtered-out'));
      } else {
        buttons.forEach((btn) => btn.classList.remove('highlight'));
        button.classList.add('highlight');
        skillBoxes.forEach((box) => {
          if (!box.classList.contains(category)) {
            box.classList.add('filtered-out');
          } else {
            box.classList.remove('filtered-out');
          }
        });
      }
    } else {
      button.classList.remove('highlight');
    }
  });
}

// Skill box hover effect
document.addEventListener('DOMContentLoaded', function () {
  const skillBoxes = document.querySelectorAll('.skill-box');

  skillBoxes.forEach((box) => {
    box.addEventListener('mousemove', handleMouseMove);
    box.addEventListener('mouseleave', handleMouseLeave);
  });

  function handleMouseMove(event) {
    const box = event.currentTarget;
    const rect = box.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const percentX = deltaX / centerX;
    const percentY = deltaY / centerY;

    const maxTilt = 30;
    const tiltX = maxTilt * percentY;
    const tiltY = -maxTilt * percentX;

    box.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  }

  function handleMouseLeave(event) {
    const box = event.currentTarget;
    box.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  }
});

// Redirect project items to their respective links when clicked
document.addEventListener("DOMContentLoaded", function () {
  const projectItems = document.querySelectorAll(".project-item");

  projectItems.forEach((item) => {
    item.addEventListener("click", function () {
      const projectLink = this.getAttribute("data-link");
      if (projectLink) {
        window.open(projectLink, "_blank"); // Open in a new tab
      }
    });
  });
});

