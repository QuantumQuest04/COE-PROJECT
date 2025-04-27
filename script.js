function togglePassword(id) {
    var x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  document.getElementById("myForm").addEventListener("submit", function(event) {
    // Prevent the form initially
    event.preventDefault();
  
    let isValid = true;
  
    // Email verification
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailError.textContent = "Invalid email format";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
  
    // Password verification
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmpassword").value.trim();
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmpassworderror");
  
    // Clear previous password errors
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
  
    if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters long.";
      isValid = false;
    }
  
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      isValid = false;
    }
  
    // Finally, if form is valid
    if (isValid) {
      alert("Registration Successful! 🎉");
  
      // Submit form manually without validation blocking
      this.submit(); // But this would create loop, so better way:
  
      // --- Best way ---
      // Temporarily remove event listener, then submit
      document.getElementById("myForm").removeEventListener("submit", arguments.callee);
      this.submit();
    }
  });
  