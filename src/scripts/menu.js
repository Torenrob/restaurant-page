import img0 from "../../assets/images/images1.jpeg";
import img1 from "../../assets/images/images2.jpeg";
import img2 from "../../assets/images/images3.jpeg";
import img3 from "../../assets/images/images4.jpeg";
import img4 from "../../assets/images/images5.jpeg";
import img5 from "../../assets/images/images6.jpeg";

export default function menu() {
	//Get content area of page
	const content = document.getElementById("content");

	//Create factory for page elements to include id's and content
	const pageElement = (
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

	//Create header for menu page
	const head1 = pageElement(
		"h3",
		null,
		"menuHeader",
		"Welcome to our cozy cafe! <br> We invite you to experience the flavors of the Mediterranean, right here in our charming space. Our menu features a variety of classic dishes, made with fresh, high-quality ingredients. <br> From our signature pasta dishes to our delicious desserts, we have something to satisfy every taste. Whether you're looking for a quick bite to eat or a leisurely meal with friends, we're the perfect place to enjoy a taste of the south. So come on in and let us transport you to the warmth of the Mediterranean."
	);

	//Create image elements for menu list
	const images = [img0, img1, img2, img3, img4, img5];
	const menuItemImgs = [];
	for (let i = 0; i < images.length; i++) {
		menuItemImgs[i] = pageElement("img", "menuImages", null, null, images[i]);
	}

	//Create list items for menue
	const dishes = [
		"Meze platter",
		"Hummus with pita bread",
		"Falafel sandwich",
		"Grilled fish with lemon and herbs",
		"Pasta with tomato sauce and basil",
		"Baklava",
	];
	const menuItems = [];
	for (let i = 0; i < dishes.length; i++) {
		menuItems[i] = pageElement("li", "menuItem", null, dishes[i]);
	}

	//Create UL for menu
	const menuUl = pageElement("ul", null, "menuList", "");

	//Add list items to menuUl
	menuItems.forEach((item) => {
		menuUl.append(item);
	});

	console.log(menuItems);
	console.log(menuUl);
	content.appendChild(menuUl);
}
