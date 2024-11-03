
document.getElementById("menuButton").addEventListener("click", function() {
    const sidePanel = document.getElementById("sidePanel");
    const body = document.body;
    if (sidePanel.classList.contains("open")) {
        sidePanel.classList.remove("open");
        body.classList.remove("panel-open");
    } else {
        sidePanel.classList.add("open");
        body.classList.add("panel-open");
    }
});
function toggleText(id) {
    const textBox = document.getElementById(id);
    textBox.style.display = textBox.style.display === 'block' ? 'none' : 'block';
}
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        localStorage.setItem('contactFormData', JSON.stringify({ name, email, message }));
        alert("Thank you for your message!");
        contactForm.reset();
    });
}
