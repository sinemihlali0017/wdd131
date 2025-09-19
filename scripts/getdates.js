
const year = new Date().getFullYear();


document.getElementById("copyright").textContent =
  `©️ ${year} WDD 131 - Dynamic Web Fundamentals Sinemihlali Mahlathini`;


const lastupdated = new Date(document.lastModified);


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastupdated.toLocaleDateString('en-US', options);


document.getElementById("lastupdated").innerHTML = `Last Updated: ${formattedDate}`;
