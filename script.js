function pickPlan(planName) {
  alert(`Selected plan: ${planName} (demo)`);
}

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Please fill all fields.";
    return;
  }

  status.textContent = "Message sent (demo). ✅";
  event.target.reset();

  setTimeout(() => {
    status.textContent = "";
  }, 2500);
}
