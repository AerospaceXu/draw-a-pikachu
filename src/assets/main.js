const pikachu = document.querySelector('.wrapper');
const eyes = document.querySelectorAll('.eye');
const check = document.querySelectorAll('.face');

const animationAdder = (dom) => {
  if (!dom.length) {
    dom.classList.add('animation');
    return;
  }
  dom.forEach((item) => {
    item.classList.add('animation');
  });
};

const animationRemover = (dom) => {
  if (!dom.length) {
    dom.classList.remove('animation');
    return;
  }
  dom.forEach((item) => {
    item.classList.remove('animation');
  });
};

const addAnimation = () => {
  pikachu.addEventListener('mouseout', removeAnimation);
  animationAdder(eyes);
  animationAdder(check);
};

const removeAnimation = () => {
  animationRemover(eyes);
  animationRemover(check);
  pikachu.removeEventListener('mouseout', removeAnimation);
};

pikachu.addEventListener('mouseover', addAnimation);
