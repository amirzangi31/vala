import { addFood, getAllFood } from "../api/oprator.js";
import { getAllTickets } from "../api/tickets.js";
import { getAllUsers, getUserWithId } from "../api/user.js";
import { getDataLocal, shortTicket } from "../helper.js";

const opratorId = await getDataLocal("user-admin");

/*------------------------render page---------------------------*/

const renderPage = async () => {
  const tickets = await getAllTickets();
  //   const foods = await getAllFoods()

  const allUsers = await getAllUsers();

  const allFood = await getAllFood();
  const foods =allFood.filter(item => item.oprator === opratorId)



  // const foods = allFood.filter(item => item.)

  const containerTickets = document.querySelector(
    ".tikets-category.ticekts-container"
  );
  const containerTicketsMore = document.querySelector(".more-container");
  const containerTicketsAnswer = document.querySelector(".answer-container");
  const containerUsers = document.querySelector("#container-users");
  const containerFood = document.querySelector("#container-food");
  tickets.forEach(async (item, index) => {
    const note1 = `<div class="col-12 col-md-6 p-2">
        <div class="ticket-item">
          <div class="col-4 col-md-3 d-flex d-flex flex-column align-items-center justify-content-center">
            <div class="imge-user">
              <img src="../assets/images/5.png" alt="">
            </div>

          </div>
          <div class="col-5 col-md-6 content-ticket">
            <div class="name-user">${item.user.name}</div>
            <div class="description">
              <div> ${shortTicket(item.message, 100)}</div>
              <div class="more" id="more-btn"> در ادامه...</div>


            </div>


          </div>
          <div class="col-3 col-md-3 btn-answer-ticket">
            <span class="btn-answer btn-modal-1">
              پاسخ
            </span>

          </div>

        </div>

      </div>`;
    const note2 = `<div class="content-modal modal-tickettwo">
        <div class="inner-modal">
          <form class="px-4 pt-2">
            <div class="py-2">
              <div class="content-more-ticket">
               ${item.message}
              </div>

            </div>
          </form>
        </div>
      </div>`;
    const note3 = `<div class="content-modal modal-ticket ">
        <div class="inner-modal">
          <form class="px-4 pt-2">
            <div class="py-2">
              <div class="name">jhg</div>
              <div class="title">
                ,knjh
              </div>
              <textarea
                name="modal"
                class="input-modal input-answer"
                cols="30"
                rows="7"
                placeholder="پاسخ تیکت"></textarea>
            </div>
            <div class="btns-modal">
              <div class="btn-modal col-6"  onclick="answerTicket(${item.id} , ${index})">
                <span class="btn-send-modal">ارسال</span>
              </div>
              <div class="btn-modal close-modal-adamtaeid col-6">
                <span>لغو</span>
              </div>
            </div>
          </form>
        </div>
      </div>`;

    containerTickets.innerHTML += note1;
    containerTicketsMore.innerHTML += note2;
    containerTicketsAnswer.innerHTML += note3;
  });

  allUsers.forEach((item, index) => {
    const note = `
      <div class="col-12 col-md-6 p-2 kk">
                <div class="item-user">
                  <!-- imge-user -->
                  <div class="col-2 imge-user">
                    <div>
                      <img src="${item.profileimage}" alt="">
                    </div>

                  </div>
                  <!-- range-type -->
                  <div class="col-5 contenthh" style="color: #fff;">
                    <div class="name-user">${item.name}</div>
                    <label id="title-type-range" for="amount-cream">روند بهبودی</label>
                    <input id="amount-cream" type="range" name="cream" list="amount" step="50">
                    <datalist id="amount">
                      <!-- <option value="0" label="کم"></option> -->
                      <option value="50" label="21دی 01"></option>
                      <!-- <option value="100" label="زیاد"></option> -->
                    </datalist>

                  </div>
                  <!-- video-rotin -->
                  <div class="col-5 video-rotin">
                    <div class="video-item">
                      <video src="../assets/images/jj.mp4"
                        poster="../assets/images/poster.png" controls>

                      </video>
                    </div>

                  </div>

                </div>
                <a href="../admin/Definition-of-diet.html?${item.id}">
                  <span class="Definition-of-diet">تعریف رژیم غذایی</span>
                </a>
              
              </div>`;

    containerUsers.innerHTML += note;
  });

  foods.forEach((item, index) => {
    const note = `<div class="row-food-category p-2">
    <div class="col-4">
      <div id="food-name" class="row-food-item">
          ${item.name}
        </div>
    </div>
    <div class="col-4">
      <div id="amount-of-grams" class="row-food-item">
        ${item.value}گرم
      </div>
    </div>
    <div class="col-4">
      <div id="The-amount-of-calories" class="row-food-item">
      ${item.calories}
      کالری
      </div>
    </div>
  </div>`;

    containerFood.innerHTML += note;
  });

  /* ------------------change img and content--------------------- */
  let btns = document.querySelectorAll(".btn-category-user");
  let contents = document.querySelectorAll(".content");

  btns.forEach((item, index) => {
    item.addEventListener("click", () => {
      btns.forEach((item) => {
        item.classList.remove("active");
      });
      contents.forEach((item) => {
        item.classList.remove("active");
      });
      btns[index].classList.add("active");
      contents[index].classList.add("active");
    });
  });

  /* ------------------change img and content--------------------- */
  /*----------------------------(show , close , send) modal add-food --------------------------- */
  const btnsShowModall = document.querySelectorAll(".add-food-icon");
  const btnsCloseModall = document.querySelectorAll("#close");
  const btnsSendModall = document.querySelectorAll(".btn-send-modal");
  const valueModalss = document.querySelectorAll(".input-modal");
  const contentModalss = document.querySelectorAll(".modal-add-post");

  btnsShowModall.forEach((item, index) => {
    item.addEventListener("click", () => {
      contentModalss[index].classList.add("active");
    });
  });

  btnsCloseModall.forEach((item, index) => {
    item.addEventListener("click", () => {
      contentModalss[index].classList.remove("active");
    });
  });

  contentModalss.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      if (e.target.className === "inner-modal")
        contentModalss[index].classList.remove("active");
    });
  });
  /*----------------------------(show , close , send) modal add-food --------------------------- */
  /*----------------------------(show , close , send) modal answer --------------------------- */
  const btnsShowModal = document.querySelectorAll(".btn-modal-1");
  const btnsCloseModal = document.querySelectorAll(".close-modal-adamtaeid");
  const btnsSendModal = document.querySelectorAll(".btn-send-modal");
  const valueModals = document.querySelectorAll(".input-modal");
  const contentModals = document.querySelectorAll(".modal-ticket");

  btnsShowModal.forEach((item, index) => {
    item.addEventListener("click", () => {
      contentModals[index].classList.add("active");
    });
  });

  btnsCloseModal.forEach((item, index) => {
    item.addEventListener("click", () => {
      contentModals[index].classList.remove("active");
    });
  });

  contentModals.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      if (e.target.className === "inner-modal")
        contentModals[index].classList.remove("active");
    });
  });
  /*----------------------------(show , close , send) modal modal answer --------------------------- */

  /*----------------------------(show , close , send) modal more-text-ticket --------------------------- */
  const btnsShowModaltwo = document.querySelectorAll("#more-btn");

  const contentModalstwo = document.querySelectorAll(".modal-tickettwo");

  btnsShowModaltwo.forEach((item, index) => {
    item.addEventListener("click", () => {
      contentModalstwo[index].classList.add("active");
    });
  });

  contentModalstwo.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      if (e.target.className === "inner-modal")
        contentModalstwo[index].classList.remove("active");
    });
  });
  /*----------------------------(show , close , send) modal more-text-ticket --------------------------- */
};

await renderPage();

/*------------------------render page---------------------------*/

/*------------------------add food---------------------------*/
const btnAddFood = document.querySelector("#btn-add-food");

btnAddFood.addEventListener("click", async () => {
  const name = document.querySelector("#name-food");
  const valueFood = document.querySelector("#value-food");
  const callery = document.querySelector("#callery-food");
  //گرفتن ایدی از لوکال استوریج با توکن
  const id = 2;

  const data = {
    name: name.value,
    value: valueFood.value,
    calories: callery.value,
    oprator: 2,
  };
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/program/food/all/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  // await addFood(data);
});

/*------------------------add food---------------------------*/

/*------------------------answer Ticket---------------------------*/

window.answerTicket = async (id, index) => {
  const inputAnswer = [
    ...document.querySelectorAll(".input-modal.input-answer"),
  ][index];

  

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    oprator: opratorId,
    message: inputAnswer.value,
    ticket: id,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch(`http://127.0.0.1:8000/ticket/reply/all/`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
};

/*------------------------answer Ticket---------------------------*/
