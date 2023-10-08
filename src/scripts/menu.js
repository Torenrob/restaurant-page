import img0 from "../../assets/images/images1.jpeg";
import img1 from "../../assets/images/images2.jpeg";
import img2 from "../../assets/images/images3.jpeg";
import img3 from "../../assets/images/images4.jpeg";
import img4 from "../../assets/images/images5.jpeg";
import img5 from "../../assets/images/images6.jpeg";

//Create factory for page elements to include id's and content
export const pageElement = (
	tag,
	cls = null,
	id = null,
	content = null,
	src = null
) => {
	let elem = document.createElement(tag);
	elem.setAttribute("id", id);
	elem.setAttribute("class", cls);

	if (typeof content == "string") {
		elem.innerHTML = content;
	} else {
		elem.append(content);
	}

	elem.setAttribute("src", src);

	return elem;
};

const menu = () => {
	const menuItemImgs = [];
	const menuItems = [];
	//Get content area of page
	const content = document.getElementById("content");

	//Create image elements for menu list
	const images = [img0, img1, img2, img3, img4, img5];
	for (let i = 0; i < images.length; i++) {
		menuItemImgs[i] = pageElement(
			"img",
			"menuImages",
			`menuImg${i}`,
			null,
			images[i]
		);
	}

	//Create list items for menue
	const dishes = [
		"Meze Platter",
		"Hummus with Pita Bread",
		"Falafel Sandwich",
		"Grilled Fish with Lemon and Herbs",
		"Pasta with Tomato Sauce and Basil",
		"Baklava",
	];
	for (let i = 0; i < dishes.length; i++) {
		menuItems[i] = pageElement("li", "menuItem", null, menuItemImgs[i]);
		dishes[i] = pageElement("span", "itemTitles", `itemTitle${i}`, dishes[i]);
		menuItems[i].append(dishes[i]);
	}

	menuItemImgs.forEach((image) => {
		image.addEventListener("mouseover", (x) => {
			dishes[x.target.id[x.target.id.length - 1]].classList.add("opacity");
		});
		image.addEventListener("mouseleave", (x) => {
			dishes[x.target.id[x.target.id.length - 1]].classList.remove("opacity");
		});
	});

	//Create UL for menu
	const menuUl = pageElement("ul", null, "menuList", "");

	//Add list items to menuUl
	menuItems.forEach((item) => {
		menuUl.append(item);
		item.style.width = "40%";
	});

	menuUl.style.height = "826px";
	content.appendChild(menuUl);
};

export default menu;
