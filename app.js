// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';


const formEl = document.querySelector('form');
const defeatedGoblinsEl = document.querySelector('.defeated-goblins');
const goblinListEl = document.querySelector('.goblin-list');
const playerHPEl = document.querySelector('.player-hp');

// let state
let playerHP = 3;
let goblinsDefeated = 0;
//console.log(playerHP);

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

    if (i.hp > 0) {
      goblinEl.addEventListener('click', () => {

        if (playerHP === 0) {
          alert('Game Over! You have no more power.');
          return;
        }

        if (Math.random() < .5) {
          playerHP--;
          alert(i.name + ' : hit you!');
        } else {
          alert(i.name + ' : missed!');
        }

        if (Math.random() < .33) {
          i.hp--;
          alert(i.name + ' : got hit');
        } else {
          alert('Goblin Hunter missed!');
        }

        if (i.hp === 0) {
          goblinsDefeated++;
        } else if (playerHP < 0) {
          alert('Game Over! You have no more power.');
        }

        playerHPEl.textContent = `Your HP: ${playerHP}`;
        defeatedGoblinsEl.textContent = `You have defeated ${goblinsDefeated} goblins`;

        displayGoblins();
      });
    }
    goblinListEl.append(goblinEl);
  }
}
displayGoblins();

  // get user input
  // use user input to update state
  // update DOM to reflect the new state
