// connect to the HTML form
const form = document.getElementById("submit-user-info-form");

// listen for when the form is properly submitted, then call formSubmit function
form.addEventListener("submit", submitForm);

function submitForm(e) {
  //prevent the form from performing its default operation
  e.preventDefault();

  //TODO implement form field validation, if successful continue to fetch request

  const formData = new FormData();
  //get the email and github url values
  formData.append("email", document.querySelector('input[name="email"]').value);
  formData.append(
    "githubRepoUrl",
    document.querySelector('input[name="githubRepoUrl"]').value
  );

  console.log(formData);

  //send fetch request
  fetch("https://cv-devs-temp-challenge.vercel.app/api/challenge", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      res.ok ? console.log(res) : console.log("failure");
    })
    .catch((error) => console.log(error));
}
