
// navbar-toggler-icon

const icon = document.querySelector(".navbar-toggler-icon");

icon.addEventListener("click", (event) => {
  event.target.classList.toggle("icn-spinner");
});
