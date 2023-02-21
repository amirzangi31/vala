import { getManager } from "../api/managers.js";
import { getUserWithId } from "../api/user.js";
import { getPath, getUserLocalStorage } from "../helper.js";

/*----------------render page-------------------*/

const idUrl = await getPath(window.location.search);
const user = await getUserWithId(+idUrl);
const opratorId = await getUserLocalStorage("user-admin");
const oprator = await getManager(+opratorId);

const renderPage = async () => {
  const titleContainer = document.querySelector("#title");
  const title = `
    <div class="imge-user-profile col-6">
                                    <img src="http://127.0.0.1:8000/${oprator.image}" alt="">
                                </div>
                                <div class="col-6 name-user">
                                    <div>
                                        ${oprator.name} 
                                    </div>

</div>`;
  titleContainer.innerHTML += title;

  const containerMain = document.querySelector("#content");
  const content = `
    <div class="col-12 p-2">
                                <label for="name-user" class="title">نام
                                   </label>
                                <div class="information-item">
                                    <input type="text" value="${user.name}" class="item-user"
                                        id="name-user" name="name-user">
                                        <span><img src="../assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            <div class="col-12 p-2">
                                <label for="name-user" class="title">نام خانوادگی
                                   </label>
                                <div class="information-item">
                                    <input type="text" value="${user.name}" class="item-user"
                                        id="family-user" name="family-user">
                                        <span><img src="../assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            <div class="col-12 p-2">
                                <label for="name-user" class="title">شماره تماس
                                   </label>
                                <div class="information-item">
                                    <input type="text" value="${user.phone_number}" class="item-user"
                                        id="phone-number" name="phone-number-user">
                                        <span><img src="../assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            <div class="col-12 p-2">
                                <label for="name-user" class="title">رمز عبور
                                   </label>
                                <div class="information-item">
                                    <input type="password" value="23123654" class="item-user"
                                        id="password" name="password">
                                        <span><img src="../assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            

                            <div class="btn-sabt">
                                <span class="col-3">ثبت </span>
                            </div>

                        </div>

                        <div class="down-profile-user d-flex align-item-center flex-wrap">
                            <div class="col-6 p-2"><div
                                    class="down-profile-item">روند بهبودی</div></div>
                            <div class="col-6 p-2"><div
                                    class="down-profile-item">خدمات دریافتی
                                    شده</div></div>
                                    <div class="col-6 p-2"><div
                                      class="down-profile-item">روتین ها</div></div>
                                     <div class="col-6 p-2"><div
                                      class="down-profile-item" id="color">حذف کاربر</div></div>

    </div>`;

  containerMain.innerHTML = content;
};

await renderPage();

/*----------------render page-------------------*/