const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
	event.preventDefault();

	const email = document.querySelector("#email");
	const emailError = document.querySelector(".email-error");
	const emailValue = email.value;

	if (validateEmail(emailValue)) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(email);
	return patternMatches;
}
