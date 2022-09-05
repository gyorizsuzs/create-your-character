/* COMPONENTS */

const inputName = document.querySelector(".input-name");
const displayName = document.querySelector(".display-name");
inputName.addEventListener("input", (event) => {
  let inputNameData = event.target.value;
  displayName.innerHTML = inputNameData;
});

const femaleDisplayComponent = function () {
  return `
    <i class="fa-solid fa-venus"></i>
    `;
};

const maleDisplayComponent = function () {
  return `
    <i class="fa-solid fa-mars"></i>
    `;
};

const otherDisplayComponent = function () {
  return `
    <i class="fa-solid fa-blender"></i>
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
  console.log(selectGenderData);

  displayGender.innerHTML = genderOptions[selectGenderData]();
});

const blackComponent = function () {
  return /*html*/ `
  <img src="./images/blnumenoreans.webp">
  `;
};
const dwarvesComponent = function () {
  return /*html*/ `
  <img src="./images/Dwarves.webp">
  `;
};
const elvesComponent = function () {
  return /*html*/ `
  <img src="./images/elves.webp">
  `;
};
const hobbitsComponent = function () {
  return /*html*/ `
  <img src="./images/Hobbits.webp">
  `;
};
const nazgulComponent = function () {
  return /*html*/ `
  <img src="./images/nazgul.webp">
  `;
};
const ologhaiComponent = function () {
  return /*html*/ `
  <img src="./images/ologhai.webp">
  `;
};
const menComponent = function () {
  return /*html*/ `
  <img src="/images/talion.png">
  `;
};
const undeadComponent = function () {
  return /*html*/ `
  <img src="./images/Undead.webp">
  `;
};
const urukComponent = function () {
  return /*html*/ `
  <img src="./images/Uruk.webp">
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

  /* displayRace.insertAdjacentHTML("beforeend", raceOptions[i]); */
});

const beastComponent = function () {
  return /*html*/ `
  <i class="fa-solid fa-paw-claws"></i>
  `;
};
const executionerComponent = function () {
  return /*html*/ `
  <i class="fa-solid fa-skull"></i>
  `;
};
const rangerComponent = function () {
  return /*html*/ `
  <i class="fa-solid fa-user-cowboy"></i>
  `;
};
const slaverComponent = function () {
  return /*html*/ `
  <i class="fa-solid fa-handcuffs"></i>
  `;
};
const sawboneComponent = function () {
  return /*html*/ `
  <i class="fa-solid fa-bone-break"></i>
  `;
};

const classOptions = [
  beastComponent,
  executionerComponent,
  raceOptions,
  slaverComponent,
  sawboneComponent,
];

const selectClass = document.querySelector("#classes");
const displayClass = document.querySelector(".display-class");
selectClass.addEventListener("input", (event) => {
  let selectClassData = event.target.value;
  /* displayClass.innerHTML = selectClassData;
  displayClass.insertAdjacentHTML("beforeend", classOptions[i]);*/
  displayClass.innerHTML = classOptions[selectClassData]();
});

/* DROPDOWN MENUS */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
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
