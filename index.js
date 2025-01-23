document.getElementById("share").addEventListener("click", function () {
  var tooltip = document.getElementById("share-tooltip");
  console.log("Tooltip clicked:", tooltip);
  tooltip.classList.toggle("hidden");
});
