function toggleText(id) {
    var textBox = document.getElementById(id);

    if (textBox.style.display === "block") {
        textBox.style.display = "none";
    } else {
        // Hide other open text boxes before showing the current one
        var allTextBoxes = document.querySelectorAll('.text-box');
        allTextBoxes.forEach(function(box) {
            box.style.display = 'none';
        });

        // Display the clicked one
        textBox.style.display = "block";
    }
}
