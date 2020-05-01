const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
	event.preventDefault();

	const email = document.querySelector("#email");
	const emailError = document.querySelector("#emailError");
	const emailValue = email.value;

	if (validateEmail(emailValue)) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}

	const name = document.querySelector("#name");
	const nameError = document.querySelector("#nameError");
	const nameValue = name.value;

	if (checkInputLength(nameValue) === true) {
		nameError.style.display = "none";
	} else {
		nameError.style.display = "block";
	}
}

function checkInputLength(value) {
	const trimmedValue = value.trim();

	if (trimmedValue.length > 2) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(email);
	return patternMatches;
}
