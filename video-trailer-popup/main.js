const buttonEl = document.querySelector(".btn");
const trailerContainerEl = document.querySelector(".trailer-container");
const closeIcon = document.querySelector(".close-icon");
const videoEl = document.querySelector("video");

buttonEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
