export class Button {
   /**
    *
    * @param {string} text button`s text
    * @param {string} srcImg path to img
    * @param {string} altImg alt text
    * @param {object} classList an array of additional css classes
    */
   constructor(text, srcImg, altImg, ...classList) {
      this.text = text;
      this.srcImg = srcImg;
      this.altImg = altImg;
      this.classList = classList;
   }

   render() {
      const btn = document.createElement("button");
      btn.classList.add("btn");
      btn.innerHTML = `
         <span class="btn__txt">${this.text}</span>
         ${
            this.srcImg
               ? `
               <div class="btn__img">
                  <img src="${this.srcImg}" alt="${this.altImg}">
               </div>`
               : ""
         }
      `;

      if (Array.isArray(this.classList) && this.classList.length !== 0) {
         this.classList.forEach((item) => {
            btn.classList.add(item);
         });
      }

      return btn;
   }
}
