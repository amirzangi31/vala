
import { baseUrl } from "./api/baseUrl.js"

import { getUserLocal } from "./api/validateLoginUser.js`";

await getUserLocal();


const url = await baseUrl()


const urls = [
    {path : `Wedding` , color : "blue" , title : "عروسی"},
    {path : `Beauty` , color : "green" , title : "زیبایی"},
    {path : `Photographic` , color : "tree" , title : "عکاسی"},
    {path : `Medical` , color : "four" , title : "پزشکی"},
    {path : `Laboratory` , color : "five" , title : "آزمایشگاه"},
    {path : `Sports` , color : "blue" , title : "ورزشی"},
]


/*---------------render page-------------------*/

const renderPage = async() =>{

    const container = document.querySelector("#container")

    urls.forEach((item , index) => {
        const note = `<div class="col-10 col-md-8 p-2">
        <a href="${url}page-khadamat.html?${item.path}">
            <div class="item-profile" id="${item.color}">
                <div class="inner-item-hozori">
                    ${item.title}
                </div>
            </div>
        </a>
    </div>`


    container.innerHTML += note
    })


}


await renderPage()

/*---------------render page-------------------*/


