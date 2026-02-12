const themeToggleBtn = document.getElementById("themeToggle");
const greetingEl = document.getElementById("greeting");
const yearEl = document.getElementById("year");
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

/* ============================
   Footer Year
============================ */
yearEl.textContent = new Date().getFullYear();

/* ============================
   Time-Based Greeting
============================ */
function setGreeting() {
  const currentHour = new Date().getHours();
  let greetingMessage;

  if (currentHour < 12) {
    greetingMessage = "Good morning";
  } else if (currentHour < 18) {
    greetingMessage = "Good afternoon";
  } else {
    greetingMessage = "Good evening";
  }

  greetingEl.textContent = `${greetingMessage}! Welcome to my portfolio.`;
}

setGreeting();

/* ============================
   Theme Toggle Logic
============================ */
function updateButtonText() {
  if (document.body.classList.contains("dark")) {
    themeToggleBtn.textContent = "Switch to Light Mode";
  } else {
    themeToggleBtn.textContent = "Switch to Dark Mode";
  }
}

/* Load saved theme */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

updateButtonText();

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateButtonText();
});

/* ============================
   Contact Form Demo
============================ */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  statusEl.textContent = "Thanks! Your message was received.";

  form.reset();
});
