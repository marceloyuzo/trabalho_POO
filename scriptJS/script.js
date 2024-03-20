/***********************************
        SCRIPT DO MENU LATERAL
************************************/

const menuBtn = document.getElementById("iconProfile");
const menuUser = document.getElementById("menuUser");

menuBtn.onclick = function () {
  menuUser.classList.toggle("hidden");
};

menuBtn.onblur = function () {
  menuUser.classList.add("hidden");
};
