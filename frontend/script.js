/* COMPONENTS */

const inputName = document.querySelector(".input-name");
const displayName = document.querySelector(".display-name");
inputName.addEventListener("input", (event) => {
  let inputNameData = event.target.value;
  displayName.innerHTML = inputNameData;
});

const femaleDisplayComponent = function () {
  return `
    <img src="./images/female.png">
    `;
};

const maleDisplayComponent = function () {
  return `
  <img src="./images/male.png">
    `;
};

const otherDisplayComponent = function () {
  return `
    <img src="./images/blender.png">
    `;
};

const genderOptions = [
  femaleDisplayComponent,
  maleDisplayComponent,
  otherDisplayComponent,
];

const selectGender = document.querySelector("#genders");
const displayGender = document.querySelector(".display-gender");
selectGender.addEventListener("input", (event) => {
  let selectGenderData = event.target.value;
  /* console.log(selectGenderData); */

  displayGender.innerHTML = genderOptions[selectGenderData]();
});

const blackComponent = function () {
  return /*html*/ `
  <img src="./images/blnum.jpeg">
  `;
};
const dwarvesComponent = function () {
  return /*html*/ `
  <img src="./images/dwarf.jpeg">
  `;
};
const elvesComponent = function () {
  return /*html*/ `
  <img src="./images/elves.jpeg">
  `;
};
const hobbitsComponent = function () {
  return /*html*/ `
  <img src="./images/hobbits.png">
  `;
};
const menComponent = function () {
  return /*html*/ `
  <img src="./images/nazgul.jpeg">
  `;
};
const nazgulComponent = function () {
  return /*html*/ `
  <img src="./images/men.png">
  `;
};
const ologhaiComponent = function () {
  return /*html*/ `
  <img src="./images/ologhai.jpeg">
  `;
};
const undeadComponent = function () {
  return /*html*/ `
  <img src="./images/undead.png">
  `;
};
const urukComponent = function () {
  return /*html*/ `
  <img src="./images/Uruk.jpeg">
  `;
};

const raceOptions = [
  blackComponent,
  dwarvesComponent,
  elvesComponent,
  hobbitsComponent,
  nazgulComponent,
  menComponent,
  urukComponent,
  undeadComponent,
  ologhaiComponent,
];

const selectRace = document.querySelector("#races");
const displayRace = document.querySelector(".display-race");
selectRace.addEventListener("input", (event) => {
  let selectRaceData = event.target.value;
  displayRace.innerHTML = raceOptions[selectRaceData]();
});

const beastComponent = function () {
  return /*html*/ `
  <img src="./images/beastmaster.png">
  `;
};
const executionerComponent = function () {
  return /*html*/ `
  <img src="./images/executioner.png">
  `;
};
const rangerComponent = function () {
  return /*html*/ `
  <img src="./images/ranger.png">
  `;
};
const slaverComponent = function () {
  return /*html*/ `
  <img src="./images/slaver.png">
  `;
};
const sawboneComponent = function () {
  return /*html*/ `
  <img src="./images/sawbone.png">
  `;
};

const classOptions = [
  beastComponent,
  executionerComponent,
  rangerComponent,
  slaverComponent,
  sawboneComponent,
];

const selectClass = document.querySelector("#classes");
const displayClass = document.querySelector(".display-class");
selectClass.addEventListener("input", (event) => {
  let selectClassData = event.target.value;
  displayClass.innerHTML = classOptions[selectClassData]();
});

/* DROPDOWN MENUS */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector("select");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll("option");
  /*     const selected = dropdown.querySelector('.selected'); */

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      select.innerText = option.innerText;
      select.classList.remove("select-clicked");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
    });
  });
});

/* LOAD EVENT */
/* 
function loadEvent() {
    console.log('loadEvent execution');
    const root =document.querySelector('root');

    root.insertAdjacentHTML('beforeend', inputComponent());
    root.insertAdjacentHTML('beforeend', displayComponent());

    const inputName = document.querySelector('.input-name');
    const displayName = document.querySelector('.display-name');
    inputName.addEventListener('input', (event) => {
        let inputNameData = event.target.value;
        displayName.innerHTML = inputNameData;
    });

    const selectGender = document.querySelector('#select-gender');
    const displayGender = document.querySelector('.display-gender');
    selectGender.addEventListener('click', (event) => {
        displayGender.insertAdjacentHTML('beforeend', femaleDisplayComponent(), maleDisplayComponent(), otherDisplayComponent());
    });

    const selectRace = document.querySelector('#select-race');
    const displayRace = document.querySelector('.display-race');
    selectRace.addEventListener('click', (event) => {
        let selectRaceData = event.target.value;
        displayRace.innerHTML = selectRaceData;
    });

    const selectClass = document.querySelector('#select-class');
    const displayClass = document.querySelector('.display-class');
    selectClass.addEventListener('click', (event) => {
        let selectClass = event.target.value;
        displayClass.innerHTML = selectClassData;
    });
}; */
