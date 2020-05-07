/*-------------------INTERNATIONAL SPACE STATION API-----------------------*/

const url = "http://api.open-notify.org/iss-now.json";

async function getInfo() {
	const h3 = document.querySelector("#h3");
	const h31 = document.querySelector("#h31");

	try {
		const response = await fetch(url);
		const results = await response.json();

		h3.innerHTML = results.iss_position.latitude;
		h31.innerHTML = results.iss_position.longitude;

		console.log(results);
	} catch (error) {
		console.log(error);
	} finally {
		console.log("everything is done");
	}
}
getInfo();
let liveFeed = setInterval(getInfo, 2000);

/*-------------------PEOPLE IN SPACE API-----------------------*/

const peopleInSpace = "http://api.open-notify.org/astros.json";

async function spaceCount() {
	const p = document.querySelector(".show-more");

	try {
		const response = await fetch(peopleInSpace);
		const results = await response.json();

		p.innerHTML = results.number;

		console.log(results);
	} catch (error) {
		console.log(error);
	} finally {
		console.log("everything is done");
	}
}
spaceCount();

/*-------------------FOOTER NEWSLETTER FORM VALIDATION-----------------------*/

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

/*-------------------LAUNCHES API-----------------------*/

const launches = "https://api.spacexdata.com/v3/launches/upcoming";

async function getLaunchInfo() {
	const launchName1 = document.querySelector(".launchName1");
	const launchName2 = document.querySelector(".launchName2");
	const launchDate1 = document.querySelector(".launchDate1");
	const launchDate2 = document.querySelector(".launchDate2");

	try {
		const response = await fetch(launches);
		const result = await response.json();

		launchName1.innerHTML = result[0].mission_name;
		launchName2.innerHTML = result[1].mission_name;
		launchDate1.innerHTML = result[0].launch_date_local;
		launchDate2.innerHTML = result[1].launch_date_local;

		console.log(result);
	} catch (error) {
		launch2.innerHTML = "There was an error";
		console.log(error);
	}
}
getLaunchInfo();

/*-------------------TESLA API-----------------------*/

const teslaRoadster = "https://api.spacexdata.com/v3/roadster";

async function roadster() {
	const roadsterImg = document.querySelector(".tesla-roadster");
	const roadsterName = document.querySelector(".tesla-name");
	try {
		const response = await fetch(teslaRoadster);
		const result = await response.json();

		roadsterImg.src = result.flickr_images[0];
		roadsterName.innerHTML = result.name;

		console.log(result);
	} catch (error) {}
}
roadster();
