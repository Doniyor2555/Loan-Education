export default class Download {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg';
  }

  downloadItem(path) {
    const link = document.createElement("a");

    link.setAttribute("href", path);
    link.setAttribute("download", "nice__picture");

    link.style.display = 'none';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }

  init() {
    this.btns.forEach(item => {
      item.addEventListener("click", () => {
        this.downloadItem(this.path);    
      });
    });
  }
}