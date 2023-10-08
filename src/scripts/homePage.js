export default function homePage() {
	const content = document.getElementById("content");
	const head1 = document.createElement("h1");
	head1.setAttribute("id", "homeHeader");
	head1.setAttribute("class", "homeEls");
	const p = document.createElement("p");
	p.setAttribute("id", "homePara");
	p.setAttribute("class", "homeEls");

	head1.innerText = "Experience the Wonderful World of Food at Dadé Café";
	p.innerHTML =
		"At Dadé Café, we believe that food should be a celebration. That's why we use only the freshest ingredients and prepare our dishes with care and attention to detail. <br><br> Whether you're in the mood for a classic dish or something new and exciting, we have something for everyone. Our menu features a wide variety of options, from hearty entrees to light and refreshing appetizers. <br><br> But more than just great food, we also offer a warm and inviting atmosphere where you can relax and enjoy a meal with friends and family. Our friendly staff is always happy to help you choose the perfect dish and make your dining experience unforgettable.";

	let elements = [head1, p];

	elements.forEach((x) => content.appendChild(x));
}
