document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation (for demo purposes)
    if (email === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Example validation (you can replace this with actual logic later)
    if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
    } else {
        alert("Incorrect email or password.");
    }
});
