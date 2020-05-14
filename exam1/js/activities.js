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
            <p class="title">${result[i].mission_name}</p>
            <p class="event-date">${result[i].launch_site.site_name_long}</p>
            <p class="details">${result[i].launch_date_local}</p>
          </div>`;
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
