async function loginUser(event) {
    event.preventDefault(); // Prevent page refresh

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    
    if (response.ok) {
        alert("Login Successful! Token: " + data.token);
        localStorage.setItem("token", data.token); // Store token for future requests
    } else {
        alert("Error: " + data.message);
    }
}
