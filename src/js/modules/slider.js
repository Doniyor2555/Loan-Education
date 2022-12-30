export default class Slider {
  constructor(page, btns) {
    this.page = document.querySelector(page);
    this.slides = this.page.children;
    this.btns = document.querySelectorAll(btns);
    this.sliderIndex = 1;
  }
  showSlides(n) {
    if(n > this.slides.length) {
      this.sliderIndex = 1;
    }

    if(n < 1) {
      this.sliderIndex = this.slides.length;
    }

    try {
      this.hanson.style.opacity = '0';

      if(n === 3) {
        this.hanson.classList.add("animated");
        setTimeout(() => {
          this.hanson.style.opactiy = '1';
          this.hanson.classList.add("fadeInUp");
        }, 3000);
      } else {
        this.hanson.classList.remove("fadeInUp");
      }
    }catch(error){
      console.log(error)
    }

    this.slides.forEach(slide => {
      slide.style.display = 'none';
    });
    this.slides[this.sliderIndex - 1].style.display = 'block';
  }

  plusSlides(n) {
    this.showSlides(this.sliderIndex +=n);
  }
  
  render() {
    try {
      this.hanson = document.querySelector(".hanson");
    }catch(error){}
    this.btns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.plusSlides(1);
      });

      btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
        e.preventDefault();
        this.sliderIndex = 1;
        this.showSlides(this.sliderIndex);
      });
    });
    this.showSlides(this.sliderIndex);
  }
} 