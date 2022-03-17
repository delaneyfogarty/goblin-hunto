// import functions and grab DOM elements

const formEl = document.querySelector('form');
const defeatedGoblinsEl = document.querySelector('.defeated-goblins');
const goblinlistEl = document.querySelector('.goblin-list');
const playerHPEl = document.querySelector('.player-hp');

// let state
let playerHP = 3;
let goblinsDefeated = 0;

const goblinArray [
  { name: '', 
    hp: 3 
  }
]

// display goblins fxn 


// set event listeners 
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(formEl);
  //make a new goblin object with name and random HP
  const newGoblin = {
    name: data.get('goblin-name');
    hp: Math.ceil(Math.random() * 3),
  };

  goblinArray.unshift(newGoblin);
  // display goblin fxn 
  formEl.reset();

});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
