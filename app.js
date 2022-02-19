const floatBtn = document.querySelector(".float-btn");

const rootElement = document.documentElement;

const dismissBtn = document.querySelector(".pos-dismiss");
const dismissCard = document.querySelector("#dismiss");
const showBtn = document.querySelector("#show-btn");

showBtn.style.display = 'none';
const scrollToTop = () => {
   rootElement.scrollTo({
       top: 0,
       behavior: "smooth"
   })
}

const hideCard = () => {
    dismissCard.style.display = 'none';
    showBtn.style.display = 'block';
}
const showCard = () => {
    dismissCard.style.display = 'block';
    showBtn.style.display = 'none';
}

floatBtn.addEventListener('click',scrollToTop);
dismissBtn.addEventListener('click',hideCard);
showBtn.addEventListener('click',showCard);
