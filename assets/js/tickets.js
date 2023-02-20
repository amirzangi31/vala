import { getAllTickets, getReplyTicket } from "./api/tickets.js";
import { getDataLocal } from "./helper.js";

const userId = await getDataLocal("user");

/*----------------render page------------------*/
const renderPage = async () => {
  const allTickets = await getAllTickets();
  const replyTickets = await getReplyTicket();
  const tickets = allTickets.filter((item) => item.user.id === userId);
  const container = document.querySelector("#container-tickets");

  tickets.forEach((item, index) => {
const reply = replyTickets.filter(element => element.ticket === item.id)
console.log(reply)
    const note = `
        <div class="col-12 col-md-6 p-1">
        <div class="item-ticket ">
            <div class="title d-flex justify-content-between align-items-center my-2">
              <span>${item.user.name}</span>
            </div>
            <div class="des-1">
                    ${item.message}
            </div>
            <span style="color:#fff;">پاسخ ادمین</span>
            <div class="des-2">
                ${!!reply.length ? reply[0].message : "<span class='text-warning'>درحال بررسی</span>"}
             </div>
          </div>
    </div>
        `;

    container.innerHTML += note;
  });
};

await renderPage();
/*----------------render page------------------*/
