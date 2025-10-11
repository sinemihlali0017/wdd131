
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53500,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/Tokyo-Japan-Temple3.jpg"
  },
  {
    templeName: "Cardston Alberta",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26",  
    area: 110000,
    imageUrl:"https://presse-ca.eglisedejesus-christ.org/media/960x540/3-Cardston-Alberta-Temple-with-mountain-view-(1280x834).jpg"
  },
  {
    templeName: "Nauvoo Illinois", 
    location: "Nauvoo, Illinois, United States",
    dedicated: "2002, June, 27",
    area: 25000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7f6a91ad0e89b988b277360bb7bab5acef30b35c/full/1920%2C/0/default.jpg"
  },
];


function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';
    
    card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;
    
    return card;
}

function displayTemples(filteredTemples) {
    const grid = document.querySelector('.res-grid');
    grid.innerHTML = '';
    
    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        grid.appendChild(card);
    });
}


function filterOldTemples() {
    return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900;
    });
}

function filterNewTemples() {
    return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year > 2000;
    });
}

function filterLargeTemples() {
    return temples.filter(temple => temple.area > 90000);
}

function filterSmallTemples() {
    return temples.filter(temple => temple.area < 10000);
}

document.addEventListener('DOMContentLoaded', function() {
    
    displayTemples(temples);
    
    const navLinks = document.querySelectorAll('nav a');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const filterType = this.textContent.trim();
            const mainHeading = document.querySelector('main h2');
            
            let filteredTemples = [];
            
            switch(filterType) {
                case 'Home':
                    filteredTemples = temples;
                    mainHeading.textContent = 'Home';
                    break;
                case 'Old':
                    filteredTemples = filterOldTemples();
                    mainHeading.textContent = 'Old Temples';
                    break;
                case 'New':
                    filteredTemples = filterNewTemples();
                    mainHeading.textContent = 'New Temples';
                    break;
                case 'Large':
                    filteredTemples = filterLargeTemples();
                    mainHeading.textContent = 'Large Temples';
                    break;
                case 'Small':
                    filteredTemples = filterSmallTemples();
                    mainHeading.textContent = 'Small Temples';
                    break;
                default:
                    filteredTemples = temples;
                    mainHeading.textContent = 'Home';
            }
            
            displayTemples(filteredTemples);
            navMenu.classList.remove('active');
        });
    });
    
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastmodified').textContent = document.lastModified;
});