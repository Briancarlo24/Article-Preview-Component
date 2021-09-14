const shareIcon = document.querySelector(".fa-share");
const iconContainer = document.querySelector(".icon-container");
const picture = document.querySelector(".picture");
const profile = document.querySelector(".profile");
const socialMedia = document.querySelector(".social-media");
const mobile = window.matchMedia("(max-width: 977px)");

if (mobile.matches) {
  shareIcon.addEventListener("click", () => {
    if (mobile.matches) {
      mobileButton();
    } else {
      desktopButton();
    }
  });
} else {
  shareIcon.addEventListener("click", () => {
    if (mobile.matches) {
      mobileButton();
    } else {
      desktopButton();
    }
  });
}

function mobileButton() {
  shareIcon.classList.toggle("icon-color");
  iconContainer.classList.toggle("bg-color");
  picture.classList.toggle("hidden");
  profile.classList.toggle("hidden");
  socialMedia.classList.toggle("hidden");
}

function desktopButton() {
  socialMedia.classList.toggle("overlay");
}
