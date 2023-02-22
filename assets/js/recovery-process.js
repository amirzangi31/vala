import {
  addRavand,
  addRoutin,
  getAllRavand,
  getAllRoutin,
} from "./api/routin.js";
import { getUserWithId } from "./api/user.js";
import { getDataLocal } from "./helper.js";
import { getUserLocal } from "./api/validateLoginUser.js`";

await getUserLocal();

/*---------------------render page-----------------------*/

const userId = await getDataLocal("user");
const user = await getUserWithId(+userId);

const renderPage = async () => {
  const container = document.querySelector("#content");

  const ravands = await getAllRavand();
  const ravandUser = ravands.filter((item) => item.user === +userId);

  const note = `
 <div class="item-images-r" id="content-image">
    ${!ravandUser.length ? "<p class='display-6 text-white'>برای اضافه کردن عکس به روند بهبودی بروی + کلیک کنید</p>" : ""}
    ${Object.keys(ravandUser)
      .map((item) => {
        return `
        <img class="image" src="http://127.0.0.1:8000/${ravandUser[item].image}" alt="image">
        `;
      })
      .join("")}
        
    </div>
      <div class=" col-12 col-lg-8 p-1" style="color: #fff;">
        <div class=" contenthh">
            <div class="name-user">${user.name}</div>
        <label id="title-type-range" for="amount-cream">روند بهبودی</label>
        <input id="amount-cream" type="range" value="0" min="0" max="${ravandUser.length - 1}" name="cream" list="amount" step="1" oninput="changeHanlder(${1})">
        <button class="btn-pl" onclick="playHandler(${1})">play</button>
        <button class="btn-pl" onclick="stopHandler()">stop</button>
        </div>
        
      </div>
    `;

  container.innerHTML = note;
  const images = [...document.querySelector(`#content-image`).children];
  if(ravandUser.length){
    images[0].classList.add("active");
  }
};

await renderPage();

/*---------------------render page-----------------------*/

/*------------------------play and stop slider------------------------*/
let play = false;
const timer = (name, inputName, step) => {
  const images = [...document.querySelector(name).children];
  images.forEach((item) => {
    item.classList.remove("active");
  });

  images[0].classList.add("active");
  let count = 0;

  const input = document.querySelector(inputName);
  input.value = 0;
  const time = setInterval(() => {
    console.log(count);
    if (count === images.length - 1) return;
    count++;
    images.forEach((item, index) => {
      item.classList.remove("active");
    });
    images[count].classList.add("active");
    input.value += 1;
    play = true;
    console.log(play);
  }, 2500);
  window.stopHandler = () => {
    clearInterval(time);
  };
};

window.playHandler = (step) => {
  timer(`#content-image`, `#amount-cream`, step);
};

window.changeHanlder = (step) => {
    
  const input = document.querySelector(`#amount-cream`);

  const images = [...document.querySelector(`#content-image`).children];
  const count = input.value / +step;

  if (count === images.length) return;

  images.forEach((item) => {
    item.classList.remove("active");
  });

  images[count].classList.add("active");
};
/*------------------------play and stop slider------------------------*/
const btnShowModal = document.querySelector("#btn-show-modal");
const modal = document.querySelector(".modal-add-ravand");
const closeModal = document.querySelector(".modal-add-ravand .inner-modal");
btnShowModal.addEventListener("click", () => {
  modal.classList.add("active");
});
closeModal.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal" || e.target.className === "close") {
    modal.classList.remove("active");
  }
});

const allRoutin = await getAllRoutin();
const isRoutin = allRoutin.find((item) => item.user === +userId);

const btnSendRavand = document.querySelector("#btn-ravand");

btnSendRavand.addEventListener("click", async () => {
  const image = document.querySelector("#picture-ravand-add");

 
  if (!Boolean(isRoutin)) {
    
    const data = {
      name: "amir",
      isActive: false,
      value: "asdlknv;sa",
      user: +userId,
      types: "food",
    };

    await addRoutin(data);

    var formData = new FormData();
    formData.append("image", image.files[0], image.value);
    formData.append("user", +userId);
    formData.append("routin", isRoutin.id);
    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };
    await addRavand(requestOptions);
  }


  var formData = new FormData();
    formData.append("image", image.files[0], image.value);
    formData.append("user", +userId);
    formData.append("routin", isRoutin.id);
    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };
  await addRavand(requestOptions);
});
