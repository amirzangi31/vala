import { getUserWithId } from "./api/user.js";
import { getDataLocal } from "./helper.js";



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

const userId = await getDataLocal("user")
const user = await getUserWithId(+userId)


const renderPage = async() =>{
  const score = document.querySelector("#score")
  console.log(score)
  score.innerHTML = `${user.wallet} امتیاز`
}


await renderPage()