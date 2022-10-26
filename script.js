const btn = document.querySelector(".btn");
const mail = document.querySelector(".mail");

const errorMsg = document.querySelector(".error-msg");

btn.addEventListener("click", function () {
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (regex.test(mail.value)) {
    errorMsg.style.display = "none";
    mail.classList.remove("error");
    mail.style.borderColor = "hsl(0, 80%, 86%)";
  } else {
    mail.classList.add("error");
    mail.style.borderColor = "red";
    errorMsg.style.display = "block";
  }
});
