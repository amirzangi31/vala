import { getManager } from "./api/managers.js";
import { getAllPost } from "./api/post.js";
import { getId } from "./helper.js";

const id = await getId(window.location.search);

/*-----------------render page------------------*/
const renderPage = async () => {
  const manager = await getManager(id);
  const containerTitle = document.querySelector("#container-title");
  const containerPost = document.querySelector("#container-portfolio");
  const footer = document.querySelector("#footer");

  const posts = await getAllPost();
  const postO = posts.filter((item) => item.oprator === +id);

  postO.forEach((item) => {
    const note = `
        <div class="content-modal modal-portfolio">

        <div div class="inner-modal d-flex flex-column">
          <div class="portifilo">
            <div class="btn-close m-2" style="cursor:pointer;">
              <img src="./assets/images/icon-valla/close-modal.png" alt="">
            </div>
            <div class="image-portifilo">
              <img src=${item.file} alt="">
            </div>
            <div class="title text-center " style="font-size : 24px">
                ${item.description}
            </div>
          </div>
        </div>
  
      </div>
        <div class="col-6 col-md-2 p-3 portfolio-items">
                <div class="portfolio-item">
                  <img src=${item.poster} alt="">
                </div>
                <div class="title-portfolio-item">عنوان پست</div>

              </div>
        
        `;

    containerPost.innerHTML += note;
  });

  const titlePage = `
    <div class="category-user-inner col-6">
              <!-- imge-user -->
              <div class="col-6 col-md-2 p-3">
                <div class="imge-user">
                  <img src="http://127.0.0.1:8000/${manager.image}" alt="">
                </div>
              </div>
              <!-- imge-user -->
              <!-- name-user -->
              <div class="col-6 col-md-10 p-3 jj">
                <div class="name-user">
               ${manager.name}

                </div>
              </div>
              <!-- name-user -->
            </div>
    `;
  const footerManager = `
    <div class="inner-reservation">
              <div class="right">
                <div class="title">خدمات</div>
                <div class="description">${manager.types}</div>

              </div>

              <div class="price">
                یک میلیون<br />
                تومان

              </div>
              <div class="btn-reserv">
                رزرو
              </div>
            </div>`;
  containerTitle.innerHTML = titlePage;
  footer.innerHTML = footerManager;
};

await renderPage();
/*-----------------render page------------------*/

// -----------------------------------edit-post-itsm-----------------------------------//
let portfolio_item = document.querySelectorAll(".portfolio-items");
let modal_portfolio = document.querySelectorAll(".modal-portfolio");
let overalyModals = document.querySelectorAll(".modal-portfolio .inner-modal");
let closeModals = document.querySelectorAll(".btn-close");

portfolio_item.forEach((item, index) => {
  item.addEventListener("click", () => {
    modal_portfolio[index].classList.add("active");
  });
});
overalyModals.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (e.target.className === "inner-modal") {
      modal_portfolio[index].classList.remove("active");
    }
  });
});
closeModals.forEach((item, index) => {
  item.addEventListener("click", () => {
    modal_portfolio[index].classList.remove("active");
  });
});
// -------------------------------------edit-post-itsm---------------------------------//
