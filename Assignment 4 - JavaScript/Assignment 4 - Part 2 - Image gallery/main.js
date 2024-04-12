
/*
Name: Christian Powlette
File: main.js
Date: 5 April 2024
Scritping for a Image gallery
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const input = document.getElementById("myInput");

const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg','pic4.jpg','pic5.jpg']; 
const altTexts = {
  'pic1.jpg': 'First image',
  'pic2.jpg': 'Second image',
  'pic3.jpg': 'Third image',
  'pic4.jpg': 'Fourth image',
  'pic5.jpg': 'Fifth image'
}; 

imageFilenames.forEach(filename => {
  const img = document.createElement('img');
  img.src = `images/${filename}`;
  img.alt = altTexts[filename];
  img.classList.add('thumb-img');
  img.addEventListener('click', (event) => {
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
  });
  thumbBar.appendChild(img);
});

btn.addEventListener('click', () => {
  const className = btn.getAttribute('class');
  if (className === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } 
  else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === 'ArrowLeft' || key === 'ArrowRight') {
    const currentIndex = imageFilenames.indexOf(displayedImage.src.split('/').pop());
    let newIndex;
    if (key === 'ArrowLeft') { //
      newIndex = (currentIndex - 1 + imageFilenames.length) % imageFilenames.length;
    }
    if (key === 'ArrowRight') {
      newIndex = (currentIndex + 1) % imageFilenames.length;
    }
    const newImage = imageFilenames[newIndex];
    const newAltText = altTexts[newImage];
    displayedImage.src = `images/${newImage}`;
    displayedImage.alt = newAltText;
    }
  }
);

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      const className = event.getAttribute('class');
      if (className === 'dark') {
        event.setAttribute('class', 'light');
        event.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      } 
      if (classname === 'light') {
        event.setAttribute('class', 'dark');
        event.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
      }
    }
  }
);

