const form = document.forms.registration;
const submit = document.getElementById("submit");
const error = document.getElementsByClassName("error")[0];

submit.addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    const { email } = form;

    if (email.value.length == 0)
      return (error.innerHTML = "<p>Oops! Please add your email</p>");
    if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1)
      return (error.innerHTML = "<p>Oops! Please check your email</p>");

    return (error.style.display = "none");
  },
  false
);
