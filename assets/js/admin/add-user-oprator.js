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
const btnsCloseModall = document.querySelectorAll(".close-modal-adamtaeid");
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