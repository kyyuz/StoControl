
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
  menuToggle.setAttribute(
    "aria-label",
    navLinks.classList.contains("open") ? "Fechar menu" : "Abrir menu"
  );
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

document.querySelectorAll('a[href="#login"]').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showToast("A tela de login será conectada ao sistema de autenticação.");
  });
});

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
  });
});