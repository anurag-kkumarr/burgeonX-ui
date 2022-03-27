// javascript for card elements

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


// javascript for modal components

const modalBtn = document.querySelector('#demo');
const modalDiv = document.querySelector('#modal-box');
const bodyTag = document.querySelector("body");
const modalClose = document.querySelectorAll(".modal-close")

modalBtn.addEventListener("click", ()=> { 
    modalDiv.style.display="flex";
    bodyTag.style.overflow = "hidden";
    bodyTag.style.backgroundColor = `rgba(0, 0, 0, 0.459)`;
    
});

window.addEventListener("click", event => {
    if (event.target === modalDiv) {
        modalDiv.style.display = "none";
        bodyTag.style.overflow = 'auto';
        bodyTag.style.backgroundColor = "white";
    } 
});

modalClose.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        modalDiv.style.display = "none";
        bodyTag.style.overflow = 'auto';
        bodyTag.style.backgroundColor = "white";
    })
});

//  snackbar js

const deleteSnackbar = document.querySelector(".delete");
const refreshSnackbar = document.querySelector(".refresh");
const deleteIcon = document.querySelector(".fa-trash");
const refreshIcon = document.querySelector(".fa-refresh");
const saveSnackbar = document.querySelector(".save");
const saveIcon = document.querySelector(".save-snackbar");

deleteIcon.addEventListener('click', ()=> {
    deleteSnackbar.style.display = 'flex';
    refreshSnackbar.style.display = 'none';
    saveSnackbar.style.display = 'none';
})

refreshIcon.addEventListener('click', ()=> {
    deleteSnackbar.style.display = 'none';
    refreshSnackbar.style.display = 'flex';
    saveSnackbar.style.display = 'none';
})

saveIcon.addEventListener('click', ()=> {
    deleteSnackbar.style.display = 'none';
    refreshSnackbar.style.display = 'none';
    saveSnackbar.style.display = 'flex';
})