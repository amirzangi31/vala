import { getAllFood, getProgram } from "./api/managers.js";
import { addProgram, getAllDiet } from "./api/program.js";
import { getDataLocal, getPath } from "./helper.js";

const userId = await getDataLocal("sign");

const opraotrId = await getDataLocal("user-admin");
const table = [
  { title: "شنبه" },
  { title: "یکشنبه" },
  { title: "دو شنبه" },
  { title: "سه شنبه" },
  { title: "چهار شنبه" },
  { title: "پنح شنبه" },
  { title: "جمعه" },
];

/*--------------------render Page---------------------*/
const getDiet = await getAllDiet();
const dietUser = getDiet.filter((item) => item.user.id === 1);
const index = dietUser.length - 1;
const split = dietUser[index].diet.split(",");

const splitHandler = async(start , end , roz) => {
  const arr = split.slice(start , end)
  const shanbe = document.querySelector(`.roz-${roz}`)
  const ttt = arr.map(item => JSON.parse(item).name)
  
  ttt.forEach(item => {
    const note = `
    <div class="food-item-user" >${item}</div>
    `
    
    shanbe.innerHTML += note;
  });
}


const renderPage = async () => {
  const container = document.querySelector("#hafteh")
  table.forEach(async (item, index) => {
    
    const note = `
    <div class="text-center" style="width : 12.5%">${item.title}</div>
    `;
    
    container.innerHTML += note;
    
  });
  await splitHandler(0 , 5 , 1);
  await splitHandler(5 , 10 , 2);
  await splitHandler(10 , 15 , 3);
  await splitHandler(15 , 20 , 4);
  await splitHandler(20 , 25 , 5);
  await splitHandler(25 , 30 , 6);
  await splitHandler(30 , 35 , 7);
  
};

await renderPage();

/*--------------------render Page---------------------*/
