const floatBtn = document.querySelector(".float-btn");

const rootElement = document.documentElement;

const scrollToTop = () => {
   rootElement.scrollTo({
       top: 0,
       behavior: "smooth"
   })
}

floatBtn.addEventListener('click',scrollToTop);