
const myName = "Hlieb";

const welcomeParagraph = document.getElementById("welcome-message");

welcomeParagraph.textContent = "Welcome, " + myName + "!";

let count = 0;

const countParagraph = document.getElementById("study-count");
const addButton = document.getElementById("add-session");
const resetButton = document.getElementById("reset-session");

addButton.addEventListener("click", function () {
    count++;
    countParagraph.textContent = "Study sessions today: " + count;
});

resetButton.addEventListener("click", function () {
    count = 0;
    countParagraph.textContent = "Study sessions today: 0";
});

const goals = [
    "Read notes",
    "Finish lab",
    "Practice JavaScript"
];


for (let i = 0; i < goals.length; i++) {
    console.log(goals[i]);
}

const showGoalsButton = document.getElementById("show-goals");
const goalsList = document.getElementById("js-goals");

showGoalsButton.addEventListener("click", function () {

    goalsList.innerHTML = "";

    for (let i = 0; i < goals.length; i++) {
        const li = document.createElement("li");
        li.textContent = goals[i];
        goalsList.appendChild(li);
    }

});


const hoursStudied = 3;

if (hoursStudied >= 3) {
    console.log("Good progress");
} else {
    console.log("You should study more");
}