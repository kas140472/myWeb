 // Function to animate the buttons on click
 function animateButtonClick(button) {
    button.classList.add("button-clicked");
    setTimeout(() => {
      button.classList.remove("button-clicked");
    }, 300);
  }

  // Attach click event listeners to the buttons
  const ccBtn = document.querySelector(".cc-btn");
  const lcBtn = document.querySelector(".lc-btn");
  ccBtn.addEventListener("click", () => {
    animateButtonClick(ccBtn);
    window.location.href = "resume.html";
  });
  lcBtn.addEventListener("click", () => {
    animateButtonClick(lcBtn);
    window.location.href = "projects.html";
  });