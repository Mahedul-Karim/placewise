type Slider = (images: any[], count: number) => void;

export const sliderFunction: Slider = (images, count) => {
  images.forEach((el: HTMLElement, ind: number) => {
    let offSet: number = ind - count;
    if (offSet < 0) {
      offSet += images.length;
    }

    for (let i = 0; i < images.length; i++) {
      el.classList.remove(`carousel-item-${i + 1}`);
      el.classList.add(`carousel-item-${offSet + 1}`);
    }
  });
};
