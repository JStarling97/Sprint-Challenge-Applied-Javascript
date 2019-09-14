/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carousel = document.querySelector(".carousel-container");

const imgAnimation = [
  src = "/assets/carousel/computer.jpeg",
  src = "/assets/carousel/mountains.jpeg",
  src = "/assets/carousel/trees.jpeg",
  src = "/assets/carousel/turntable.jpeg"
]

imgAnimation.forEach(imgPath => {
  let image = document.createElement('img');
  image.src = imgPath;
  carousel.appendChild(newImageAnimation(image));
});

function newImageAnimation() {
  const imageSlides = document.createElement('div');
  const leftBtn = document.createElement('div');
  const rightBtn = document.createElement('div');


  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');
  imageSlides.classList.add('carousel');


  imageSlides.appendChild(leftBtn);
  imageSlides.appendChild(rightBtn);

  // rightBtn.textContent = ">";
  // leftBtn.textContent = "<";
}