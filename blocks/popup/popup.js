let openPopupBtn = document.querySelector(".js-profile__textEditBtn");
let noScroll = document.querySelector(".js-root");
let popup = document.querySelector(".js-popup");
let closeFormBtn = document.querySelector(".js-popup__closeForm");

function openPopup() {
  popup.classList.add("popup_active");
  noScroll.classList.add("root_noScroll");
}
function closeForm() {
  popup.classList.remove("popup_active");
  noScroll.classList.remove("root_noScroll");
}

openPopupBtn.addEventListener("click", openPopup);
closeFormBtn.addEventListener("click", closeForm);
