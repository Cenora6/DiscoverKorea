window.onscroll = function() {
    scrollFunction()
    changeNavigationColor()
};

window.onload = function () {
    like();
}

function scrollFunction() {
    const navBrand = document.querySelector("nav .navbar-brand");
    const logo = document.querySelector("nav .logo");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navBrand.style.fontSize = ".8rem";
        logo.style.width = "0";
    } else {
        navBrand.style.fontSize = "1.5rem";
        logo.style.width = "2rem";
    }
}

function changeNavigationColor() {
    const navbar = document.querySelector("nav .navbar");
    const navBrand = document.querySelector("nav .navbar-brand");
    const navLinks = document.querySelectorAll("nav .nav-link");
    const foodSection = document.getElementById('food-drinks');

    const difference = foodSection.offsetHeight+ foodSection.offsetTop;

    if (window.pageYOffset >= foodSection.offsetTop && window.pageYOffset < difference) {
        navbar.classList.remove('bg-dark');
        navbar.classList.add('bg-light');
        navBrand.classList.remove('text-white');
        navBrand.classList.add('text-dark');
        navBrand.querySelector('span').classList.remove('bg-light');
        navBrand.querySelector('span').classList.remove('text-dark');
        navBrand.querySelector('span').classList.add('bg-dark');
        navBrand.querySelector('span').classList.add('text-light');
        navLinks.forEach(element => element.classList.remove('text-white'));
        navLinks.forEach(element => element.classList.add('text-dark'));
    } else {
        navbar.classList.remove('bg-light');
        navbar.classList.add('bg-dark');
        navLinks.forEach(element => element.classList.remove('text-dark'));
        navLinks.forEach(element => element.classList.add('text-white'));
        navBrand.classList.remove('text-dark');
        navBrand.classList.add('text-white');
        navBrand.querySelector("span").classList.remove('bg-dark');
        navBrand.querySelector("span").classList.remove('text-white');
        navBrand.querySelector("span").classList.add('bg-light');
        navBrand.querySelector("span").classList.add('text-dark');
    }
}

function like() {
    document.querySelectorAll(".heart").forEach(heart => heart.addEventListener("click", function() {
            this.classList.toggle("is-active");
        })
    )
}

