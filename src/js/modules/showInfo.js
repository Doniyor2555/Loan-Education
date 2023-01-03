export default class showInfo { 
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
  }

  init() {
    this.btns.forEach(btn => {
      btn.addEventListener("click", () => {
        const sibling = btn.closest(".module__info-show").nextElementSibling.classList.add("animated", "fadeInDown", "active1");
      });
    });
  }
}