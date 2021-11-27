let popupForm = document.querySelector(".js-popup__form");
let popupInputName = document.querySelector(".js-popup__inputName");
let popupInputJob = document.querySelector(".js-popup__inputJob");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

popupInputName.value = profileTitle.textContent;
popupInputJob.value = profileSubtitle.textContent;


function formSubmitHandler (evt) {
  evt.preventDefault();
  let InputName = popupInputName.value;
  let InputJob = popupInputJob.value;
  profileTitle.textContent = InputName;
  profileSubtitle.textContent = InputJob;
}

popupForm.addEventListener('submit', formSubmitHandler);
