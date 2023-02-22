
import { getAllUsers } from "../api/user.js"
import {  phoneHandlerReverse } from "../helper.js"
import { validateLogin } from "../api/validateLoginAdmin.js";
await validateLogin()
/*---------------- render page -------------------*/


const allUsers = await getAllUsers()
console.log(allUsers)

const renderpage =async() => {

console.log("dsaknvkaj")
    const container = document.querySelector("#container")

    allUsers.forEach((item , index) => {
        const note = `
        <div class="col-12 col-md-3 p-2">
        <div class="cartex-item">
            <div class="main-content">
                <div class="right-cartex-item col-10">
                    <div class="name">${item.name}</div>
                    <div class="phonne-number">${phoneHandlerReverse(item.phone_number)}</div>
                </div>
                <div class="left-cartex-item col-2">
                    <div class="icon-left"><img src="./assets/images/icon-valla/edit.png" alt=""></div>
                    <div class="icon-left"><img src="./assets/images/icon-valla/edit-icon.png" alt=""></div>
                </div>

            </div>
            <a href="./cartex.html?${item.id}" class="show-information d-block text-center">مشاهده اطلاعات</a>
            
        </div>
    </div>
        
        `

        container.innerHTML += note 

    });


}


await renderpage()
/*--------------- render page --------------------*/