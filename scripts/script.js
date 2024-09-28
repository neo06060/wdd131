document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer
    const yearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Set the last modification date of the page
    const lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent = document.lastModified;
});
