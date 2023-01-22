// AOS.js init
AOS.init({
    delay: 200,
    duration: 1500
});

// toggle navigation
const navContainer = document.querySelector('.nav-container')
const menuButton = document.querySelector('.menu-btn');
const mainNavigation = document.querySelector('.main-nav');

function handleNavigation(){
    navContainer.classList.toggle('opened');
    mainNavigation.classList.toggle('d-none');
    menuButton.classList.toggle('opened');
    if ( menuButton.children[0].classList.contains('fa-bars') ){
        menuButton.children[0].classList.replace('fa-bars', 'fa-times');
    } else if ( menuButton.children[0].classList.contains('fa-times') ) {
        menuButton.children[0].classList.replace('fa-times', 'fa-bars');
    }
}

menuButton.addEventListener('blur', () =>{ menuButton.style.border = 'none' });
menuButton.addEventListener('click', handleNavigation);
window.addEventListener('click', e =>{ e.target === navContainer ? handleNavigation() : false });

// language select functionality
const srbItems = document.querySelectorAll('.srb-item');
const engItems = document.querySelectorAll('.eng-item');
const selectLanguage = document.querySelector('#language');

engItems.forEach((item) =>{
    item.setAttribute('lang' , 'en');
});

function showSerbian(){
    engItems.forEach((item) =>{
        item.classList.add('d-none');
    })
    srbItems.forEach((item) =>{
        item.classList.remove('d-none');
    })
}

function showEnglish(){
    srbItems.forEach((item) =>{
        item.classList.add('d-none');
    })
    engItems.forEach((item) =>{
        item.classList.remove('d-none');
    })
}

selectLanguage.addEventListener('change', () =>{
    if ( selectLanguage.value === 'eng' ){
        showEnglish();
        localStorage.setItem('chosen-lang', selectLanguage.value);
        selectLanguage.children[1].selected = true;
    } else {
        showSerbian();
        localStorage.setItem('chosen-lang', selectLanguage.value );
        selectLanguage.children[0].selected = true;
    }
});

let chosenLang = localStorage.getItem('chosen-lang');
if( chosenLang === 'eng'){
    showEnglish();
    selectLanguage.children[1].selected = true;
} else {
    showSerbian();
    selectLanguage.children[0].selected = true;
}


// go to top button
const goToTop = document.querySelector('.go-to-top');

window.addEventListener('scroll', () =>{
    if ( document.documentElement.scrollTop > 1300 ){
        goToTop.style.display = 'block';
    } else {
        goToTop.style.display = 'none';
    }
});

goToTop.addEventListener('click', () => { window.scrollTo(0, 0) });

// current year foooter
const currentYear = document.querySelectorAll('.current-year');
const date = new Date();
const year = date.getFullYear();

for (let i of currentYear) {
    i.textContent = year;
};
