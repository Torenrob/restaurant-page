import "../styles/reset.css";
import "../styles/style.css";
import homePage from "./homePage.js";
import menu, { menuItemImgs, menuItems } from "./menu";
import contactPage from "./contact";
import background from "../../assets/images/falafel.png";

export const content = document.getElementById("content");
const backImg = new Image();
const backgroundContainer = document.createElement("div");
const homeTab = document.getElementById("homeTab");
const menuTab = document.getElementById("menuTab");
const contactTab = document.getElementById("contactTab");

backgroundContainer.append(backImg);
backgroundContainer.id = "backgroundImgContainer";
backImg.id = "backgroundImg";
backImg.src = background;
document.body.prepend(backgroundContainer);

window.addEventListener("load", (x) => homePage());

homeTab.addEventListener("click", (x) => {
	content.replaceChildren();
	homePage();
});

menuTab.addEventListener("click", (x) => {
	content.replaceChildren();
	menu();
});

contactTab.addEventListener("click", (x) => {
	content.replaceChildren();
	contactPage();
});
