const dropdowns = document.querySelectorAll(".dropdown");

function toggleDropdown(event) {
  const currentDropdown = event.currentTarget.parentElement;
  const isActive = currentDropdown.classList.contains("active");

  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
    dropdown.querySelector(".plus").style.display = "inline";
    dropdown.querySelector(".minus").style.display = "none";
    dropdown.querySelector(".answer").style.display = "none";
  });

  if (!isActive) {
    currentDropdown.classList.add("active");
    currentDropdown.querySelector(".plus").style.display = "none";
    currentDropdown.querySelector(".minus").style.display = "inline";
    currentDropdown.querySelector(".answer").style.display = "block";
  }
}

dropdowns.forEach((dropdown) => {
  dropdown.querySelector(".question").addEventListener("click", toggleDropdown);
});
