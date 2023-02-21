import { getUserWithId, updateUser } from "./api/user.js";
import { getDataLocal } from "./helper.js";
/*----------------render Page---------------------*/

const userId = await getDataLocal("user");
const user = await getUserWithId(+userId);
const renderPage = async () => {
  const { name, birthday, weight, height, id, profileimage, phone_number } =
    user;

  const container = document.querySelector("#container");
  const titleContainer = document.querySelector("#title-container");
  const noteOne = `
  <div class="imge-user-profile col-6">
                               <img src="http://127.0.0.1:8000/${profileimage}" alt="">
                                </div>
                                
                                <div class="col-6 name-user">
                                    <div>
                                        ${name}
                                    </div>

                                </div>
                                <span class="upload-image"> <img src="./assets/images/icon-valla/+.png" alt=""></span>`;
  const note = `
    <div class="col-12 p-2">
                                <label for="name-user" class="title">نام
                                   </label>
                                <div class="information-item">
                                    <input type="text" value="${name}" class="item-user"
                                        id="name" name="name-user">
                                        <span><img src="./assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            
                            <div class="col-12 p-2">
                                <label for="name-user" class="title">تاریخ تولد
                                   </label>
                                <div class="information-item">
                                    <input type="date" value="${birthday}" class="item-user"
                                        id="birthday" name="phone-number-user">
                                        <span><img src="./assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            <div class="col-12 p-2">
                                <label for="name-user" class="title">شماره همراه
                                   </label>
                                <div class="information-item">
                                    <input type="text" value="${phone_number}" class="item-user"
                                       id="phone" >
                                        <span><img src="./assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            <div class="col-12 p-2">
                                <label for="name-user" class="title">قد
                                   </label>
                                <div class="information-item">
                                    <input type="text" value="${height}" class="item-user"
                                        id="height">
                                        <span><img src="./assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            <div class="col-12 p-2">
                                <label for="name-user" class="title">وزن
                                   </label>
                                <div class="information-item">
                                    <input type="text" value="${weight}" class="item-user"
                                    id="weight" >
                                        <span><img src="./assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            <div class="col-12 p-2">
                                <label for="name-user" class="title">رمزعبور
                                   </label>
                                <div class="information-item">
                                    <input type="password" value="23123654" class="item-user"
                                       id="password" >
                                        <span><img src="./assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            

                            <div class="btn-sabt" onclick="sabtHandler(${id})">
                                <span class="col-3">ثبت </span>
                        </div>`;
  container.innerHTML += note;
  titleContainer.innerHTML += noteOne;
};

await renderPage();
/*----------------render Page---------------------*/




/*------------------sabt handler-------------------*/
window.sabtHandler = async (id) => {
  const name = document.querySelector("#name").value;
  const birthday = document.querySelector("#birthday").value;
  const weightU = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value;
  const password = document.querySelector("#password").value;
  const phone = document.querySelector("#phone").value;

  const data = {
    name,
    birthday,
    weight: weightU,
    height,
    phone_number: phone,
  };

  await updateUser(id, data);
};
/*------------------sabt handler-------------------*/
