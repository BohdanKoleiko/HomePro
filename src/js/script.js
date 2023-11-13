"use strict";

import { fixHeaderMenuHeight, mobileMenu } from "./components/header.js";

document.addEventListener("DOMContentLoaded", () => {
   fixHeaderMenuHeight();
   mobileMenu();
});
