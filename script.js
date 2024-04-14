const img = document.querySelector("img");
const slider = document.querySelector(".img-padding");
slider.addEventListener("input", () => {
  const padding = slider.value + "px";
  img.style.setProperty("--PADDING", padding);
});
