document.getElementById("last-updated").textContent =
  "Last updated: " + new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "medium"
  }).format(new Date());

