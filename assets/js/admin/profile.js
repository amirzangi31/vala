import { getManager } from "../api/managers.js";
import { deleteUser, getUserWithId, updateUser } from "../api/user.js";
import { getPath, getUserLocalStorage } from "../helper.js";
import { validateLogin } from "../api/validateLoginAdmin.js";
await validateLogin()
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
                                        id="name" name="name-user">
                                        <span><img src="../assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            <div class="col-12 p-2">
                                <label for="name-user" class="title">سن 
                                   </label>
                                <div class="information-item">
                                    <input type="text" value="${user.age}" class="item-user"
                                        id="age" name="family-user">
                                        <span><img src="../assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            <div class="col-12 p-2">
                                <label for="phone" class="title">شماره تماس
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
                            

                            <div class="btn-sabt" onclick="updateUser(${user.id}">
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
                                     <div class="col-6 p-2" ><div
                                      class="down-profile-item" id="color" onclick="deleteHandler(${user.id})">حذف کاربر</div></div>

    </div>`;

  containerMain.innerHTML = content;
};

await renderPage();

/*----------------render page-------------------*/



/*-----------------edit user------------------*/


window.updateUser = async(id) =>{

    const name = document.querySelector("#name").value
    const age = document.querySelector("#age").value
    const phone = document.querySelector("#phone").value
    const password = document.querySelector("#password").value

    const data ={
        name,
        age,
        phone_number : phone,
    }


    await updateUser(id , data)


}


/*-----------------edit user------------------*/



/*-----------------delete user------------------*/

window.deleteHandler = async(id) => {
    await deleteUser(id)
}

/*-----------------delete user------------------*/


