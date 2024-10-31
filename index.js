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
