document.addEventListener("DOMContentLoaded",function() {
    const bottomText = document.querySelector(".bottom-rectangle-text");

    //get current year dumb fuck
    const currentYear =new Date().getFullYear();
    bottomText.innerHTML = "© ${currentYear} all rights reserved. <br>";

    const lastModifiedDate =document.lastModified;
    bottomText.innerHTML += "document last modified on: ${lastModifiedDate}";
});