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
	for (let i = 0; i < result.length; i++) {
		launchName.innerHTML += `<p>${result[i].mission_name}</p>`;
		rocketName.innerHTML += `<p>${result[i].launch_site.site_name_long}</p>`;
		launchDate.innerHTML += `<p>${result[i].launch_date_local}</p>`;

		let noValue = "No data";

		if (result[i].mission_name) {
			noValue = result[i].mission_name;
		}

		console.log(result[i]);
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
