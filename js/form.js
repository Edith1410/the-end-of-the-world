const form = document.querySelector("form");
// Hent værdier fra form

// Sæt værdier ind i output-elementer
const outputFirst = document.querySelector("#first_output");
const outputEmail = document.querySelector("#email_output");
const outputBirth = document.querySelector("#birth_output");
const outputWeight = document.querySelector("#weight_output");
const outputSkill = document.querySelector("#skill_output");
const outputMoney = document.querySelector("#money_output");
const outputComment = document.querySelector("#comment_output");
const outputTerms = document.querySelector("#terms_output");

//og denne//
function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  // 2. vis værdierne i de rigtige output-felter
  outputFirst.textContent = formData.get("name");
  outputEmail.textContent = formData.get("email");
  outputBirth.textContent = formData.get("age");
  outputWeight.textContent = formData.get("Weight");
  outputSkill.textContent = formData.getAll("skills");
  outputMoney.textContent = formData.getAll("money");
  outputComment.textContent = formData.get("comment");
  outputTerms.textContent = formData.get("accept_terms");
  form.reset();
}
form.addEventListener("submit", handleSubmit);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);
