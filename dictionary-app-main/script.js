document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Basic validation
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }
  
    // Perform further validation or login process
    // Add your own logic here
    // ...
  
    // Redirect to another page
    window.location.href = "index.html"; // Replace with the desired HTML file path
  });
  