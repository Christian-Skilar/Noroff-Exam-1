/*-------------------PTESLA ROADSTER API-----------------------*/

const teslaRoadster = "https://api.spacexdata.com/v3/roadster";

async function roadster() {
	const name = document.querySelector(".tesla-name");
	const teslaImg = document.querySelector(".tesla-img");
	const teslaDescription = document.querySelector(".tesla-description");
	try {
		const response = await fetch(teslaRoadster);
		const result = await response.json();

		name.innerHTML = result.name;
		teslaImg.src = result.flickr_images[0];
		teslaDescription.innerHTML = result.details;

		console.log(result);
	} catch (error) {}
}
roadster();

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

/*-------------------SpaceX HISTORY-----------------------*/

const history = "https://api.spacexdata.com/v3/history";

async function spaceHistory() {
	try {
		const response = await fetch(history);
		const historyResults = await response.json();

		spaceHistoryLoop(historyResults);

		console.log(historyResults);
	} catch (error) {
		console.log(error);
	} finally {
		console.log("everything is done");
	}
}
spaceHistory();

function spaceHistoryLoop(historyResults) {
	const title = document.querySelector(".title");
	const date = document.querySelector(".event-date");
	const detail = document.querySelector(".details");

	for (let i = 0; i < historyResults.length; i++) {
		title.innerHTML += `<p>${historyResults[i].title}</p>`;
		date.innerHTML += `<p>${historyResults[i].event_date_utc}</p>`;
		detail.innerHTML += `<p>${historyResults[i].details}</p>`;

		console.log(historyResults[i]);
	}
}
