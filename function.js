let nav_menu = `
<div><a class="t" href="index.html">Home</a></div>
<div><a class="t" href="https://micronations.wiki/wiki/Islamic_Sultanate_of_Qardasha" target="_blank">About</a></div>
<div><a class="t" href="business.html">Business</a></div>
<div><a class="t" href="education.html">Education</a></div>
<div><a class="t" href="diplomacy.html">Diplomacy</a></div>
<div><a class="t" href="contact.html">Contact Us</a></div>
`

let desktop_header_html = `
<a id="title" href="index.html">
    <img class="logo" src="https://cdn.discordapp.com/attachments/1013935918144573576/1013961037738938398/unknown.png" alt="">
    <h1 class="title t"></h1>
</a>
<nav>${nav_menu}</nav>
`

let mobile_header_html = `
<div id="mobile-header-top">
    <a id="title" href="index.html">
        <img class="logo" src="https://cdn.discordapp.com/attachments/1013935918144573576/1013961037738938398/unknown.png" alt="">
        <h1 class="title t"></h1>
    </a>
    <a id="hamburger" onclick="toggleHamburgerMenu()"><i class="fa-solid fa-bars"></i></a>
</div>
<div class="hamburger-menu">${nav_menu}</div>
`

let footer_html = `
<div id="footer-head">
    <div class="socials">
        <a class="social-button" target="_blank" href="https://www.youtube.com/@qardasha_gov"><i class="fa-brands fa-youtube"></i></a>
        <a class="social-button" target="_blank" href="https://discord.gg/WvUy5ZMHnE"><i class="fa-brands fa-discord"></i></a>
        <a class="social-button" target="_blank" href="https://twitter.com/QardashaGov"><i class="fa-brands fa-twitter"></i></a>
        <a class="social-button" target="_blank" href="https://micronations.wiki/wiki/Islamic_Sultanate_of_Qardasha"><i class="fa-solid fa-globe"></i></a>
        <a class="social-button" href="contact.html"><i class="fa-solid fa-envelope"></i></a>
    </div>
</div>
<div id="copyright-notice">
    <p>Copyright &copy 2022 Site Solutions Inc.</p>
    <p>Authorised by the Government of Qardasha</p>
</div>
`

let desktop_header = document.getElementById("desktop-header")
let mobile_header = document.getElementById("mobile-header")
let footer = document.querySelector("footer");

desktop_header.innerHTML = desktop_header_html;
mobile_header.innerHTML = mobile_header_html;
footer.innerHTML = footer_html;

window.onscroll = function() { scrollFunction() }

function scrollFunction() {
    desktop_header = document.getElementById("desktop-header");
    let nav = document.querySelector("nav");
    let logo = document.querySelector(".logo");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    desktop_header.classList.add("shrinkHeader");
    nav.classList.add("shrinkFontSize");
    } else {
    desktop_header.classList.remove("shrinkHeader");
    nav.classList.remove("shrinkFontSize");
    }
}

function toggleHamburgerMenu() {
    let hamburger_menu = document.querySelector(".hamburger-menu");
    hamburger_menu.classList.toggle("toggleFlex");
}
