const nav = document.querySelector('.nav'); //szuka nava
const navBtn = document.querySelector('.burger-btn'); //szuka burgera
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

// odwuje się do const"nav" => do classLisy czyli pracuje na klasach nawigacji => toggle - dodaje i zabiera klasę gdy klikniemy.
// TOGGLE będzie sprawdzał czy nawigacja ma klasę czy nie ma klasy i w zależności ją nada lub zabierze
const handleNav = () => {
	nav.classList.toggle('nav--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
}; //zapis funkcji strzałkowej

const handleNavItemsAnimation = () => {
	let delayTime = 0;

    navBtnBars.classList.remove('black-bars-color')

	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	}); //dodaje opóźnienie 0 sekund, następnie delay Time dodaje o 0.1 sekndy
};

navBtn.addEventListener('click', handleNav);
//Odwołujemy się do zmienej "navBtn", która szuka burgera, nasłuchuje wydarzenia: "click". Jest klik wywołuje "handleNav" czyli nadaje ".nav--active" do ".nav" lub go zabiera
// ad. 2 Dla każdego pojedyńczego linku przechowywanego przez tag "item" mamy nadać nasłuchiwanie "click", kiedy zostanie wyłapany to usuniemy klasę ".nav--active".

const handleObserver = () => {
    const currentSection = window.scrollY;
    allSections.forEach(section => {
        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
            navBtnBars.classList.remove('black-bars-color')
        }
    });
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver)
