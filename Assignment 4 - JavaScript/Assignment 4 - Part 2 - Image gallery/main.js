
/*
Name: Christian Powlette
File: style.css
Date: 5 April 2024
Scritping for a Image gallery
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg','pic4.jpg','pic5.jpg']; 

/* Declaring the alternative text for each image file */
const altTexts = {
  'pic1.jpg': 'First image',
  'pic2.jpg': 'Second image',
  'pic3.jpg': 'Third image',
  'pic4.jpg': 'Fourth image',
  'pic5.jpg': 'Fifth image'
}; 

/* Looping through images */
imageFilenames.forEach(filename => {
  const img = document.createElement('img');
  img.src = filename;
  img.alt = altTexts[filename];
  img.classList.add('thumb-img');
  img.addEventListener('click', () => {
    displayedImg.src = filename;
    displayedImg.alt = altTexts[filename];
  });
  thumbBar.appendChild(img);
});

// Add click event listener to the button to toggle darken effect
let isDarkened = false;
darkenBtn.addEventListener('click', () => {
  if (isDarkened) {
    displayedImg.classList.remove('darken');
  } else {
    displayedImg.classList.add('darken');
  }
  isDarkened = !isDarkened;
});
