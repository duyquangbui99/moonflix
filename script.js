function checkUserInput() {
    // Get the user input value
    var userInput = document.getElementById("userInput").value;
  
    // Check if the user input is not empty and equals "Quang"
    if (userInput.trim() !== "" && userInput === "Moon Love Quang"  || userInput === "Quang") {
      // Enable scrolling
      document.body.classList.remove("disable-scroll");
  
      // Scroll to the "features" section
      var featuresSection = document.querySelector(".features");
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  // Disable scrolling by adding a CSS class to the body
  document.body.classList.add("disable-scroll");
  
