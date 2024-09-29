document.addEventListener('DOMContentLoaded', function () {
    const temples = [
        {
            name: 'Salt Lake Temple',
            location: 'Salt Lake City, Utah',
            dedicated: 'April 6, 1893',
            area: 253000,
            imageUrl: 'images/a.jpg',
        },
        {
            name: 'Oquirrh Mountain Temple',
            location: 'Oquirrh, Utah',
            dedicated: 'August 21, 2009',
            area: 60000,
            imageUrl: 'images/b.jfif',
        },
        {
            name: 'Washington DC temple',
            location: 'Washington, DC',
            dedicated: 'November 19, 1974',
            area: 157000,
            imageUrl: 'images/c.webp',
        },
        {
            name: 'Oakland California temple',
            location: 'Oakland, California',
            dedicated: 'November 17, 1964',
            area: 80000,
            imageUrl: 'images/d.webp',
        },
        {
            name: 'South Africa Durban Temple',
            location: 'South Africa, Durban',
            dedicated: 'February 16, 2020',
            area: 20000,
            imageUrl: 'images/e.jfif',
        },
        {
            name: 'Orem Utah Temple',
            location: 'Orem, Utah',
            dedicated: 'January 21, 2024',
            area: 72000,
            imageUrl: 'images/f.webp',
        }
    ];
    function displayTemples(temples) {
        const container = document.getElementById('temples-container');
        container.innerHTML = ''; // Clear the container
        temples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('temple-card');

            templeCard.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
                <h3>${temple.name}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
            `;

            container.appendChild(templeCard);
        });
    }
    function filterOldTemples() {
        const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        displayTemples(oldTemples);
    }
    function filterNewTemples() {
        const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        displayTemples(newTemples);
    }
    function filterLargeTemples() {
        const largeTemples = temples.filter(temple => temple.area > 90000);
        displayTemples(largeTemples);
    }

    function filterSmallTemples() {
        const smallTemples = temples.filter(temple => temple.area < 10000);
        displayTemples(smallTemples);
    }
    document.getElementById('old').addEventListener('click', filterOldTemples);
    document.getElementById('new').addEventListener('click', filterNewTemples);
    document.getElementById('large').addEventListener('click', filterLargeTemples);
    document.getElementById('small').addEventListener('click', filterSmallTemples);
    document.getElementById('all').addEventListener('click', () => displayTemples(temples));
    displayTemples(temples);
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('last-modified');
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = new Date(document.lastModified).toLocaleDateString('en-US');
});
