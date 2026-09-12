
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const formMessage = document.getElementById("formMessage");
const forgotPassword = document.getElementById("forgotPassword");

function showMessage(message) {
  formMessage.textContent = message;
  formMessage.classList.add("show");
}

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Ocultar" : "Mostrar";
  togglePassword.setAttribute(
    "aria-label",
    isPassword ? "Ocultar senha" : "Mostrar senha"
  );
});

loginForm.addEventListener("submit", event => {
  event.preventDefault();
  formMessage.classList.remove("show");

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    showMessage("Preencha todos os campos para continuar.");
    return;
  }

  if (!emailInput.validity.valid) {
    showMessage("Digite um e-mail válido.");
    return;
  }

  if (password.length < 6) {
    showMessage("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  showMessage("Interface de demonstração: conecte este formulário ao seu backend para autenticar o usuário.");
});

forgotPassword.addEventListener("click", event => {
  event.preventDefault();
  showMessage("A recuperação de senha será disponibilizada quando o sistema de autenticação estiver conectado.");
});