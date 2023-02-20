import { getManager } from "../api/managers.js";
import { getId } from "../helper.js";

const id = getId(window.location.search);

const manager = await getManager(3);




const allTypes = [
  { title: "opratorF", type: "Feeding", name: "اپراتور فروش" },
  { title: "opratorW", type: "Wedding", name: "اپراتور عروسی" },
  { title: "opratorB", type: "Beauty", name: "اپراتور زیبایی" },
  { title: "opratorP", type: "Photographic", name: "اپراتور عکاسی" },
  { title: "opratorM", type: "Medical", name: "اپراتور پزشکی" },
  { title: "opratorL", type: "Laboratory", name: "اپراتور آزمایشگاه" },
  { title: "opratorS", type: "Sports", name: "اپراتور ورزشی" },
];

const renderPage = async () => {
  const container = document.querySelector("#container");

  const { image, name, types, age, id } = manager;

  container.innerHTML = `
                        <div class="logo">
                            <div class="col-3">
                                <img src="${image}" alt="">
                            </div>
                        </div>
                        <div class="up">
                            <div class="profile col-4 col-md-4">
                                <div class="imge-user-profile col-6">
                                    <img src="../assets/images/5.png" alt="">
                                </div>
                                <div class="col-6 name-user">
                                    <div>
                                    ${name}                                    </div>

                                </div>
                            </div>
                            <div class="pakage">
                                <select name="brand" id="type-user" class="khadamat">
                                ${Object.keys(allTypes)
                                  .map((key) => {
                                    return `<option value=${allTypes[key].type} ${allTypes[key].type === types && "selected = 'selected'"} >${allTypes[key].name}</option>`;
                                  })
                                  .join("")}
                                </select>
                            </div>

                        </div>





                        <div class="content-moshakhasat">
                            <div class="col-12 p-2">
                                <label for="name-user" class="title">نام
                                   </label>
                                <div class="information-item">
                                    <input type="text" value="${name}" class="item-user"
                                        id="name-user" name="name-user">
                                        <span><img src="../assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            <div class="col-12 p-2">
                                <label for="name-user" class="title">نام خانوادگی
                                   </label>
                                <div class="information-item">
                                    <input type="text" value="${name}" class="item-user"
                                        id="family-user" name="family-user">
                                        <span><img src="../assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            <div class="col-12 p-2">
                                <label for="age-user" class="title">سن
                                   </label>
                                <div class="information-item">
                                    <input type="text" value="${age}" class="item-user"
                                        id="age-user" name="phone-number-user">
                                        <span><img src="../assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            <div class="col-12 p-2">
                                <label for="password-user" class="title">رمز عبور
                                   </label>
                                <div class="information-item">
                                    <input type="password" value="23123654" class="item-user"
                                        id="password-user" name="password">
                                        <span><img src="../assets/images/icon-valla/edit.png" alt=""></span>
                                </div>
                                
                            </div>
                            

                            <div class="btn-sabt" onclick="sabtInfo(${id})">
                                <span class="col-3">ثبت </span>
                            </div>

                        </div>

                        <div class="down-profile-user d-flex flex-column align-items-center">
                            
                                <div class="col-6 p-2"><a href="../my-activities.html">
                                    <div class="down-profile-item">فعالیت ها</div></div>
                                </a>
                            <div class="col-6 p-2"><div
                                    class="down-profile-item">تیکت های پاسخ داده
                                    شده</div></div>
                          
                           

                        </div>
                    `;
};

await renderPage();

/*---------------------------sabt info-----------------------------*/

window.sabtInfo = (id) => {
  
    const name = document.querySelector("#name-user")
    const age = document.querySelector("#age-user")
    const password = document.querySelector("#password-user").value
    const type = document.querySelector("#type-user")


    const data = {
        name : name.value,
        age : age.value,
        password : password,
        type : type.value
    }


    console.log(data)

};

/*---------------------------sabt info-----------------------------*/
