const closeTabBtn = document.getElementById('close-tab-mobile');
const navLinks = document.querySelector('ul');
const icon = document.querySelector('#close-tab-mobile i');

closeTabBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if(window.scrollY > 0) {
        header.style.position = "fixed";
        header.style.width = "100%";
        header.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    }else{
        header.style.position = "sticky";
        header.style.boxShadow = "none";
    }
})