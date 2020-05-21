/*-------------------LAUNCHES API-----------------------*/

const launches = "https://api.spacexdata.com/v3/launches/upcoming";

const launchName = document.querySelector(".mission-name");
const rocketName = document.querySelector(".rocket-name");
const launchDate = document.querySelector(".launch-date");

async function getLaunchInfo() {
	try {
		const response = await fetch(launches);
		const result = await response.json();

		launchResults(result);

		console.log(result);
	} catch (error) {
		launchName1.innerHTML = "There was an error";
		console.log(error);
	}
}
getLaunchInfo();

function launchResults(result) {
	for (var i = 0; i < result.length; i++) {
		document.querySelector(".launch-container1").innerHTML += `<div class="launch-container">
            <p class="title"><span style="color: #11a0d9; font-weight: 700; font-size: 25px;">Mission Name:</span><br>${result[
				i
			].mission_name}</p>
            <p class="event-date"><span style="color: #11a0d9; font-weight: 700; font-size: 25px;">Launch Site:</span><br>${result[
				i
			].launch_site.site_name_long}</p>
            <p class="details"><span style="color: #11a0d9; font-weight: 700; font-size: 25px;">Launch Date Local Time:</span><br>${result[
				i
			].launch_date_local}</p>
          </div>`;
	}
}

/*-------------------PEOPLE IN SPACE API-----------------------*/

const peopleInSpace = "http://api.open-notify.org/astros.json";

async function spaceCount() {
	const number = document.querySelector(".number");
	try {
		const response = await fetch(peopleInSpace);
		const results = await response.json();

		spaceCountLoop(results);

		number.innerHTML = results.number;

		console.log(results);
	} catch (error) {
		console.log(error);
	} finally {
		console.log("everything is done");
	}
}
spaceCount();

function spaceCountLoop(results) {
	const craft = document.querySelector(".craft");
	const people = document.querySelector(".people");
	let info = results.people;

	for (let i = 0; i < info.length; i++) {
		craft.innerHTML += `<p>${info[i].craft}</p>`;
		people.innerHTML += `<p>${info[i].name}</p>`;

		console.log(info[i]);
	}
}

/*------------------- SHOW & HIDE -----------------------*/

var i = 0;

function read() {
	if (!i) {
		document.getElementById("more").style.display = "inline";
		document.getElementById("read").innerHTML = "Hide";
		i = 1;
	} else {
		document.getElementById("more").style.display = "none";
		document.getElementById("read").innerHTML = "Show All";
		i = 0;
	}
}
