import { getUserWithId } from "../api/user.js";
import { getPath, phoneHandlerReverse } from "../helper.js";
import { validateLogin } from "../api/validateLoginAdmin.js";
await validateLogin()
const containerRows = document.querySelector("#container-rows");

const userId = getPath(window.location.search);

const user = await getUserWithId(+userId);
console.log(user)

/*-----------render page----------------*/
const renderPage = async () => {
    const containerTitle = document.querySelector("#title");

    const title = `
    <div class="col-4 p-1">
                                            <div class="information-item text-center">${user.name}</div>
                                        </div>
                                        <div class="col-4 p-1">
                                            <div class="information-item text-center">${user.nationalcode}</div>
                                        </div>
                                        <div class="col-4 p-1">
                                            <div class="information-item text-center">${phoneHandlerReverse(user.phone_number)}</div>
                                        </div>
    `
    containerTitle.innerHTML = title

};
await renderPage();
/*-----------render page----------------*/

/*---------------add row----------------*/

const btnAddRow = document.querySelector("#btn-add-row");
const rows = document.querySelectorAll(".table-one");

const addRow = () => {
  const row = `
    <div class="table-row table-one">
        <div class="col-1 p-1"><div class="row-item "><input type="text" value="1"></div></div>
        <div class="col-2 p-1"><div class="row-item "><input type="text" value="2/8/1377"></div></div>
        <div class="col-3 p-1"><div class="row-item "><input type="text" value="دست"></div></div>
        <div class="col-3 p-1"><div class="row-item "><input type="text" value="کم"></div></div>
        <div class="col-3 p-1"><div class="row-item "><input type="text" value="سارا حسنی"></div></div>                                     
   </div>
    `;

  containerRows.innerHTML += row;
};

btnAddRow.addEventListener("click", () => {
  if (rows.length === 9) {
    btnAddRow.classList.add("no-active");
    btnAddRow.innerHTML = "اتمام جلسات"
    return
  };
  addRow();
});

/*---------------add row----------------*/
