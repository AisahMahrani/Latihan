//Registrasi
const sign_in_btn = document.querySelector("#sign-in-btn-regis");
const sign_up_btn = document.querySelector("#sign-up-btn-regis");
const container = document.querySelector(".container-regis");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


