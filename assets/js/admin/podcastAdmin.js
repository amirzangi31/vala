import { getAllPost } from "../api/post.js";

const renderPage = async () => {
  const allPosts = await getAllPost();
  const podcasts = allPosts.filter((item) => item.types === "podcast");
  const containerPosts = document.querySelector("#posts-container");
  const containerBigPost = document.querySelector("#big-container");

  console.log(podcasts);

  podcasts.forEach((item, index) => {
    const note = ` <div class="post-item ">
      <div class="col-3 col-md-4 col-lg-3 p-1">
        <div class=" right-post-item">
          <img src="../assets/images/post-imge/11.png" alt="">
        </div>
     
      </div>
      <div class=" col-8 col-md-7 col-lg-8 p-1 ">
        <div class=" left-post-item ">
          <div class="title-post">${item.title}</div>
        <div class="des-post">${item.description}</div>
        </div>
        
      </div>
      <div class="more" ><img
          src="../assets/images/icon-valla/MENUUU.png" alt=""></div>
    </div>`;

    const noteTwo = `<div class="content-post">
      <!-- imge-podcast -->
    <img src="../assets/images/post-imge/post11.png" alt="" class="imge-post">
    <div class="inner-content-post">
     <div class="title-podcast">
     ${item.title}
     </div>


     <!--audio  -->
     <div class="podcast">
      <audio controls  class="jj">
        <source src="../assets/podcast/Dariush - Hasod [128].mp3" type="audio/mpeg" >
       </audio>
     </div>

    </div>




  </div>`;

    containerPosts.innerHTML += note;
    containerBigPost.innerHTML += noteTwo;
  });

  let btns = document.querySelectorAll(".post-item");
  let contents = document.querySelectorAll(".content-post");

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
document.addEventListener(
  "play",
  (e) => {
    let audios = document.querySelectorAll("audio");

    for (let i = 0; i < audios.length; i++) {
      if (audios[i] !== e.target) {
        audios[i].pause();
      }
    }
  },
  true
);

/*-------------------add post-----------------*/
//   const btnAddPodcast = document.querySelector("#add-podcast");
//   const imageAddPodcast = document.querySelector("#picture-podcast-add");
//   const textAddPodcast = document.querySelector("#text-podcast-add");
//   const titleAddPodcast = document.querySelector("#title-podcast-add");

//   btnAddPodcast.addEventListener("click", async () => {
//     //   const data = {
//     //     file: imageAddPost.value,
//     //     poster: imageAddPost.value,
//     //     title: titleAddPost.value,
//     //     description: textAddPost.value,
//     //     isDelete : false,
//     //     like : 1,
//     //     type : "image"
//     //   };
//     //   await addPost(data);
//   });
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
//   let btnss = document.querySelectorAll("#menuuuu");
//   let contentss = document.querySelector(".height-full-viewport");
//   let close_btn = document.querySelector("#close");

//   //   btns.addEventListener("click", () => {
//   //       contents.classList.add("viewport");
//   //     });
//   btnss.forEach((item) => {
//     item.addEventListener("click", () => {
//       contentss.classList.add("viewport");
//     });
//   });

//   close_btn.addEventListener("click", () => {
//     contentss.classList.remove("viewport");
//   });
/*----------------------------(show , close , send) modal rotin --------------------------- */
//   const btnsShowModalrotin = document.querySelectorAll("#icon-add-rotin");
//   const btnsCloseModalrotin = document.querySelector("#close-modal-rotin");
//   const contentModalsrotin = document.querySelector(".modal-rotin");

//   btnsShowModalrotin.forEach((item) => {
//     item.addEventListener("click", () => {
//       contentModalsrotin.classList.add("active");
//     });
//   });

//   btnsCloseModalrotin.addEventListener("click", () => {
//     contentModalsrotin.classList.remove("active");
//   });

//   contentModalsrotin.addEventListener("click", (e) => {
//     if (e.target.className === "inner-modal")
//       contentModalsrotin.classList.remove("active");
//   });
