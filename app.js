// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';


const formEl = document.querySelector('form');
const defeatedGoblinsEl = document.querySelector('.defeated-goblins');
const goblinListEl = document.querySelector('.goblin-list');
const playerHPEl = document.querySelector('.player-hp');

// let state
let playerHP = 3;
let goblinsDefeated = 0;

const goblinArray = [
  { name: 'Delaney', 
    hp: 3 
  },
  {
    name: 'Morgan',
    hp: 2
  }
];

displayGoblins();


// set event listeners 
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(formEl);
  //make a new goblin object with name and random HP
  const newGoblin = {
    name: data.get('goblin-name') || 'default',
    hp: Math.ceil(Math.random() * 3),
  };

  goblinArray.unshift(newGoblin);
  displayGoblins();
  formEl.reset();

});

function displayGoblins() {
  //clear out goblin list
  goblinListEl.textContent = '';

  //create an element for each goblin & append to goblinListEl
  for (let i of goblinArray) {
    const goblinEl = renderGoblin(i);

    goblinEl.addEventListener('click', () => {
      //alert('you clicked' + '' + i.name);

      if (Math.random() > .5) {
        i.hp--;
        alert(i.name + 'got hit!');
      } else {
        alert('you missed!');
      }

      if (Math.random() > .66) {
        playerHP--;
        alert(i.name + 'hit you!');         
      } else {
        alert('goblin missed!');
      }
      if (goblinEl.hp === 0) {
        goblinsDefeated++;
        defeatedGoblinsEl.textContent = `You have defeated ${goblinsDefeated} goblins`;
      }
      displayGoblins();
      playerHPEl.textContent = `Your HP: ${playerHP}`;

    });
    goblinListEl.append(goblinEl);
    
  }
  
}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
