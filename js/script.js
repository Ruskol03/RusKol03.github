window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header_nav_ul'),
    headerNavUl = document.querySelectorAll('.header_nav_ul'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        header.classList.toggle('header_nav_ul_active');
    });

    headerNavUl.forEach(nav_ulnav_ul => {
        nav_ul.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            header.classList.toggle('header_nav_ul_active');
        })
    })
})