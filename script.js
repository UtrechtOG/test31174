function checkPassword() {
  const input = document.getElementById("password").value;
  const message = document.getElementById("message");
  const privateContent = document.getElementById("private-content");

  // intentionally insecure (client-side only)
  const correctPassword = "private123";

  if (input === correctPassword) {
    message.style.color = "lightgreen";
    message.innerText = "Access granted";
    privateContent.classList.remove("hidden");
  } else {
    message.style.color = "red";
    message.innerText = "Access denied";
  }
}
