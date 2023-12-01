export class Hightlights {
   constructor({ img, altImg, txt }, ...classList) {
      this.img = img;
      this.altImg = altImg;
      this.txt = txt;
      this.classList = classList;
   }

   render() {
      const div = document.createElement("div");
      div.classList.add("hightlights__item");

      if (Array.isArray(this.classList) && this.classList.length !== 0) {
         this.classList.forEach((item) => {
            div.classList.add(item);
         });
      }

      div.innerHTML = `
         <figure class="hightlights__img">
            <img src="${this.img}" alt="${this.altImg}" />
         </figure>
         <p class="hightlights__txt">${this.txt}</p>
      `;

      return div;
   }
}
