import { getAllAzmayesh } from "../api/azmayesh.js";
import { getUserWithId } from "../api/user.js";

/*---------------render Page-------------------*/

const getUser = async (id) => {
  const user = await getUserWithId(id);
  return user;
};

const renderPage = async () => {
  const azmayeshat = await getAllAzmayesh();

  const containerAzmayesh = document.querySelector("#container-azmayesh");

  azmayeshat.forEach(async (item, index) => {
    const user = await getUser(+item.user);
    
    const note = ` <div class="col-12 col-md-6 p-2"> 
        <div class="content-modal modal-answer">
          <div class="inner-modal" >
            <form class="px-4 pt-2">
              <div class="py-2">
                <div class="title">
                  <div id="close" onclick="closeModalAnswer(${index})"><img src="../assets/images/icon-valla/close-modal.png" alt=""></div>
                  <div>پاسخ آزمایش</div>
                </div>
                <textarea  id="answer" cols="30" rows="10" class="input-item" placeholder="پاسخ آزمایش"></textarea>
              </div>
              <div class="btn-modal" onclick="answer(${item.id})" >
                <div class="btn-sabt-post">
                  ثبت
                </div>
                </div>
              </div>
            </form>
        </div>
        <div class="content-modal  modal-show-photo">
          <div class="inner-modal" onclick="closeModalPhoto(${index})">
            <div class="image-container"><img src="${item.image}" alt=""></div>
           </div>
        </div>
        <div class="ticket-item">
          <div class="col-4 col-md-3 d-flex d-flex flex-column align-items-center justify-content-center">
            <div class="imge-user">
              <img src="http://127.0.0.1:8000${user.profileimage}" alt="">
            </div>

          </div>
          <div class="col-5 col-md-6 content-ticket">
            <div class="name-user">${user.name}</div>
            <div class="description">
              <div> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگره</div>
              <div class="more " onclick="showPhoto(${index})"> در ادامه...</div>
            </div>


          </div>
          <div class="col-3 col-md-3 btn-answer-ticket" onclick="showModalAnswer(${index})">
            <span class="btn-answer btn-modal-1">
              پاسخ
            </span>

          </div>

        </div>
      </div>`;

    containerAzmayesh.innerHTML += note;
  });
};

await renderPage();

/*---------------render Page-------------------*/

/*-----------------show modal answer-------------------*/

window.showModalAnswer = (index) => {
  const modals = [...document.querySelectorAll(".modal-answer")];

  modals[index].classList.add("active");
};

window.closeModalAnswer = (index) => {
  const modalsContent = [...document.querySelectorAll(".modal-answer")];

  modalsContent[index].classList.remove("active");
};
/*-----------------show modal answer-------------------*/

/*-----------------show photo azmayesh-------------------*/

window.showPhoto = (index) => {
  const modals = [...document.querySelectorAll(".modal-show-photo")];

  modals[index].classList.add("active");
};
window.closeModalPhoto = (index) => {
  const modals = [...document.querySelectorAll(".modal-show-photo")];

  modals[index].classList.remove("active");
};

/*-----------------show photo azmayesh-------------------*/


window.answer = async(id) => {
    console.log(id);
}