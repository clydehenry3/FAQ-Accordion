const dropdowns = document.querySelectorAll(".dropdown");

function toggleDropdown(event) {
  const currentDropdown = event.currentTarget.parentElement;
  const isActive = currentDropdown.classList.contains("active");

  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
    dropdown.querySelector(".plus").style.display = "inline";
    dropdown.querySelector(".minus").style.display = "none";
    dropdown.querySelector(".answer").style.maxHeight = "0";
    dropdown.querySelector(".answer").style.opacity = "0";
  });

  if (!isActive) {
    currentDropdown.classList.add("active");
    currentDropdown.querySelector(".plus").style.display = "none";
    currentDropdown.querySelector(".minus").style.display = "inline";
    currentDropdown.querySelector(".answer").style.maxHeight = "500px";
    currentDropdown.querySelector(".answer").style.opacity = "1";
  }
}

dropdowns.forEach((dropdown) => {
  dropdown.querySelector(".question").addEventListener("click", toggleDropdown);
});
