/*jshint esversion: 6 */

function generateHTML([h, v]){
  return `
    <div class="item h${h} v${v}">
      <img src="./img/${getRandomNumber(16)}.jpg"></img>     
      <div class="item-overlay">
        <button class="item-btn">View -></button>
      </div>
    </div>
  `;
}

function getRandomNumber(limit){
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e){
  const src = e.currentTarget.querySelector('img').src;
  console.log(src);
  overlayImage.src = src;
  openOverlay();
}

function openOverlay(){
  overlay.classList.add('open');
}

function closeOverlay(){
  overlay.classList.remove('open');
}

const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayCloseBtn = overlay.querySelector('.close');

const headers = Array.from(
    { length: 50 }, () => {
    return [getRandomNumber(4), getRandomNumber(4)];
  })
  .concat(Array(18).fill([1,1]));

const markup = headers.map(generateHTML).join('');

gallery.innerHTML = markup;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayCloseBtn.addEventListener('click', closeOverlay);

// on keydown 'Esc'
document.addEventListener('keydown', (e) => {
  if(e.keyCode == 27 || e.key == 27 || e.which == 27) closeOverlay();
});
