// connect to the HTML form
const form = document.getElementById("submit-user-info-form");

// listen for when the form is properly submitted, then call formSubmit function
form.addEventListener("submit", submitForm);

function submitForm(e) {
  //prevent the form from performing its default operation
  e.preventDefault();

  //get the email and github url values from index.html
  const email = document.getElementById("email").value;
  const githubRepoUrl = document.getElementById("githubRepoUrl").value;

  //place email and github url into formData object
  const formData = {
    email: email,
    githubRepoUrl: githubRepoUrl,
  };
  console.log(formData);

  //send fetch request, convert formData to JSON, display response / errors
  fetch("https://cv-devs-temp-challenge.vercel.app/api/challenge", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    //get response from the API
    .then((response) => response.json())
    // display response data (success message)
    .then((data) => console.log(data))
    .catch((error) => console.log("fetch error: " + error));
}
