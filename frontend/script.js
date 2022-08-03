/* COMPONENTS */

/* const inputComponent = function () {
  return /*html* `
  <section id="input-container">
  <form>
    <div class="input-name">
      <i class="fa-solid fa-user-pen"></i>
      <input type="text" placeholder="Enter Character Name" required />
      <i class="fa-solid fa-arrow-right-long"></i>
    </div>
    <div class="dropdown">
      <div class="select-gender">
        <span class="selected">Choose a Gender</span>
        <div class="caret"></div>
      </div>
      <ul class="menu">
        <li class="active">Choose a Gender</li>
        <li>Female</li>
        <li>Male</li>
        <li>Other</li>
      </ul>
    </div>
    <div class="dropdown">
      <div class="select-race">
        <span class="selected">Choose a Race</span>
        <div class="caret"></div>
      </div>
      <ul class="menu">
        <li class="active">Choose a Race</li>
        <li>Black Númenóreans</li>
        <li>Dwarves</li>
        <li>Elves</li>
        <li>Hobbits</li>
        <li>Men</li>
        <li>Nazgûl</li>
        <li>Olog-Hai</li>
        <li>Undead</li>
        <li>Uruks</li>
      </ul>
    </div>
    <div class="dropdown">
      <div class="select-class">
        <span class="selected">Choose a Class</span>
        <div class="caret"></div>
      </div>
      <ul class="menu">
        <li class="active">Choose a Class</li>
        <li>Beastmaster</li>
        <li>Executioner</li>
        <li>Ranger</li>
        <li>Slaver</li>
        <li>Sawbone</li>
      </ul>
    </div>
  </form>
</section>
    `;
}; */

/* const displayComponent = function () {
    return /*html* `
    <section id="display-container">
        <h3>Character Name</h3>
        <div class="display-name"></div>
        <h3>Character Gender</h3>
        <div class="display-gender"></div>
        <h3>Character Race</h3>
        <div class="display-race"></div>
        <h3>Character Class</h3>
        <div class="display-class"></div>
    </section>
    `;
}; */


/* DROPDOWN MENUS */

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
        });
    });
});


/* ICONS */

const femaleDisplayComponent = function () {
  return /*html*/ `
    <i class="fa-solid fa-venus"></i>
    `;
};

const maleDisplayComponent = function () {
  return /*html*/ `
    <i class="fa-solid fa-mars"></i>
    `;
};

const otherDisplayComponent = function () {
  return /*html*/ `
    <i class="fa-solid fa-blender"></i>
    `;
};

const raceDisplayComponent = function () {
  return `
    
    `;
};

/* LOAD EVENT */
/* 
function loadEvent() {
    console.log('loadEvent execution');
    const root =document.querySelector('root');

    root.insertAdjacentHTML('beforeend', inputComponent());
    root.insertAdjacentHTML('beforeend', displayComponent());

    const inputName = document.querySelector('#input-name');
    const displayName = document.querySelector('#display-name');
    inputName.addEventListener('input', (event) => {
        let inputNameData = event.target.value;
        displayName.innerHTML = inputNameData;
    });

    const selectGender = document.querySelector('#select-gender');
    const displayGender = document.querySelector('#display-gender');
    selectGender.addEventListener('click', (event) => {
        displayGender.insertAdjacentHTML('beforeend', femaleDisplayComponent(), maleDisplayComponent(), otherDisplayComponent());
    });

    const selectRace = document.querySelector('#select-race');
    const displayRace = document.querySelector('#display-race');
    selectRace.addEventListener('click', (event) => {
        let selectRaceData = event.target.value;
        displayRace.innerHTML = selectRaceData;
    });

    const selectClass = document.querySelector('#select-class');
    const displayClass = document.querySelector('#display-class');
    selectClass.addEventListener('click', (event) => {
        let selectClass = event.target.value;
        displayClass.innerHTML = selectClassData;
    });
}; */