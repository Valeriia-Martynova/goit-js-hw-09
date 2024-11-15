const STORAGE_KEY = "feedback-form-state";

const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

function saveLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  return savedData ? JSON.parse(savedData) : null;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedData = loadLocalStorage();

  if (savedData) {
        formData = savedData;
      emailInput.value = savedData.email || "";
    messageInput.value = savedData.message || "";
  }
});

form.addEventListener("input", (event) => {
  const { name, value } = event.target;

  
  formData[name] = value.trim();

  
  saveLocalStorage();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

    if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  form.reset();
});