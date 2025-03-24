// CONSTANTS
const millisecondsInADay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const examDate = new Date(2025, 5, 18, 12, 0, 0)

// ELEMENTS
const counter = document.getElementById("counter")

// FUNCTIONS
function daysUntil(endDate) {
	return Math.abs(Math.round((new Date() - endDate) / millisecondsInADay));
}

// SCRIPT
setTimeout(window.location.reload, // Reload at midnight because it's the next day
	// Milliseconds until midnight
	new Date().setHours(24, 0, 0, 0) - new Date())

counter.innerText = daysUntil(examDate)