let $input_user = document.querySelectorAll("input");
let $btn = document.querySelector("button");

var input_user = function (email, pass, passcon, lastn, firstn) {
  return {
    email: email,
    pass: pass,
    passcon: passcon,
    lastn: lastn,
    firstn: firstn,
  };
};

$btn.addEventListener("click", (event) => {
  event.preventDefault();
  let users = input_user(
    email.value,
    password.value,
    password_confirm.value,
    lastn.value,
    firstn.value
  );
  z = 0
  validate = function (address) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = users.email;
    if (reg.test(address) == false) {
      email.classList.add("is-invalid");
    } else {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
      z = z + 1
    }
  };
  pass_validate = function () {
    if (users.pass.length < 8) {
      password.classList.add("is-invalid");
    } else {
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
      z = z + 1

      if (users.pass !== users.passcon) {
        password_confirm.classList.add("is-invalid");
      } else {
        password_confirm.classList.remove("is-invalid");
        password_confirm.classList.add("is-valid");
        z = z + 1

      }
    }
    if (z == 3){
      alert(`Привіт  ${users.firstn} ${users.lastn}`)
    }
  };

  validate(users.email);
  pass_validate(users.pass);
});
