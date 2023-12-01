export class ListCheck {
   constructor(listArray) {
      this.listArray = listArray;
   }

   render() {
      if (Array.isArray(this.listArray) && this.listArray.length > 0) {
         return `
            ${this.listArray
               .map(
                  (listItem) => `<li class="list-check__item">${listItem}</li>`,
               )
               .join("")}
         `;
      }
   }
}
