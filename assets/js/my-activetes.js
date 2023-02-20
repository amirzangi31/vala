/*---------------------render Page---------------------*/

const contents = [{}, {}, {}, {},{},{},{},{}, ];

const renderPage = async () => {
  const container = document.querySelector("#container");

  contents.forEach((item, index) => {
    const note = `<div class="col-12 col-md-6 p-2 kk">
        <div class="item-user">
          <!-- imge-user -->
          <div class="col-2 imge-user">
            <div>
              <img src="./assets/images/rotin/2.png" alt="">
            </div>

          </div>
          <!-- range-type -->
          <div class="col-5 contenthh" style="color: #fff;">
            <div class="name-user" >رضا آخوندی</div>
            <label id="title-type-range" for="amount-cream">روند بهبودی</label>
            <input id="amount-cream-${index}" type="range" value="0" name="cream" 
            list="amount" step="${100 / 4}" oninput="changeHanlder(${index} , ${
      100 / 4
    })">
            <button onclick="playHandler(${index} , ${100 / 4})">play</button>
            <button onclick="stopHandler()">stop</button>
          </div>
          <!-- video-rotin -->
          <div class="col-5 video-rotin">
            <div class="video-item">
              <div class="video-item" id="content-image-${index}">
                <img class="image-user active"  src="./assets/images/post-imge/1.png" alt="">
                <img class="image-user " src="./assets/images/post-imge/11.png" alt="">
                <img class="image-user" src="./assets/images/post-imge/4.png" alt="">
                <img class="image-user" src="./assets/images/post-imge/3.png" alt="">
              </div>
            </div>

          </div>

        </div>
      </div>`;

    container.innerHTML += note;
  });
};

await renderPage();
/*---------------------render Page---------------------*/



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
  input.value = 25;
  const time = setInterval(() => {
    console.log(count);
    if (count === images.length - 1) return;
    count++;
    images.forEach((item, index) => {
      item.classList.remove("active");
    });
    images[count].classList.add("active");
    input.value = (count + 1) * 25;
    play = true;
    console.log(play);
  }, 1000);
  window.stopHandler = () => {
    clearInterval(time);
  };
};

window.playHandler = (index, step) => {
  timer(`#content-image-${index}`, `#amount-cream-${index}`, step);
};

window.changeHanlder = (index, step) => {
  const input = document.querySelector(`#amount-cream-${index}`);

  const images = [
    ...document.querySelector(`#content-image-${index}`).children,
  ];
  const count = input.value / +step;

  if (count === images.length) return;

  images.forEach((item) => {
    item.classList.remove("active");
  });

  images[count].classList.add("active");
};
/*------------------------play and stop slider------------------------*/

