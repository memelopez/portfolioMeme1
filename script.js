let imgCR7 = document.getElementById('imgCris');
let imgCounter = 0;

function changeImg() {
  // console.log('hello');
  imgCounter++;
  imgCR7.src = `./imgs/cris${imgCounter}.jpg`;
  if (imgCounter >= 4) {
    imgCounter = 0;
  }
}