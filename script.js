document.addEventListener('DOMContentLoaded', () => {

    // --- Parallax for decorative images ---
    // Homepage Elements
    const swirl = document.getElementById('swirlBG');
    const sides = document.getElementById('sidesBG');
    const pancake = document.getElementById('pancakeBG');
    const flower = document.getElementById('flowerBG');
    const cupcakeSprinkles = document.getElementById('cupcakeSprinklesBG');
    const cakeSlice = document.getElementById('cakeSliceBG');
    const strawberrySingle = document.getElementById('strawberrySingleBG');
    const momos = document.getElementById('momosBG');
    
    // Menu Page Elements
    const strawberry = document.getElementById('strawberryBG');
    const iceCreamGreen = document.getElementById('iceCreamGreenBG');
    const iceCreamCookies = document.getElementById('iceCreamCookiesBG');
    const cupcakePink = document.getElementById('cupcakePinkBG');
    const greenCake = document.getElementById('greenCakeBG');
    const gummyBear = document.getElementById('gummyBearBG');
    const greenDrink = document.getElementById('greenDrinkBG');
    const popsicle = document.getElementById('popsicleBG');
    const hkFries = document.getElementById('hkFriesBG');
    const softServe = document.getElementById('softServeBG');
    const hkBurger = document.getElementById('hkBurgerBG');
    const pinkDrink = document.getElementById('pinkDrinkBG');


    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Homepage Animations
        if (swirl) swirl.style.transform = `translateY(${scrollY * 0.25}px) rotate(-12deg)`;
        if (sides) sides.style.transform = `translateY(${scrollY * 0.18}px) rotate(10deg)`;
        if (pancake) pancake.style.transform = `translateY(${scrollY * 0.12}px) rotate(15deg)`;
        if (flower) flower.style.transform = `translateY(${scrollY * 0.22}px) rotate(15deg)`;
        if (cupcakeSprinkles) cupcakeSprinkles.style.transform = `translateY(${scrollY * 0.11}px) rotate(5deg)`;
        if (cakeSlice) cakeSlice.style.transform = `translateY(${scrollY * 0.15}px) rotate(-5deg)`;
        if (strawberrySingle) strawberrySingle.style.transform = `translateY(${scrollY * 0.17}px) rotate(20deg)`;
        if (momos) momos.style.transform = `translateY(${scrollY * 0.20}px) rotate(-8deg)`;

        // Menu Page Animations
        if (strawberry) strawberry.style.transform = `translateY(${scrollY * 0.16}px) rotate(18deg)`;
        if (iceCreamGreen) iceCreamGreen.style.transform = `translateY(${scrollY * 0.14}px) rotate(-8deg)`;
        if (iceCreamCookies) iceCreamCookies.style.transform = `translateY(${scrollY * 0.19}px) rotate(3deg)`;
        if (cupcakePink) cupcakePink.style.transform = `translateY(${scrollY * 0.23}px) rotate(-3deg)`;
        if (greenCake) greenCake.style.transform = `translateY(${scrollY * 0.13}px) rotate(5deg)`;
        if (gummyBear) gummyBear.style.transform = `translateY(${scrollY * 0.21}px) rotate(10deg)`;
        if (greenDrink) greenDrink.style.transform = `translateY(${scrollY * 0.15}px) rotate(-5deg)`;
        if (popsicle) popsicle.style.transform = `translateY(${scrollY * 0.24}px) rotate(15deg)`;
        if (hkFries) hkFries.style.transform = `translateY(${scrollY * 0.18}px) rotate(-10deg)`;
        if (softServe) softServe.style.transform = `translateY(${scrollY * 0.22}px) rotate(8deg)`;
        if (hkBurger) hkBurger.style.transform = `translateX(-50%) translateY(${scrollY * 0.16}px) rotate(5deg)`;
        if (pinkDrink) pinkDrink.style.transform = `translateY(${scrollY * 0.20}px) rotate(12deg)`;
    });

    // --- Active Navigation Link on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navLinks.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === entry.target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.5 // Triggers when 50% of the section is visible
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // --- Aurora Button Effect ---
    const menuButton = document.querySelector('.btn-menu');

    if (menuButton) {
        menuButton.addEventListener('mousemove', (e) => {
            const rect = menuButton.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            menuButton.style.setProperty('--x', `${x}px`);
            menuButton.style.setProperty('--y', `${y}px`);
        });
    }
});