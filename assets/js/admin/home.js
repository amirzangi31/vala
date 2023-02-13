import { addPost, getAllPost } from "../api/post.js";

const renderPage = async () => {
  const allPosts = await getAllPost();
  const posts = allPosts.filter((item) => item.types === "image");
  const containerPosts = document.querySelector("#posts-container");
  const containerBigPost = document.querySelector("#big-container");

  posts.forEach((item, index) => {
    const note = `<div class="post-item col-3 col-md-12 active">
        <div class="col-12 col-md-4 col-lg-3 p-1">
          <div class="right-post-item">
            <img src="http://127.0.0.1:8000${item.file}" alt="">
          </div>

        </div>
        <div class="col-8 col-md-7 col-lg-8 p-1">
          <div class="left-post-item">
            <div class="title-post">${item.title}</div>
            <div class="des-post"> ${item.description}
            </div>
          </div>

        </div>
        <div class="more"><img
            src="../assets/images/icon-valla/MENUUU.png" alt=""></div>
      </div>`;

    const noteTwo = `
      <div class="content-post ">
      <img src="../assets/images/post-imge/post10.png" alt=""
        class="imge-post">
      <div class="inner-content-post-two">
        <div class="line">
          <div class="row">
            <div class="col-2 icon">
              <div class="heart"> <img
                  src="../assets/images/icon-valla/heart.png" alt=""></div>
              <div class="comment"><img
                  src="../assets/images/icon-valla/comment.png" alt=""></div>
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

          <div class="commentt">
            <div class="col-12">
              <div class="comment-item">
                <div class="col-2 col-md-1 p-1">
                  <div class="imge-comment">
                    <img src="../assets/images/comment-img/4.png" alt="">
                  </div>
                </div>
                <div class="col-10 col-md-11 test-comment p-1">

                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="comment-item">
                <div class="col-2 col-md-1 p-1">
                  <div class="imge-comment">
                    <img src="../assets/images/comment-img/2.png" alt="">
                  </div>
                </div>
                <div class="col-10 col-md-11 test-comment p-1">

                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="comment-item">
                <div class="col-2 col-md-1 p-1">
                  <div class="imge-comment">
                    <img src="../assets/images/comment-img/1.png" alt="">
                  </div>
                </div>
                <div class="col-10 col-md-11 test-comment p-1">

                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="comment-item">
                <div class="col-2 col-md-1 p-1">
                  <div class="imge-comment">
                    <img src="../assets/images/comment-img/3.png" alt="">
                  </div>
                </div>
                <div class="col-10 col-md-11 test-comment p-1">

                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="comment-item">
                <div class="col-2 col-md-1 p-1">
                  <div class="imge-comment">
                    <img src="../assets/images/comment-img/5.png" alt="">
                  </div>
                </div>
                <div class="col-10 col-md-11 test-comment p-1">

                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="comment-item">
                <div class="col-2 col-md-1 p-1">
                  <div class="imge-comment">
                    <img src="../assets/images/comment-img/6.png" alt="">
                  </div>
                </div>
                <div class="col-10 col-md-11 test-comment p-1">

                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="comment-item">
                <div class="col-2 col-md-1 p-1">
                  <div class="imge-comment">
                    <img src="../assets/images/comment-img/7.png" alt="">
                  </div>
                </div>
                <div class="col-10 col-md-11 test-comment p-1">

                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="comment-item">
                <div class="col-2 col-md-1 p-1">
                  <div class="imge-comment">
                    <img src="../assets/images/comment-img/8.png" alt="">
                  </div>
                </div>
                <div class="col-10 col-md-11 test-comment p-1">

                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="comment-item">
                <div class="col-2 col-md-1 p-1">
                  <div class="imge-comment">
                    <img src="../assets/images/comment-img/9.png" alt="">
                  </div>
                </div>
                <div class="col-10 col-md-11 test-comment p-1">

                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                </div>
              </div>
            </div>


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

  btns[0].classList.add("active");
  contents[0].classList.add("active");
  
};

await renderPage();

/*-------------------add post-----------------*/
const btnAddPost = document.querySelector("#add-post");
const imageAddPost = document.querySelector("#picture-post-add");
const textAddPost = document.querySelector("#text-post-add");
const titleAddPost = document.querySelector("#title-post-add");

btnAddPost.addEventListener("click", async () => {
  //   const data = {
  //     file: imageAddPost.value,
  //     poster: imageAddPost.value,
  //     title: titleAddPost.value,
  //     description: textAddPost.value,
  //     isDelete : false,
  //     like : 1,
  //     type : "image"
  //   };
  //   await addPost(data);
});
/*-------------------add post-----------------*/

/*------------------------------Render Page--------------------------------- */

let btnHamburger = document.querySelectorAll(".inner-content-post-two");
btnHamburger.forEach((item, index) => {
  item.addEventListener("click", () => {
    btnHamburger[index].classList.toggle("active");
  });
});

/* ------------------change img and content--------------------- */

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
// const btnsShowModalazmayesh = document.querySelectorAll("#azmayesh-raygan");
// const btnsCloseModalazmayesh = document.querySelector("#close-modal-azmayesh");
// const contentModalsazmayesh = document.querySelector(".modal-azmayesh-raygan");

// btnsShowModalazmayesh.forEach((item) => {
//   item.addEventListener("click", () => {
//     contentModalsazmayesh.classList.add("active");
//   });
// });

// btnsCloseModalazmayesh.addEventListener("click", () => {
//   contentModalsazmayesh.classList.remove("active");
// });

// contentModalsazmayesh.addEventListener("click", (e) => {
//   if (e.target.className === "inner-modal")
//     contentModalsazmayesh.classList.remove("active");
// });

/*----------------------------(show , close , send) modal add-post --------------------------- */
