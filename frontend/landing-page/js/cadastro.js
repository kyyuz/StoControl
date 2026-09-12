
const signupForm = document.getElementById("signupForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");
const toggleConfirm = document.getElementById("toggleConfirm");
const formMessage = document.getElementById("formMessage");

function toggleField(input, button) {
  const isPassword = input.type === "password";

  input.type = isPassword ? "text" : "password";
  button.textContent = isPassword ? "Ocultar" : "Mostrar";
  button.setAttribute(
    "aria-label",
    isPassword ? "Ocultar senha" : "Mostrar senha"
  );
}

togglePassword.addEventListener("click", () => {
  toggleField(passwordInput, togglePassword);
});

toggleConfirm.addEventListener("click", () => {
  toggleField(confirmPasswordInput, toggleConfirm);
});

signupForm.addEventListener("submit", event => {
  event.preventDefault();
  formMessage.classList.remove("show");

  const name = document.getElementById("name").value.trim();
  const company = document.getElementById("company").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const terms = document.getElementById("terms").checked;

  if (!name || !company || !email || !password || !confirmPassword) {
    showMessage("Preencha todos os campos para continuar.");
    return;
  }

  if (!document.getElementById("email").validity.valid) {
    showMessage("Digite um e-mail válido.");
    return;
  }

  if (password.length < 8) {
    showMessage("A senha deve ter pelo menos 8 caracteres.");
    return;
  }

  if (password !== confirmPassword) {
    showMessage("As senhas não são iguais.");
    return;
  }

  if (!terms) {
    showMessage("Aceite os termos de uso para continuar.");
    return;
  }

  showMessage(
    "Cadastro de demonstração: conecte este formulário ao backend para criar a conta."
  );
});

function showMessage(message) {
  formMessage.textContent = message;
  formMessage.classList.add("show");
}