/*
  Name: Christian Powlette
  File: main.js
  Date: 14 April 2024
JavaScript Scripting for a troubleshooting accesbility assesment
*/

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Hide comments section
commentWrapper.style.display = 'none';

// Add tabindex attribute to make the button focusable
showHideBtn.setAttribute('tabindex', '0');

// Function to change visibility of comments section
function toggleComments() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
}

// Comments visibility 
showHideBtn.addEventListener('click', toggleComments);
showHideBtn.addEventListener('keydown', function(event) {
  // Check if Enter key is pressed
  if (event.key === 'Enter') {
    toggleComments();
  }
});

// Adding new comments with the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}

