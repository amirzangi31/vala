import { getUserWithId } from "../api/user.js";
import { getDataLocal, getPath, phoneHandlerReverse } from "../helper.js";
import { validateLogin } from "../api/validateLoginAdmin.js";
import { addCartex, getAllCartex } from "../api/cartext.js";
import { getManager } from "../api/managers.js";
import {toast} from '../toastify.js'
await validateLogin();

const opratorId = await getDataLocal("user-admin");

const oprator = await getManager(opratorId);

const containerRows = document.querySelector("#container-rows");

const userId = getPath(window.location.search);

const user = await getUserWithId(+userId);

const nameO = async (id) => {
  const res = await getManager(id);
  return res.name;
};

/*-----------render page----------------*/
const renderPage = async () => {
  const containerTitle = document.querySelector("#title");

  const title = `
    <div class="col-4 p-1">
                                            <div class="information-item text-center">${
                                              user.name
                                            }</div>
                                        </div>
                                        <div class="col-4 p-1">
                                            <div class="information-item text-center">${
                                              user.nationalcode
                                            }</div>
                                        </div>
                                        <div class="col-4 p-1">
                                            <div class="information-item text-center">${phoneHandlerReverse(
                                              user.phone_number
                                            )}</div>
                                        </div>
    `;
  containerTitle.innerHTML = title;

  const cartexs = await getAllCartex();
  const cartexUser = cartexs.filter((item) => item.user.id === +userId);
//   const cartexreverse = cartexUser.reverse();

  cartexUser.forEach(async (item, index) => {
    const note = `
    <div class="table-row table-one">
    <div class="col-1 p-1"><div class="row-item jalseh">${
      item.numbermeet
    }</div></div>
    <div class="col-2 p-1"><div class="row-item date">${
      item.descriptions
    }</div></div>
    <div class="col-3 p-1"><div class="row-item di" data-send="true">${
      item.district
    }</div></div>
    <div class="col-3 p-1"><div class="row-item ">کم</div></div>
    <div class="col-3 p-1"><div class="row-item ">${await nameO(
      item.oprator_Las
    )}</div></div>                                     
    </div>
    `;

    containerRows.innerHTML += note;
  });
};
await renderPage();
/*-----------render page----------------*/

/*---------------add row----------------*/

const btnAddRow = document.querySelector("#btn-add-row");

const addRow = () => {
  const rows = document.querySelectorAll(".table-one");
  const row = `
    <div class="table-row table-one">
    <div class="col-1 p-1"><div class="row-item jalseh">${
      rows.length + 1
    }</div></div>
    <div class="col-2 p-1"><div class="row-item date"><input type="text" value=""></div></div>
    <div class="col-3 p-1"><div class="row-item "data-send="false"><input type="text"  class="di" value=""></div></div>
    <div class="col-3 p-1"><div class="row-item "><input type="text" class="" value="کم"></div></div>
    <div class="col-3 p-1"><div class="row-item "><input type="text" class="op" value="${
      oprator.name
    }"></div></div>                                     
    </div>
    `;

  containerRows.innerHTML += row;
};

btnAddRow.addEventListener("click", () => {
  const rows = document.querySelectorAll(".table-one");

  if (rows.length === 10) {
      btnAddRow.classList.add("no-active");
      btnAddRow.innerHTML = "اتمام جلسات";
    return;
  } 

  addRow();
  btnAddRow.style.display = "none"
});

/*---------------add row----------------*/

/*------------------add jalseh------------------*/
window.sendJalseh = async () => {
  const rows = [...document.querySelectorAll(".table-one")];
  const index = rows.length - 1;
  const jalseh = document.querySelectorAll(".jalseh");
  const date = document.querySelectorAll(".date");
  const district = document.querySelectorAll(".di");
  const dateValue = date[index].children[0].value;

  if (!dateValue.trim() || !district[index].value) {
    toast(`لطفا تمامی فیلد های جلسه ${+jalseh[index].innerHTML}راپرکنید`);
  }

  const data = {
    numbermeet: +jalseh[index].innerHTML,
    descriptions: dateValue,
    oprator_Las: opratorId,
    district: district[index].value,
    user: +userId,
  };

  await addCartex(data);
};

const addJalseh = document.querySelector("#btn-add-jalseh");

addJalseh.addEventListener("click", sendJalseh);

/*------------------add jalseh------------------*/
