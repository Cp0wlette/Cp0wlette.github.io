/*
Name: Christian Powlette
File: main.js
Date: 17 April 2024
Scripting for a silly story generator
*/

// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const username = ['Bob']
const nickname = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const establishment = ['the soup kitchen', 'Disneyland', 'the White House'];
const conclusion = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

const storyText = `It was 94 fahrenheit outside, so ${randomValueFromArray(nickname)} went for a walk. When they got to ${randomValueFromArray(establishment)}, they stared in horror for a few moments, then ${randomValueFromArray(conclusion)}. ${username} saw the whole thing, but was not surprised — ${randomValueFromArray(nickname)} weighs 300 pounds, and it was a hot day.`;

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(nickname);
  const yItem = randomValueFromArray(establishment);
  const zItem = randomValueFromArray(conclusion);

  newStory = `${newStory.replace(':insertX:', xItem)
                       .replace(':insertY:', yItem)
                       .replace(':insertZ:', zItem)}`;

  const username = customName.value.trim(); // Get the username and trim any extra spaces

  if (username !== '') {
      newStory = newStory.replaceAll('Bob', username);
  }

  if (document.getElementById("uk").checked) {
      const weight = `${Math.round(300 * 0.0714286)} stone`;
      const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;
      newStory = newStory.replace('94 fahrenheit', temperature);
      newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

