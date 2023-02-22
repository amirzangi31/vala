import { getUserLocal } from "./api/validateLoginUser.js`";

await getUserLocal();



let btnHamburger = document.querySelector(".menu-admins");

  
btnHamburger.addEventListener("click", (e) => {
  if (
    e.target.className === "price" ||
    e.target.className === "des" ||
    e.target.className === "Wallet-balance"
  ){
    
    btnHamburger.classList.toggle("active");
  }else{
    return;
  }
});
