"use strict";

import { fixHeaderMenuHeight, mobileMenu } from "./components/header.js";
import { Button } from "./components/button.js";
import { ListCheck } from "./components/listCheck.js";
import { Hightlights } from "./components/hightlights.js";
import { listItemsDB, hightlights } from "./DB.js";

document.addEventListener("DOMContentLoaded", () => {
   fixHeaderMenuHeight();
   mobileMenu();

   // add button to hero section
   const heroTitle = document.querySelector(".hero__btn");
   const heroBtn = new Button(
      "Call Us Now",
      "../images/hero/IC_phone.svg",
      "picture of a phone",
      "btn_blue",
   );
   heroTitle.append(heroBtn.render());

   // add list to hero
   const heroStrongSides = document.querySelector(".hero__strong-sides");
   const heroList = new ListCheck(listItemsDB.hero);
   heroStrongSides.innerHTML = heroList.render();

   // add hightlight items
   const heroHightlights = document.querySelector(".hero__hightlights");
   hightlights.forEach((block) => {
      const hightlightItem = new Hightlights(block);
      heroHightlights.append(hightlightItem.render());
   });
});
