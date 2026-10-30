const API_BASE = window.PORTFOLIO_API_URL || "http://localhost:5000/api";
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusText.textContent = "";
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form).entries());
  const button = form.querySelector("button");
  button.disabled = true;
  button.textContent = "Sending...";
  try {
    const response = await fetch(`${API_BASE}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Could not send message.");
    statusText.textContent = "Thanks! Your message was sent successfully.";
    form.reset();
  } catch (error) {
    statusText.textContent = `${error.message} Make sure the backend is running.`;
    statusText.style.color = "#ff9c9c";
  } finally {
    button.disabled = false;
    button.textContent = "Send Message ↗";
  }
});