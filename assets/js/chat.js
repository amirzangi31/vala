import { getUserWithId } from "./api/user.js";
import { addChat, getAllChat } from "./api/chat.js";
import { getDataLocal } from "./helper.js";
import { toast } from "./toastify.js";

const userId = await getDataLocal("user");

const user = await getUserWithId(+userId);
const renderFooter = async () => {
  const footer = document.querySelector("#insert");

  const note = `
    <div class="col-2 col-lg-1 p-1">
           <div class="imge-admin">
            <img src="http://127.0.0.1:8000${user.profileimage}" alt="">
           </div>
         
         </div>
         <div class="col-8 col-lg-10 p-1 dddd">
            <input type="text" class="px-2" id="message" placeholder="تایپ کنید">
         </div>
         <div class="col-2 col-lg-1 sss">
           <span class="send-btn" onclick="sendMessage()">
            ارسال
           </span>
          
          </div>`;

  footer.innerHTML = note;
};

await renderFooter();

let scroll = false;

const renderPage = async () => {
  const allChat = await getAllChat();
  const allChatUser = allChat.filter((item) => item.user.id === +userId);
  const container = document.querySelector("#container");
  container.innerHTML = "";
  allChatUser.forEach((item, index) => {
    const clock = item.created;
    const d = new Date(clock);
    const note = `
      <div class="messege-content ${
        item.status === "user" ? "send-user " : "answer "
      } ">
              <div class="col-12 col-md-6 p-2" >
                <div class="item-message">
                  <div class="col-1 p-2">
                    <span><img src="./assets/images/icon-valla/heart.png" alt=""></span>
                    <div class="text-white">${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}</div>
                    </div>
                    <div class=" col-9 col-lg-10 p-2">
                      <div class="content-message">
                      ${item.description}
                      </div>
                    </div>
                    <div class="col-2 col-lg-1 p-2">

                      <span class="user-profile">
                      ${
                        item.status === "user"
                          ? `<img src='${item.user.profileimage}' alt=''>`
                          : "<span class='d-flex justify-content-center align-items-center'  style='width : 50px; height : 50px ; border-radius : 50%; background : white;display:block;font-size : 24px'>A</span>"
                      } 
                      
                      </span>
                  </div>
                </div>
              

              </div>  
            </div>
      
      
      `;
    container.innerHTML += note;
  });



  if(!scroll){
    window.scrollTo(0, document.body.scrollHeight);
    scroll = true
  };

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

/*----------------send Message----------------*/

const message = document.querySelector("#message");
const send = async() =>{
  if (!message.value.trim()) {
      await toast("لطفا متنی را وارد کنید");
      return;
    }
    const data = {
      user: +userId,
      description: message.value,
      status: "user",
    };
  
    await addChat(data);
    await renderPage();
    window.scrollTo(0, document.body.scrollHeight);
    message.value = "";
    message.focus();
}

document.body.addEventListener("keyup" , async(e) =>{
  if(e.code === "Enter") {
      await send()
  }
})
window.sendMessage = async () => {
  await send()
};


/*----------------send Message----------------*/

setInterval(async () => {
  await renderPage();
}, 3000);
