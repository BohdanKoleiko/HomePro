"use strict";

const headerMenu = document.querySelector(".header__menu");
const openSideMenuBtn = document.querySelector(".burger");
const closeSideMenuBtn = document.querySelector(".header__menu-close");

export const fixHeaderMenuHeight = () => {
   const resizeWindowHeight = function (htmlElement) {
      let windowWidth = window.innerWidth;

      if (windowWidth < 1024) {
         htmlElement.style.height = `${window.innerHeight}px`;
      } else {
         htmlElement.style.height = "";
      }
   };

   resizeWindowHeight(headerMenu);

   window.addEventListener("resize", () => {
      resizeWindowHeight(headerMenu);
   });
};

export const mobileMenu = () => {
   const getMenuDataState = document.querySelectorAll("[data-active]");

   const initMenu = function (state = "") {
      getMenuDataState.forEach((elem) => {
         elem.dataset.active = state;
         elem.dataset.active = state;
      });
   };

   initMenu();

   openSideMenuBtn.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      initMenu("true");
   });

   closeSideMenuBtn.addEventListener("click", () => {
      document.body.style.overflow = "visible";
      initMenu("");
   });
};
