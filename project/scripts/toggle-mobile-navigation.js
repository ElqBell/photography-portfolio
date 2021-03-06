function turnNavigationOn(pageContent) {
    const nav = document.getElementById("top-navigation");
    const socials = document.getElementById("top-social-media-icons");
    pageContent.classList.add("displayOff");
    nav.classList.remove("mobile-navigation-hidden");
    nav.classList.add("mobile-navigation-visible");
    socials.classList.remove("mobile-socials-hidden");
    socials.classList.add("mobile-socials-visible");
    document.getElementsByTagName("footer")[0].style.display = "none";
    document.getElementsByTagName("html")[0].classList.add("scroll-lock");
}

function turnNavigationOff(pageContent) {
    const nav = document.getElementById("top-navigation");
    const socials = document.getElementById("top-social-media-icons");
    nav.classList.remove("mobile-navigation-visible");
    nav.classList.add("mobile-navigation-hidden");
    socials.classList.remove("mobile-socials-visible");
    socials.classList.add("mobile-socials-hidden");
    pageContent.classList.remove("displayOff");
    document.getElementsByTagName("footer")[0].style.display = "block";
    document.getElementsByTagName("html")[0].classList.remove("scroll-lock");
}

function toggleMobileNavigation() {
    const pageContent = document.getElementsByClassName("page-content")[0];
    if(pageContent.classList.contains("displayOff"))
        turnNavigationOff(pageContent);
    else
        turnNavigationOn(pageContent);
}

window.addEventListener('resize', function() {
    const pageContent = document.getElementsByClassName("page-content")[0];
    if(screen.availWidth > 768 && pageContent.classList.contains("displayOff"))
        turnNavigationOff(pageContent);
});