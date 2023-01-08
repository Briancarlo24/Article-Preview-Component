const shareIcon = document.querySelector(".fa-share");
const iconContainer = document.querySelector(".icon-container");
const picture = document.querySelector(".picture");
const profileContainer = document.querySelector(".profile-container");
const socialMedia = document.querySelector(".social-media");
const mobile = window.matchMedia("(max-width: 977px)");

function mobileButton() {
  iconContainer.classList.toggle("bg-color");
  profileContainer.classList.toggle("hidden");
  socialMedia.classList.toggle("hidden");
  shareIcon.classList.toggle("icon-color");
}

function desktopButton() {
  socialMedia.classList.toggle("tooltip");
  socialMedia.classList.toggle("hidden");
}

shareIcon.addEventListener("click", function () {
  if (mobile.matches) {
    mobileButton();
  } else {
    desktopButton();
  }
});

document.addEventListener("click", function (event) {
  const isClickInsideElement = iconContainer.contains(event.target);
  if (!isClickInsideElement) {
    socialMedia.classList.remove("tooltip");
    socialMedia.classList.add("hidden");
    iconContainer.classList.remove("bg-color");
    profileContainer.classList.remove("hidden");
    shareIcon.classList.remove("icon-color");
  }
});
