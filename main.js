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

$btn.addEventListener("click", () => {
  let users = input_user(
    email.value,
    password.value,
    password_confirm.value,
    lastn.value,
    firstn.value
  );
  validate = function (address) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = users.email;
    if (reg.test(address) == false) {
      email.classList.add('is-invalid')
      
    } else {
        email.classList.remove('is-invalid')

        email.classList.add('is-valid')

    }
  };
  pass_validate = function(pass){
      pass = users.pass
      console.log(pass)
  }
  validate(users.email);
});
