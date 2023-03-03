const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = ducument.querySelector(".primary-navigation")

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute("data-visible") ?  console.log("true") : console.log("it doesnt");
    primaryNav.toggleAttribute("data-visible")
});

