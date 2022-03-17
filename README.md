## The Golden Rule

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model.
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
  - What are the key/value pairs?
  - What arrays might you need?
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

## MY PLAN

STATE ##

- number of goblins defeated
- name and hp of each goblin - array of goblins: [{name, hp}];
- player Hit Points

HTML ELEMENTS ##

- div to hold each goblin
- div to hold the LIST of goblins
- form/input/button to add new goblins
- div/p to display number of goblins defeated
- div to hold player's HP

FUNCTIONS ##

- displayGoblins();
  - every time state changes we need the list to update and redisplay
  -renderGoblins();

EVENTS ##

- user clicks/attacks a goblin
  A. Need to update that the goblin was clicked in the array AND need to update player HP
  B. What changes with the Goblin?
    1.) Randomly determine if player hit or miss and if goblin hit or miss
    2.) If goblin hits, player HP --;
    3.) If player hits, goblin HP --;
    4.) Redisplay updated State

- User submits a new goblin
  A.) Get name from the form
  B.) Goblin object is assigned a name and random HP
  C.) New goblin rendered to our display
