export function renderGoblin(i) {
	const goblinEl = document.createElement('div');
	const nameEl = document.createElement('p');
	const hpEl = document.createElement('p');

	goblinEl.classList.add('goblin');

	let goblinEmoji = '';

	if (goblinEl.hp === 3) {
		goblinEmoji = '🧝‍♀️'
	} else if (goblinEl.hp === 1 || goblinEl.hp === 2) {
		goblinEmoji = '🧛‍♀️'
	} else if (goblinEl.hp < 1) {
		goblinEmoji = '🧟‍♀️';
	}

	nameEl.textContent = i.name;
	hpEl.textContent = `${goblinEmoji} ${i.hp}`;

	goblinEl.append(nameEl, hpEl);
	return goblinEl;
}