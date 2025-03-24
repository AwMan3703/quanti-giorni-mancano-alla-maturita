// CONSTANTS
const millisecondsInADay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const examDate = new Date(2025, 5, 18, 0, 0, 0)
const calendar_size = 3
const calendar_fontSize = visualViewport.width / 100 * 11

// ELEMENTS
const counter_element_template = document.getElementById("counter-element-template")
const counter_past = document.getElementById("counter-past-days")
const counter = document.getElementById("counter")
const counter_future = document.getElementById("counter-future-days")
const counter_cross_out = document.getElementById("cross-out-counter")

// FUNCTIONS
function daysUntil(endDate) {
	return Math.round((endDate - new Date()) / millisecondsInADay);
}

function counter_element(n, i) {
	if (!("content" in document.createElement("template"))) { throw new Error("Cannot use template elements")}

	const newElement = counter_element_template.content.cloneNode(true).querySelector(".counter-element")
	newElement.innerText = n.toString()
	newElement.style.fontSize = `${calendar_fontSize / ((calendar_size/2) + (i-1))}px`

	return newElement
}

// SCRIPT
const daysUntilExam = daysUntil(examDate)

setTimeout(window.location.reload, // Reload at midnight because it's the next day
	// Milliseconds until midnight
	new Date().setHours(24, 0, 0, 0) - new Date())


for (let i = calendar_size; i > 0; i--)
	counter_past.appendChild(counter_element(daysUntilExam + i, i))

counter.innerText = daysUntilExam.toString()
counter.style.fontSize = calendar_fontSize.toString()

for (let i = 1; i < calendar_size + 1; i++)
	if (daysUntilExam - i > 0) counter_future.appendChild(counter_element(daysUntilExam - i, i))

counter_cross_out.innerText = (daysUntilExam + 1).toString() // Cross out until yesterday