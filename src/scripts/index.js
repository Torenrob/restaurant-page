import "../styles/reset.css";
import "../styles/style.css";
import homePage from "./homePage.js";
import menu, { menuItemImgs, menuItems } from "./menu";
import background from "../../assets/images/falafel.png";

const backImg = new Image();
const backgroundContainer = document.createElement("div");
backgroundContainer.append(backImg);
backgroundContainer.id = "backgroundImgContainer";
backImg.id = "backgroundImg";
backImg.src = background;
document.body.append(backgroundContainer);

menu();

menuItems.forEach((x) => (x.style.width = "20%"));

// homePage();
