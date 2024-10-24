
document.getElementById("menuButton").addEventListener("click", function() {
    var sidePanel = document.getElementById("sidePanel");
    var body = document.body;
    
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


