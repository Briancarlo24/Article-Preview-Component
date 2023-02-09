const shareButton = document.querySelector('.icon-share-button');
const person = document.querySelector('.person');
const social = document.querySelector('.social');


shareButton.addEventListener("click" , function (e) {
    e.preventDefault();
    person.classList.toggle('hidden');
    social.classList.toggle('hidden-desktop');
    social.classList.toggle('hidden');

});



// ////////////////////////////////OLD Button CODE////////////////////////////////



// function mobileButton() {
//   iconContainer.classList.toggle("bg-color");
//   profileContainer.classList.toggle("hidden");
//   socialMedia.classList.toggle("hidden");
//   shareIcon.classList.toggle("icon-color");
// }

// function desktopButton() {
//   socialMedia.classList.toggle("tooltip");
//   socialMedia.classList.toggle("hidden");
// }

// shareIcon.addEventListener("click", function () {
//   if (mobile.matches) {
//     mobileButton();
//   } else {
//     desktopButton();
//   }
// });

// document.addEventListener("click", function (event) {
//   const isClickInsideElement = iconContainer.contains(event.target);
//   if (!isClickInsideElement) {
//     socialMedia.classList.remove("tooltip");
//     socialMedia.classList.add("hidden");
//     iconContainer.classList.remove("bg-color");
//     profileContainer.classList.remove("hidden");
//     shareIcon.classList.remove("icon-color");
//   }
// });

// ////////////////////////////////OLD Button CODE////////////////////////////////


