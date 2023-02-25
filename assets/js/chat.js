import { getUserWithId } from "./api/user.js";
import { getDataLocal } from "./helper.js";

const userId = await getDataLocal("user");

const user = await getUserWithId(+userId);

const renderPage = async () => {
  const footer = document.querySelector("#insert");

  const note = `
    <div class="col-2 col-lg-1 p-1">
           <div class="imge-admin">
            <img src="./assets/images/comment-img/2.png" alt="">
           </div>
         
         </div>
         <div class="col-8 col-lg-10 p-1 dddd">
            <input type="text" value="تایپ کنید">
         </div>
         <div class="col-2 col-lg-1 sss">
           <span class="send-btn">
            ارسال
           </span>
          
          </div>`;

  footer.innerHTML = note;
  const container = document.querySelector("#container")
  

};

await renderPage();


// const note = `<div class="messege-content send-user">
// <div class="col-12 col-md-6 p-2" >
//   <div class="item-message">
//     <div class="col-1 p-2">
//       <span><img src="./assets/images/icon-valla/heart.png" alt=""></span>
//       <div>12:34</div>
//       </div>
//       <div class=" col-9 col-lg-10 p-2">
//         <div class="content-message">
//           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، د.
//         </div>
//       </div>
//       <div class="col-2 col-lg-1 p-2">
//         <span class="user-profile"><img src="./assets/images/senzual-girl-two.png" alt=""></span>
        
//     </div>
//   </div>


// </div>  
// </div>`