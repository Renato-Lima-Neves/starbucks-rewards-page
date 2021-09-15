//SIDEBAR
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navLinks= document.querySelector('.nav-links');

openBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show-sidebar')
});
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show-sidebar');
});

//MENU MOBILE
const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');
const mobileLinks= document.querySelector('.mobile-links');

menu.addEventListener('click', () => {
    mobileLinks.classList.toggle('show-sidebar');
    console.log(1+1)
});
menuMobile.addEventListener('click', () => {
    mobileLinks.classList.remove('show-sidebar');
});

//TABS
const tabs = document.querySelector('.tabs');
const tabsBtn = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');


tabs.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id){
    //remove active from other btns
    tabsBtn.forEach((btn) => {
        btn.classList.remove('active');
        e.target.classList.add('active');
    });
    //hide other tabContent
    tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
   }
});

//LEARN MORE
const aboutBtns = document.querySelectorAll('.about-btn');

aboutBtns.forEach((aboutBtn) => {
    aboutBtn.addEventListener('click', (e) => {
        const showLinks = e.currentTarget.parentElement.parentElement;
        showLinks.classList.toggle('show-link');
    });
});