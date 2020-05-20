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
	for (var i = 0; i < historyResults.length; i++) {
		document.querySelector(".section3").innerHTML += `<div class="history-container">
            <p class="title">${historyResults[i].title}</p>
            <p class="event-date">${historyResults[i].event_date_utc}</p>
            <p class="details">${historyResults[i].details}</p>
          </div>`;
	}
}

/*------------------- SHOW & HIDE HISTORY-----------------------*/

var i = 0;
var reade = document.getElementById("section3");
var readbtn = document.getElementById("show-more-btn");
function readFunction() {
	if (i == 0) {
		reade.style.display = "block";
		readbtn.innerHTML = "Hide";

		i = 1;
	} else {
		reade.style.display = "none";
		readbtn.innerHTML = "Read More";

		i = 0;
	}
}

/*------------------- SHOW & HIDE ISS-----------------------*/

var i = 0;
var readmore = document.getElementById("readMore");
var readmorebtn = document.getElementById("readMoreBtn");
function read() {
	if (i == 0) {
		readmore.style.display = "block";
		readmorebtn.innerHTML = "Hide";

		i = 1;
	} else {
		readmore.style.display = "none";
		readmorebtn.innerHTML = "Read More";

		i = 0;
	}
}
