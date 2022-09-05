/* COMPONENTS */

let formComponent = function () {
  return `
    <form>
      <input id="nameInput" type="text" placeholder="Enter your name..."/>
    </form>
  `;
};

let displayComponent = function () {
  return `
      <p id="name-display">name here</p>
  `;
};

let genderDisplayComponent = function () {
  return `
    <p id="gender-display">gender here</p>
  `;
};
let raceDisplayComponent = function () {
  return `
  <p id="race-display">race here</p>
  `;
};
let classDisplayComponent = function () {
  return `
  <p id="class-display">class here</p>
  `;
};

let allDisplaysComponent = function () {
  return `
    <div id="final">
      <h1>Your Character<h1>
      <p id="final-gender">gender</p>
      <p id="final-race">race</p>
      <p id="final-class">class</p>
    </div>
  `;
};

let contentComponent = function (first, second) {
  return `
    <section class="first">${first}</section>
    <section class="second">${second}</section>
  `;
};

/* DROPDOWN MENUS */

let dropdownGender = function () {
  return `
    <label for="gender-select"></label>
    <select name="gender" id="gender-select">
      <option value="choose">Choose Gender</option>
      <option value="Female">Female</option>
      <option value="Male">Male</option>
      <option value="Other">Other</option>
  `;
};

let dropdownRace = function () {
  return `
  <label for="race-select"></label>
  <select name="race" id="race-select">
    <option value="choose">Choose Race</option>
    <option value="blnumenoreans">Black Numenoreans</option>
    <option value="dwarves">Dwarves</option>
    <option value="elves">Elves</option>
    <option value="nazgul">Nazgul</option>
    <option value="ologhai">Ologhai</option>
    <option value="men">Men</option>
    <option value="undead">Undead</option>
    <option value="uruks">Uruks</option>
  `;
};

let dropdownClass = function () {
  return `
  <label for="class-select"></label>
  <select name="class" id="class-select">
    <option value="choose">Choose Class</option>
    <option value="beastmaster">Beastmaster</option>
    <option value="executioner">Executioner</option>
    <option value="ranger">Ranegr</option>
    <option value="slaver">SLaver</option>
    <option value="sawbone">Sawbone</option>
  `;
};

/* DISPLAY */

function displayGender() {
  let imageGender = document.getElementById("gender-select").value;
  document.getElementById("gender-display").innerHTML = imageGender;
  document.getElementById("final-gender").innerHTML = imageGender;
}

function displayRace() {
  let imageRace = document.getElementById("race-select").value;
  document.getElementById("race-display").innerHTML = imageRace;
  document.getElementById("final-race").innerHTML = imageRace;
}

function displayClass() {
  let imageClass = document.getElementById("class-select").value;
  document.getElementById("calss-display").innerHTML = imageClass;
  document.getElementById("final-class").innerHTML = imageClass;
}

/* let inputElement = null;
const displayElement = null; */

function loadEvent() {
  console.log("site loaded");
  let root = document.querySelector("#root");

  const first = formComponent();
  const second = displayComponent();

  root.insertAdjacentHTML(
    "afterbegin",
    contentComponent(first, second) +
      dropdownGender() +
      dropdownRace() +
      dropdownClass() +
      displayGender() +
      displayRace() +
      displayClass() +
      allDisplaysComponent()
  );

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
  });

  const inputElement = document.querySelector("#nameInput");
  const displayElement = document.querySelector("#name-display");

  const genderPicker = document.querySelector("#gender-select");
  genderPicker.addEventListener("change", displayGender);

  const racePicker = document.querySelector("#race-select");
  racePicker.addEventListener("change", displayRace);

  const classPicker = document.querySelector("#class-select");
  classPicker.addEventListener("change", displayClass);

  inputElement.addEventListener("input", function (event) {
    let inputData = event.target.value;
    displayElement.innerHTML = inputData;
  });
  console.log(inputElement);
}

window.addEventListener("load", loadEvent);
