let openPopupBtn = document.querySelector(".js-profile__textEditBtn");
let noScroll = document.querySelector(".js-root");
let popup = document.querySelector(".js-popup");
let closeFormBtn = document.querySelector(".js-popup__closeForm");
let popupForm = document.querySelector(".js-popup__form");
let popupInputName = document.querySelector(".js-popup__inputName");
let popupInputJob = document.querySelector(".js-popup__inputJob");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

function openPopup() {
  popup.classList.add("popup_active");
  noScroll.classList.add("root_noScroll");
}
function closeForm() {
  popup.classList.remove("popup_active");
  noScroll.classList.remove("root_noScroll");
}

popupInputName.value = profileTitle.textContent;
popupInputJob.value = profileSubtitle.textContent;


function formSubmitHandler (evt) {
  evt.preventDefault();
  let InputName = popupInputName.value;
  let InputJob = popupInputJob.value;
  profileTitle.textContent = InputName;
  profileSubtitle.textContent = InputJob;
}

openPopupBtn.addEventListener("click", openPopup);
closeFormBtn.addEventListener("click", closeForm);
popupForm.addEventListener('submit', formSubmitHandler);
