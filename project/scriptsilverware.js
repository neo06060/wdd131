function toggleText(id) {
    var textBox = document.getElementById(id);

    if (textBox.style.display === "block") {
        textBox.style.display = "none";
    } else {
        var allTextBoxes = document.querySelectorAll('.text-box');
        allTextBoxes.forEach(function(box) {
            box.style.display = 'none';
        });
        textBox.style.display = "block";
    }
}
