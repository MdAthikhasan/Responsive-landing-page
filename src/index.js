// const btn = document.getElementById("togoole-btn");
// const menu = document.getElementById("menu");
// console.log(menu);
// btn.addEventListener("click", () => {
//   console.log("hi");
//   menu.classList.toggle("menu-toogle");
// });

const btn = document.getElementById("toggle-btn");
const menu = document.getElementById("menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("menu-toggle");
  });
} else {
  console.error("Element not found");
}

const copy_img_box = document.querySelector(".img-box").cloneNode(true);
document.querySelector(".img-container").appendChild(copy_img_box);

const nodeList = document.querySelectorAll(".accordien-container");
nodeList.forEach((e) =>
  e.addEventListener("click", () => {
    const accordienBox = e.nextElementSibling;

    if (accordienBox.style.maxHeight) {
      // accordienBox.classList.add("animate-fade");
      // Collapse
      accordienBox.style.maxHeight = null; // Reset to default (collapses to 0)
    } else {
      // Expand
      accordienBox.style.maxHeight = accordienBox.scrollHeight + "px";
      accordienBox.classList.add("animate-fade");
      // Set height based on content size
    }
  })
);
const copy_img_hover_box = document
  .querySelector(".img-hover-box")
  .cloneNode(true);
document.querySelector(".hover-box-container").appendChild(copy_img_hover_box);

const gridContainer = document.querySelector(".grid-container");
const gridItemTemplate = document.querySelector(".grid-item").cloneNode(true);

for (let i = 0; i < 3; i++) {
  const gridItem = gridItemTemplate.cloneNode(true);
  gridContainer.appendChild(gridItem);
}

document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.querySelector(".progress-bar");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the animation class when the element comes into view
        progressBar.classList.add("animate-progress");
        // Optionally, you can unobserve the element after the animation starts
        observer.unobserve(progressBar);
      }
    });
  });

  observer.observe(progressBar);
});

var listContainer = document.getElementById("list-holder");

// Get all buttons with class="btn" inside the container
var ul_items = listContainer.getElementsByClassName("ul-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < ul_items.length; i++) {
  ul_items[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

const dots = document.querySelectorAll(".dot");
dots.forEach((dot) => {
  dot.addEventListener("click", () => {});
});

// window.addEventListener("scroll", () => {
//   document
//     .querySelector(".page-animation")
//     .classList.add("before:animate-progress");
// });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const animateItems = document.querySelectorAll(".animate-item");
      animateItems.forEach((item) => {
        // Get the animation type from the data attribute
        const animationType = item.getAttribute("data-animation");

        // Add the animation class to trigger the effect
        entry.target.classList.add(animationType);
      });
    }
  });
});

document
  .querySelectorAll(".animate-item")
  .forEach((el) => observer.observe(el));
