


const products = [
  { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];


const select = document.getElementById("product");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = `${product.name} (Avg Rating: ${product.averagerating})`;
  select.appendChild(option);
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;



const form = document.getElementById("reviewForm");

form.addEventListener("submit", function() {
  
  let reviewCount = localStorage.getItem("reviewCount");

  if (reviewCount === null) {
    reviewCount = 0;
  }

  
  reviewCount++;

  
  localStorage.setItem("reviewCount", reviewCount);
});
