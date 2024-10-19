
const products = [
    { id: 1, name: 'Cat Plushie' },
    { id: 2, name: 'Cow Plushie' },
    { id: 3, name: 'Triceratops Plushie' },
];
function populateProductOptions() {
    const productSelect = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateProductOptions);
if (window.location.pathname.endsWith('review.html')) {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    
    const reviewMessage = document.createElement('p');
    reviewMessage.textContent = `Thank you! You have submitted ${reviewCount} reviews.`;
    document.body.appendChild(reviewMessage);
}
function showLastModified() {
    const lastModifiedDiv = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedDiv.textContent = `Last Modified: ${lastModifiedDate}`;
}
document.addEventListener('DOMContentLoaded', showLastModified);
