import { addAzmayesh } from "./api/azmayesh.js";
import { getAllComments, sendComment } from "./api/comment.js";
import { getAllPost, likePost } from "./api/post.js";
import { getAllStory } from "./api/story.js";
import { getUserWithId } from "./api/user.js";
import { getUserLocal } from "./api/validateLoginUser.js";
import { shortTicket } from "./helper.js";
import { toast } from "./toastify.js";

//get userid from localstorage
await getUserLocal();

const user = await getUserWithId(JSON.parse(localStorage.getItem("user")));

const comments = await getAllComments();
const renderPage = async () => {
  const allPosts = await getAllPost();
  const posts = allPosts.filter(
    (item) => item.types === "image" && item.isDelete === false
  );
  const containerPosts = document.querySelector("#posts-container");
  const containerBigPost = document.querySelector("#big-container");
  const containerStories = document.querySelector("#container-story");
  const containerMoadals = document.querySelector("#container-modals");

  const allStories = await getAllStory();

  allStories.forEach((item, index) => {
    const note = ` 
    
    <div class="col-3 col-md-3 p-2 highlit-item story_item" >
    <div class="highlit-item-inner">
      <img src="${item.file}" alt="">
    </div>
    <div class="highlit-title">${shortTicket(
      "شسیرذسمیشتذرسشیهمعرذمهسعی",
      15
    )}...</div>
  </div>`;

    const note1 = `<div class="content-modal modal-hilight-pro">
  <div class="inner-modal d-flex flex-column ">
  <div class="btn-exit display-1 text-white">×</div>
  <div class="border-1 border-white rounded-4 overflow-hidden " >
  <img src="${item.file}" />
  </div>
 <p class="text-white text-justify my-4" style="font-size : 1.5em">asodnviuasdbvuasbivasdbdsavbsadjk</p>
  <div class="text-white">
        <button class="display-1 mx-2 next" onclick="nextHandler(${index})"><</h1>
        <button class="display-1 mx-2 prev" onclick="prevHandler(${index})">></button>
  </div>
</div>
  
</div>`;

    containerStories.innerHTML += note;
    containerMoadals.innerHTML += note1;
  });

  posts.forEach((item, index) => {
    const commentsPost = comments.filter((element) => item.id === element.post);
    const commentFilter = commentsPost.filter((item) => item.accepted === true);

    const note = `<div class="post-item col-3 col-md-12 ">
      <div class="col-12 col-md-4 col-lg-3 p-1">
        <div class="right-post-item">
          <img src="${item.file}" alt="">
        </div>

      </div>
      <div class="col-8 col-md-7 col-lg-8 p-1">
        <div class="left-post-item">
          <div class="title-post">${item.title}</div>
          <div class="des-post"> ${shortTicket(item.description, 80)}...
          </div>
        </div>

      </div>
      <div class="more"><img
          src="./assets/images/icon-valla/MENUUU.png" alt=""></div>
    </div>`;

    const noteTwo = `
        <div class="content-post ">
        <img src="${item.file}" alt=""
          class="imge-post">
        <div class="inner-content-post-two">
          <div class="line">
            <div class="row">
              <div class="col-2 icon">
                <div class="heart"><img
                    src="http://127.0.0.1:8000/media/heart.png" alt="" onclick="likeHandler(${
                      item.like
                    } , ${item.id})"></div>
                <div class="comment"><img
                    src="http://127.0.0.1:8000/media/comment.png" alt="" onclick="addCommentPost(${
                      item.id
                    })"></div>
              </div>
  
  
              <div class="col-10">
                <div class="up-content-post">
                  <div class="title-post">${item.title}</div>
                  <div class="description">
                   ${item.description}
                  </div>
                </div>
  
              </div>
            </div>
  
            <div class="insert-comment col-10 mx-auto">
            <div class="image-insert mx-2">
              <img src="http://127.0.0.1:8000/${user.profileimage}" alt="${
      item.title
    }">
            </div>
            <div class="comment-insert">
              <input type="text" placeholder="کامنت ..."  class="comment-input" >
            
              <button  type="button" class="btn-send" onclick="addCommentPost(${
                item.id
              } ,${index} )">ارسال </button>
            </div>
          
          </div>


            <div class="commentt">
            ${Object.keys(commentFilter)
              .map((key) => {
                return `<div class="col-12">
                <div class="comment-item">
                  <div class="col-2 col-md-1 p-1">
                    <div class="imge-comment">
                      <img src="http://127.0.0.1:8000${commentFilter[key].user.profileimage}" alt="">
                    </div>
                  </div>
                  <div class="col-10 col-md-11 test-comment p-1 text-right">
                      ${commentFilter[key].text}
                  </div>
                </div>
              </div>`;
              })
              .join("")}
            </div>
          </div>
        </div>
      </div>`;

    containerPosts.innerHTML += note;
    containerBigPost.innerHTML += noteTwo;
  });

  let btns = document.querySelectorAll(".post-item");
  let contents = document.querySelectorAll(" .content-post");

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

  if (btns.length) {
    btns[0].classList.add("active");
    contents[0].classList.add("active");
  }

  // ---------------------------------story-------------------------------------//
  let story = document.querySelectorAll(".story_item");
  let modal_story = document.querySelectorAll(" .modal-hilight-pro");
  let overalyModals = document.querySelectorAll(
    ".modal-hilight-pro .inner-modal"
  );
  let closeModals = document.querySelectorAll(".btn-exit");

  story.forEach((item, index) => {
    item.addEventListener("click", () => {
      modal_story[index].classList.add("active");
    });
  });
  overalyModals.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      if (e.target.className === "inner-modal d-flex flex-column ") {
        modal_story[index].classList.remove("active");
      }
    });
  });
  closeModals.forEach((item, index) => {
    item.addEventListener("click", () => {
      modal_story[index].classList.remove("active");
    });
  });
  // ---------------------------------story-------------------------------------//
};

await renderPage();

/*------------------------------Render Page--------------------------------- */

let btnHamburger = document.querySelectorAll(".inner-content-post-two");
btnHamburger.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (
      e.target.className === "" ||
      e.target.className === "" ||
      e.target.className === "comment-input" ||
      e.target.className === "btn-send"
    )
      return;
    btnHamburger[index].classList.toggle("active");
  });
});

/* ------------------change img and content--------------------- */
let btns = document.querySelectorAll(".post-item");
let contents = document.querySelectorAll(" .content-post");

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
/*----------------------------(show , close , send) modal add-post --------------------------- */
const btnsShowModal = document.querySelectorAll(".icon-add");
const btnsCloseModal = document.querySelectorAll(".close-modal-adamtaeid");
const btnsSendModal = document.querySelectorAll(".btn-send-modal");
const valueModals = document.querySelectorAll(".input-modal");
const contentModals = document.querySelectorAll(".modal-add-post");

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
/*----------------------------(show , close , send) modal add-post --------------------------- */
/* ------------------change img and content--------------------- */
let btnss = document.querySelectorAll("#menuuuu");
let contentss = document.querySelector(".height-full-viewport");
let close_btn = document.querySelector("#close");

//   btns.addEventListener("click", () => {
//       contents.classList.add("viewport");
//     });
btnss.forEach((item) => {
  item.addEventListener("click", () => {
    contentss.classList.add("viewport");
  });
});

close_btn.addEventListener("click", () => {
  contentss.classList.remove("viewport");
});
/*----------------------------(show , close , send) modal rotin --------------------------- */
const btnsShowModalrotin = document.querySelectorAll("#icon-add-rotin");
const btnsCloseModalrotin = document.querySelector("#close-modal-rotin");
const contentModalsrotin = document.querySelector(".modal-rotin");

btnsShowModalrotin.forEach((item) => {
  item.addEventListener("click", () => {
    contentModalsrotin.classList.add("active");
  });
});

btnsCloseModalrotin.addEventListener("click", () => {
  contentModalsrotin.classList.remove("active");
});

contentModalsrotin.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal")
    contentModalsrotin.classList.remove("active");
});

/*----------------------------(show , close , send) modal rotin --------------------------- */
/*----------------------------(show , close , send) modal add-post --------------------------- */
const btnsShowModalazmayesh = document.querySelectorAll("#azmayesh-raygan");
const btnsCloseModalazmayesh = document.querySelector("#close-modal-azmayesh");
const contentModalsazmayesh = document.querySelector(".modal-azmayesh-raygan");

btnsShowModalazmayesh.forEach((item) => {
  item.addEventListener("click", () => {
    contentModalsazmayesh.classList.add("active");
  });
});

btnsCloseModalazmayesh.addEventListener("click", () => {
  contentModalsazmayesh.classList.remove("active");
});

contentModalsazmayesh.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal")
    contentModalsazmayesh.classList.remove("active");
});

/*----------------------------(show , close , send) modal add-post --------------------------- */

/*-------------------add azmayesh--------------------*/

const btnAddAzmayesh = document.querySelector("#btn-add-azmayesh");

btnAddAzmayesh.addEventListener("click", async () => {
  const id = JSON.parse(window.localStorage.getItem("user"));
  const element = document.querySelector(`#file-azmayesh`);
  const des = document.querySelector(`#des-azmayesh`);
  var formdata = new FormData();

  formdata.append("image", element.files[0], element.value);
  formdata.append("user", `${id}`);
  formdata.append("descripton", des.value);
  formdata.append("response", "response");

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  await addAzmayesh(requestOptions);
});

/*-------------------add azmayesh--------------------*/

/*-------------------like handler--------------------*/

window.likeHandler = async (like, id) => {
  const data = {
    like: like + 1,
  };
  
  await likePost(id, data);
};

/*-------------------like handler--------------------*/

/*-------------------comment handler--------------------*/
console.log(JSON.parse(localStorage.getItem("user")));
window.addCommentPost = async (id, index) => {
  const commentInserts = [...document.querySelectorAll(".comment-input")];

  console.log(commentInserts[index]);
  const data = {
    user: JSON.parse(localStorage.getItem("user")),
    text: commentInserts[index].value,
    post: id,
    accepted: false,
  };

  // await toast("کامنت با موفقیت ارسال شد و در حال بررسی است")

  await sendComment(data);
};
/*-------------------comment handler--------------------*/

/*-------------------btn next , prev story-------------------*/

let modal_story = document.querySelectorAll(" .modal-hilight-pro");
let count;

window.prevHandler = (index) => {
  count = index;
  if (count + 1 === modal_story.length) return;
  modal_story.forEach((item) => {
    item.classList.remove("active");
  });

  modal_story[count + 1].classList.add("active");
};
window.nextHandler = (index) => {
  count = index;
  if (count === 0) return;
  modal_story.forEach((item) => {
    item.classList.remove("active");
  });
  modal_story[count - 1].classList.add("active");
};

/*-------------------btn next , prev story--------------------*/
