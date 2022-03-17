export function renderGoblin(i) {
  const goblinEl = document.createElement('div');
  const nameEl = document.createElement('p');
  const hpEl = document.createElement('p');

  goblinEl.classList.add('goblin');

  let goblinEmoji = '';
  nameEl.textContent = i.name;

  if (i.hp === 3) {
    goblinEmoji = '🧝‍♀️';
  } 
  if (i.hp === 1 || i.hp === 2) {
    goblinEmoji = '🧛‍♀️';
  } 
  if (i.hp < 1) {
    goblinEmoji = '🧟‍♀️';
  }

  hpEl.textContent = `${goblinEmoji} ${i.hp}`;

  goblinEl.append(nameEl, hpEl);
  return goblinEl;
}