const closeTabBtn = document.getElementById('close-tab-mobile');
const navLinks = document.querySelector('ul');
const icon = document.querySelector('#close-tab-mobile i');

closeTabBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});
