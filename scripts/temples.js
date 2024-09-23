document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('last-modified');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModifiedDate.toLocaleDateString('en-US');
});
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    hamburger.textContent = hamburger.textContent === 'X' ? '☰' : 'X';
});

